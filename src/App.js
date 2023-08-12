import React from 'react';
import './style.css';
import { useState, useEffect } from 'react';

export default function App() {
  const [advice, setAdvice] = useState('');
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }

  useEffect(function () {
    getAdvice();
  }, []);
  return (
    <div>
      <div>{advice}</div>
      <h1>Click to get A Advice!</h1>
      <Message count={count} />
      <button onClick={getAdvice}> Get Advice</button>
    </div>
  );
}

function Message(props) {
  return (
    <p>
      You have read <em>{props.count}</em> advices
    </p>
  );
}
