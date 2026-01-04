import WebTorrent from "webtorrent";

// Use a global client to prevent creating multiple instances in dev mode hot-reloads
// or multiple requests.
// Note: In serverless, this might reset, but for long running node server it helps.
const client = global.webtorrentClient || new WebTorrent();
if (process.env.NODE_ENV !== 'production') global.webtorrentClient = client;

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const magnet = searchParams.get("magnet");

    if (!magnet) {
        return new Response("No magnet link provided", { status: 400 });
    }

    // We need to support Range headers for video seeking
    const range = request.headers.get("range");

    try {
        const torrent = await new Promise((resolve, reject) => {
            const existing = client.get(magnet);
            if (existing) {
                resolve(existing);
            } else {
                client.add(magnet, (t) => resolve(t));
            }
        });

        // Find the largest file, usually usage for movies
        // Or filter by .mp4/.mkv
        const file = torrent.files.find(f => f.name.endsWith(".mp4") || f.name.endsWith(".mkv") || f.name.endsWith(".webm")) || torrent.files.sort((a, b) => b.length - a.length)[0];

        if (!file) {
            return new Response("No video file found in torrent", { status: 404 });
        }

        const fileSize = file.length;

        if (range) {
            const parts = range.replace(/bytes=/, "").split("-");
            const start = parseInt(parts[0], 10);
            const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
            const chunksize = (end - start) + 1;

            const stream = file.createReadStream({ start, end });

            // Convert Node stream to Web ReadableStream
            const readable = new ReadableStream({
                start(controller) {
                    stream.on('data', chunk => controller.enqueue(chunk));
                    stream.on('end', () => controller.close());
                    stream.on('error', err => controller.error(err));
                }
            });

            return new Response(readable, {
                status: 206,
                headers: {
                    "Content-Range": `bytes ${start}-${end}/${fileSize}`,
                    "Accept-Ranges": "bytes",
                    "Content-Length": chunksize,
                    "Content-Type": "video/mp4",
                },
            });

        } else {
            const stream = file.createReadStream();
            // Convert Node stream to Web ReadableStream
            const readable = new ReadableStream({
                start(controller) {
                    stream.on('data', chunk => controller.enqueue(chunk));
                    stream.on('end', () => controller.close());
                    stream.on('error', err => controller.error(err));
                }
            });

            return new Response(readable, {
                status: 200,
                headers: {
                    "Content-Length": fileSize,
                    "Content-Type": "video/mp4",
                },
            });
        }

    } catch (err) {
        console.error("Torrent stream error:", err);
        return new Response("Error streaming torrent", { status: 500 });
    }
}
