const setLocalStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getLocalStorage = (key: string) => {
  return JSON.parse(localStorage.getItem(key) || "[]");
};

const removeLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};

export { setLocalStorage, getLocalStorage, removeLocalStorage };
