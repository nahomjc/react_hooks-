import React,{useReducer} from 'react'


const reducer= (state, action)=>{

  switch(action.type){
case 'INCREMANT':
  return{
count: state.count+1,state.showText:true
  }
default:
return state
  }
}

function ReducerTutorial() {

    const[state ,dispatch]=useReducer(reducer,{count: 0, showText: true})

  return (
    <div> 
    
    </div>
  )
}

export default ReducerTutorial