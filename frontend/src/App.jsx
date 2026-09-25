import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>
      <h1>Welcome to React Frontend!</h1>
      <p>Your application is ready to build and run with Vite.</p>
      <button onClick={() => setCount((count) => count + 1)} style={{ padding: '8px 16px', fontSize: '16px' }}>
        count is {count}
      </button>
    </div>
  );
}

export default App;
