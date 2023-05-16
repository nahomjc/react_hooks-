
import './App.css';
import ReducerTutorial from './ReducerTutorial';
import { InputRef } from './InputRef';
import UseLayoutEffect from './UseLayoutEffect';
import ReducerTwo from './ReducerTwo';
import { Link, Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav>
      <Link to={'/'}><h3>Home</h3></Link> 
      <Link to={'/ReducerTwo'}><h3>ReducerTwo</h3></Link>  
      <Link to={'/InputRef'}><h3>InputRef</h3></Link>  
      <Link to={'/UseLayoutEffect'}><h3>UseLayoutEffect</h3></Link>   
      <Link to={'/ReducerTwo'}><h3>ReducerTutorial</h3></Link>    
        
      </nav>
    <Routes>
      <Route path='/' element={<ReducerTwo/>}/>
      <Route path='/ReducerTutorial' element={<ReducerTutorial/>}/>
      <Route path='/InputRef' element={<InputRef/>}/>
      <Route path='/UseLayoutEffect' element={<UseLayoutEffect/>}/>
      <Route path='/ReducerTwo' element={<ReducerTwo/>}/>
   </Routes>
    </div>
  );
}

export default App;
