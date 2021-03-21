import { useState } from 'react';

export const useLocalStorage = (key) => {
    const value = localStorage.getItem(key);

    console.log(value);
    // const [key, value] = useState(value);

    return [ 'test', () => {}];
}

