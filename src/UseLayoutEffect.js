import React,{useLayoutEffect, useEffect} from 'react'

const UseLayoutEffect = () => {

    useLayoutEffect(()=>{
 console.log('useLayoutEffect')
    },[])

    useEffect(()=>{
        console.log('useEffect')
    })
  return (
    <div>useLayoutEffect</div>
  )
}

export default UseLayoutEffect