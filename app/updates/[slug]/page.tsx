
"use client"
import Form from '@/app/components/Form'
import Formupdate from '@/app/components/Formupdate'
import { useState, useEffect } from 'react'
import { usePathname } from "next/navigation"
import { useRouter } from 'next/navigation'

const updates = () => {
    const router = useRouter()
    const params = usePathname();

    const [error, setError] = useState(10);
    const [form, Setform] = useState([])
    const getdata = async () => {

        try {
            const datas = params.split("=")[1]
            console.log(datas, "params.id")
            const data1 = await fetch(`/api/movieupdate/?id=${datas}`, { method: "GET", cache: "no-cache", headers: { "Content-Type": "application/json" } })
            const data2 = await data1.json()
            console.log(data2, "fetching data")
            Setform(data2)




        }
        catch (e) {
            console.log(e, "fetching data error")
        }


    }
    useEffect(() => {
        getdata()

    }, [])
    console.log(form[0], "form")

    const gettingdata = async(datases:any) => {
       const updatedata= await fetch("/api/movieupdate", { method: "PUT", cache: "no-cache", headers: { "Content-Type": "application/json" }, body: JSON.stringify(datases) })
        console.log(datases, "datagetted")
        if(updatedata.ok){
            router.push("/academics")
        }
    }
    return (
        <section className='flex justify-center items-center h-screen'>

            {form.map((item: any) => {
                return (
                    <Formupdate key={item._id} initialData={item} senddata={gettingdata} />
                )
            })}

        </section>
    )
}
export default updates
