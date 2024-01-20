import { useState } from 'react';
import './Stack.css'; 

const Stack = () => {
  const [stack, setStack] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handlePush = () => {
    if (inputValue !== '') {
      setStack([...stack, inputValue]);
      setInputValue('');
    }
  };

  const handlePop = () => {
    if (stack.length > 0) {
      const updatedStack = [...stack];
      updatedStack.pop();
      setStack(updatedStack);
    }
  };

  return (
    <div className="stack-container">
      <h2>Stack</h2>
      <div className="stack">
        {stack.map((item, index) => (
          <div key={index} className="stack-item">
            {item}
          </div>
        ))}
      </div>

      <div className="stack-actions">
        <div>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter value"
          />
          <button onClick={handlePush}>Push</button>
        </div>
        <button onClick={handlePop}>Pop</button>
      </div>

    </div>
  );
};

export default Stack;
