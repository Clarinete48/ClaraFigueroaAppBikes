import React from 'react';
// import logo from './logo.svg';
import './App.css';
import './Components/BikesJsx';
// import BikesJsx from './Components/BikesJsx';
// import Button from './Components/Button/Button';
// import Counter from './Components/Counter/Counter';
import Navbar from './Components/Navbar/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <h1>BIENVENIDOS</h1>
        {React.createElement (BikesJsx, {name: 'Trek', id:2, desc: ' Fiddler FD-DD02 Módulo MIDI'})}
        <BikesJsx name= 'SantaCruz' id='1' desc=' Freeman FRE40 LP - Color negro'/>
        <Button Label={'cancelar'} background='red' action={() => console.log('cancele')}/>
        <Button Label={'aceptar'} background='green' action={() => console.log('acepte')}/>
        <Counter/> */}
        <Navbar/>
        <ItemListContainer greeting={'Bienvenidos'}/>
      </header>
    </div>
  );
}

export default App;
