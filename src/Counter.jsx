import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  // ফাংশন যা কাউন্ট বাড়াবে
  const handleAdd = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  // ফাংশন যা কাউন্ট কমাবে
  const handleReduce = () => {
    const newCount = count - 1;
    setCount(newCount);
  };

  return (
    <div style={{ border: "2px solid yellow", padding: "10px", width: "200px" }}>
      <h3>Counter: {count}</h3>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleReduce}>Reduce</button>
    </div>
  );
}
