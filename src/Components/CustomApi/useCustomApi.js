import axios from 'axios'
import React,{useState,useEffect} from 'react'

export default function useCustomApi(url) {
    const [data,setData]=useState([])
    const [loading,setLoading]=useState(true)
    const [error,setError]=useState("")
    useEffect(()=>{
        const fetchApi=async ()=>{
            try{
                const response=await axios.get(url)
                setData(response.data)
            }
            catch(err){
            setError(err.message)
            }
            finally{
                setLoading(false)
            }
            
        }
        fetchApi()
    },[url])
    return{data,loading,error}
}
