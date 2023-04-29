import React,{useRef} from 'react'

export const InputRef = () => {

    const inputRef=useRef(null)

    const handleClick=()=>{
        inputRef.current.focus()
    }
  return (
    <div>

<input ref={inputRef}/>
<button onClick={handleClick}>Click me to focus</button>

    </div>
  )
}
