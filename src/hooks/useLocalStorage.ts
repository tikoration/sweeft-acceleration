import { useEffect, useState } from "react";
import { Item } from "../interfaces/Interfaces";

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

    return [value, setValue];
};

export default useLocalStorage;
