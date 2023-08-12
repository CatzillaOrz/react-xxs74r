import React from 'react';
import './style.css';
import { useState } from 'react';

export default function App() {
  const [advice, setAdvice] = useState('');
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();
    setAdvice(data.slip.advice);
  }
  return (
    <div>
      <div>{advice}</div>
      <h1>Click to get A Advice!</h1>
      <p>Start editing to see some magic happen :)</p>
      <button onClick={getAdvice}> Get Advice</button>
    </div>
  );
}
