import React,{useEffect,useState} from 'react'

const UseEffect = () => {

    const[data, setData]=useState('')


    useEffect(()=>{

        const fetchData=async()=>{
            const response = await fetch('http://api.example.com/data')
            const json = await response.json()
            setData(json)
        }
        fetchData()
    },[])
//acessing api

    if(!data){
        return(<h1>Loading...</h1>)
        
    }
  return (
    <div>

{data}

    </div>
  )
}

export default UseEffect