import Inertia from 'inertia';
import { useState, useEffect } from 'react';

export default function useRememberedState(initialState) {
  const [state, setState] = useState(() => {
    const restored = Inertia.restore(key);

    return restored !== undefined
      ? restored
      : initialState;
  });

  useEffect(() => {
    Inertia.remember(state, key);
  }, [state, key]);

  return [state, setState];
}