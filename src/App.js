import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  // Stany przechwytujące dane formularza
  const [tytul, setTytul] = useState("");
  const [rodzaj, setRodzaj] = useState("");

  // Fumkcja obsługująca przycisk "Dodaj"
  const handleSubmit = (e) => {
    e.preventDefault(); // Zapobiega odśweirzaniu strony po kliknięciu "Dodaj"

    // Wyświetlanie ddanych formularza w konsoli
    console.log('Tytul: ' + tytul + ', Rodzaj: ' + rodzaj);
  };
}

export default App;
