import React from 'react';
import Card from './Components/Card';
import { cards } from "./Data";

function App() {
  return (
    <React.Fragment className = "App">
    {
    cards.map((card) =>
    <Card img={card.img} englishWord={card.englishWord} transcription={card.transcription} russianWord={card.russianWord}/>
    )}
  </React.Fragment>
  );
}

export default App;