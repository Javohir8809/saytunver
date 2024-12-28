import React, { useEffect, useState } from 'react';

const Counter = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const increment = target / 200;
    let current = 0;

    const updateCounter = () => {
      current += increment;
      if (current < target) {
        setCount(Math.ceil(current));
        setTimeout(updateCounter, 10); // 10 ms yangilash tezligi
      } else {
        setCount(target);
      }
    };

    updateCounter();
  }, [target]);

  return <span>{count}</span>;
};

export default Counter;
