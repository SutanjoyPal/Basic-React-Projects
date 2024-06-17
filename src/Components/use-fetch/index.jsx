import { useEffect, useState } from "react";




export default function useFetch(url , options = {}){
    //3 states
    const [data,setData] = useState(null);
    const [pending,setPending] = useState(false);
    const [error,setError] = useState(null);


    async function fetchData(){
        setPending(true);
        try {
            const response = await fetch(url,{...options});
            if(!response.ok) throw new Error(response.statusText);

            const result = await response.json();
            setData(result);
            setPending(false);
            setError(null);
        } catch (e) {
            setError(`${ e }. Some error occured!`)
            setPending(false);
        }
    }


    useEffect(()=>{
        fetchData();
    },[url])

    return {data , error , pending}
}