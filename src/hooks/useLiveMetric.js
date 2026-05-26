import { useEffect, useState } from 'react';

export function useLiveMetric(base, spread = 3, interval = 2200) {
  const [value, setValue] = useState(base);

  useEffect(() => {
    const ticker = setInterval(() => {
      const delta = (Math.random() * spread * 2 - spread).toFixed(1);
      setValue(Number(Math.max(base - spread, Math.min(base + spread, Number(base) + Number(delta))).toFixed(1)));
    }, interval);

    return () => clearInterval(ticker);
  }, [base, spread, interval]);

  return value;
}
