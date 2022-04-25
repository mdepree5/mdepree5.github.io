import { useState } from 'react';
// ???? ——————————————————————————————————————————————————————————————————————————————————
import Navigation from './components/1_Navigation'
import Sections from './components/2_Sections'
import Footer from './components/3_Footer'
import './App.css';
// ???? ——————————————————————————————————————————————————————————————————————————————————

const App = () => {
  const [site, setSite] = useState('')
  // const [mode, switchMode] = useState('dark')
  const [mode, switchMode] = useState('light')

  // todo ——————————————————————————————————————————————————————————————————————————————————
  // todo                               Use local storage?
  // todo ——————————————————————————————————————————————————————————————————————————————————

  return (
    <div className={`${mode} App col-list`}>
      <Navigation mode={mode} switchMode={switchMode} setSite={setSite}/>

      <Sections site={site}/>

      <Footer mode={mode}/>
    </div>
  );
}




export default App;
