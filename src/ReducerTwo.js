import React ,{useReducer}from 'react'


const reducer=(state, action)=>{
    if(action.type==='ride') return{money: state.money+1}
    if(action.type==='fuel') return{money: state.money-1}
}
const ReducerTwo = () => {
    const inistialState={money:100}
    const [state, dispatch]=useReducer(reducer,inistialState)
  return (
    <div>

        <h1>{state.money}</h1>
        <div><button onClick={()=>dispatch({type:'ride'})}> Ride</button>
        <button onClick={()=>dispatch({type:'fuel'})}> Ride</button></div>
    </div>
  )
}

export default ReducerTwo