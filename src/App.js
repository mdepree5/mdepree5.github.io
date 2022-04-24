import { useState } from 'react';
// ???? ——————————————————————————————————————————————————————————————————————————————————
import Navigation from './components/1_Navigation'
import Sections from './components/2_Sections'
import Footer from './components/3_Footer'
import './App.css';
// ???? ——————————————————————————————————————————————————————————————————————————————————

const App = () => {
  const [mode, switchMode] = useState('dark')

  return (
    <div className={`${mode} App col-list`}>
      <Navigation mode={mode} switchMode={switchMode} />

      <Sections />

      <Footer mode={mode}/>
    </div>
  );
}




export default App;
