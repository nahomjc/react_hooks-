import React,{useReducer} from 'react'


const reducer= (state, action)=>{

  switch(action.type){
case 'INCREMANT':
  return{
count: state.count+1, showText: state.showText
  }
  case 'toggle':
    return{count: state.count , showText: !state.showText}
default:
return state
  }
}

function ReducerTutorial() {

    const[state ,dispatch]=useReducer(reducer,{count: 0, showText: true})

  return (
    <div> 
   <h1>{state.count}</h1> 
    <button onClick={()=>{dispatch({type:'INCREMANT'}); dispatch({type:'toggle'})}}>

      Clicke me
    </button>
    <h1>{state.showText&& <p>show Text</p>}</h1>
    </div>
  )
}

export default ReducerTutorial