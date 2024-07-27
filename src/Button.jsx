import { useState } from 'react';

const Button = () => {
  const [text, setText] = useState('');
  const [inputValue, setInputValue] = useState('');

  const click = () => {
    setText(inputValue);
    setInputValue('');
  }

  const change = (e) => {
    setInputValue(e.target.value);
  }

  return (
    <>
      <h2>I know how to use {text}</h2>
      <form>
        <input type="text" value={inputValue} onChange={change} />
        <button onClick={click}>Click</button>
      </form>
    </>
  );
}

export default Button;
