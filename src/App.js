import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/News';
import { useState } from 'react';
import LoadingBar from "react-top-loading-bar";
function App() {
  const [curr, setCurr]= useState('general');
  const updState= (mode)=>{
    window.scrollTo({ top: 0, behavior: "smooth" });
    setCurr(mode);
    console.log(mode);
  }
  const [progress, setProgress] = useState('0');
  const newProgress = (pro)=>{
        setProgress(pro);
  }
  return (
    <>
    <Navbar updSt= {updState} />
    <LoadingBar
        color='#f11946'
        progress={progress}
        height={3}
      />
    <News mode= {curr} newProgress={newProgress}/>
    </>
  );
}

export default App;
