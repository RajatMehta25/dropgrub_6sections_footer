
import './App.css';
import {Routes,Route, HashRouter} from 'react-router-dom'
import Home from './Pages';

function App() {
  
  return (
   <>
   <HashRouter>
   <Routes>
    <Route path="/" element={<Home/>}/>

  </Routes>
   </HashRouter>
   </>
  );
}

export default App;
