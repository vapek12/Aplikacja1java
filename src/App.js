import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  const [tytul, setTytul] = useState("");
  const [rodzaj, setRodzaj] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Tytul: ' + tytul + ', Rodzaj: ' + rodzaj);
  }
}

export default App;
