import { useCallback } from "react";

export const useLocalStorage = (key) => {

    const value = localStorage.getItem(key);

    return [ value, useCallback((value) => {

        localStorage.setItem(key, value);
    }, [ key ]) ];
}
