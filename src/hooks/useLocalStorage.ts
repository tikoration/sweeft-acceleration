import { useEffect, useState } from "react";
import { Item } from "../interfaces/Interfaces";

// Custom hook to handle local storage
const useLocalStorage = (key: string, fallback?: Item[]): [Item[], React.Dispatch<React.SetStateAction<Item[]>>] => {
    const storedValue = localStorage.getItem(key);
    let parsedValue: Item[];

    try {
        parsedValue = storedValue ? JSON.parse(storedValue) : (fallback || []);
    } catch (error) {
        console.error(`Error parsing JSON for key '${key}':`, error);
        parsedValue = fallback || [];
    }

    const [value, setValue] = useState<Item[]>(parsedValue);

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    // Return the current value and a function to update it
    return [value, setValue];
};

export default useLocalStorage;
