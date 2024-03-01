import React, { useState } from 'react';
import { SearchBar } from './componentStyles';
import { SearchProps } from '../interfaces/Interfaces';

const SearchBox: React.FC<SearchProps> = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');
    let typingTimeout: NodeJS.Timeout | null = null;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        setSearchQuery(query);
        if (typingTimeout) {
            clearTimeout(typingTimeout);
        }

        typingTimeout = setTimeout(() => {
            onSearch(query);
        }, 400);
    };
  
    return (
        <SearchBar>
            <input
                type="search"
                value={searchQuery}
                onChange={handleInputChange}
                placeholder="Search photos..."
            />
        </SearchBar>
    );
};

export default SearchBox;
