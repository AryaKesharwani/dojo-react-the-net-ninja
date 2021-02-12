import {useState, useEffect} from "react"

const useFetch=(url)=>{

    const [data,setData]=useState(null)
    const [isPending, setisPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=>{
        fetch(url)
        .then(response=>{
            // console.log(response);
            if(response.ok){
                return response.json()
            }else{
                throw Error('could not fetch the data for that resource')
            }
        })
        .then(data=>{
            setData(data)
            setisPending(false)
            setError(null)
        }).catch(err=>{
            // console.log(err.message);
            setError(err.message)
            setisPending(false)
        })
    },[])

    return {data,isPending,error}

}


export default useFetch



