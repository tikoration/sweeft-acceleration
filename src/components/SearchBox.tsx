import React, { useState } from 'react';
import { SearchBar } from './componentStyles';
import { SearchProps } from '../interfaces/Interfaces';

// SearchBox component for searching photos
const SearchBox: React.FC<SearchProps> = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');
    let typingTimeout: NodeJS.Timeout | null = null;

    // handling input change
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        // updating the search query with the input value
        setSearchQuery(query);
        // clearing the timeout if it's already there
        if (typingTimeout) {
            clearTimeout(typingTimeout);
        }

        // setting new typing timeout to exacute the search
        // after 400ms of no typing
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
