import { useReducer, useEffect } from "react";
function useLocalStorageReducer(key, defaultVal, reducer) {
  const [state, dispatch] = useReducer(reducer, defaultVal, () => {
    let value;
    try {
      value = JSON.parse(localStorage.getItem(key) || String(defaultVal));
    } catch (error) {
      value = defaultVal;
    }
    return value;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state]);
  return [state, dispatch];
}
export { useLocalStorageReducer };
