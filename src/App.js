import React, { useState } from 'react';
import './App.css';
const App = () => {
  const [number, setNumber] = useState(0);
  const [result, setResult] = useState('');

  const convertToLetters = () => {
    const units = [
      'cero', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'
    ];
    const teens = [
      'diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve'
    ];
    const tens = [
      '', 'diez', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'
    ];
    const hundreds = [
      '', 'ciento', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecientos'
    ];
    const thousands = [
      '', 'mil', 'millón', 'mil millones'
    ];

    let tempNumber = number;
    let letters = '';

    if (tempNumber === 0) {
      setResult('cero');
      return;
    }

    let currentSegment = 0;

    while (tempNumber > 0) {
      const segment = tempNumber % 1000;
      if (segment > 0) {
          if (letters !== '') {
          letters = ' ' + letters;
          }
          letters = thousands[currentSegment] + letters;
          let segmentLetters = '';
          let tempSegment = segment; // Usamos una variable auxiliar para no modificar segment

          if (tempSegment >= 100) {
          segmentLetters += hundreds[Math.floor(tempSegment / 100)] + ' ';
          tempSegment %= 100;
          }

          if (tempSegment >= 10 && tempSegment <= 19) {
          segmentLetters += teens[tempSegment - 10] + ' ';
          tempSegment = 0;
          } else {
          segmentLetters += tens[Math.floor(tempSegment / 10)] + ' ';
          tempSegment %= 10;
          }

          if (tempSegment > 0) {
          segmentLetters += units[tempSegment];
          }
          letters = segmentLetters + letters;
      }
      tempNumber = Math.floor(tempNumber / 1000);
      currentSegment++;
  }

  setResult(letters.trim());
};

  return (
    <div className="container">
      <h1>Número a Letras</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={convertToLetters}>Convertir</button>
      <p>Resultado: {result}</p>
    </div>
  );
};

export default App;

