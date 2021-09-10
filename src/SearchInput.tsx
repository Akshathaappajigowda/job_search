import React from 'react'
import jobs from './JobsData';
import './SearchInput.css'

interface ISearchInputProps {
    setSearchQuery: (searchQuery: string) => void;
    
}

export const SearchInput = (props: ISearchInputProps) => {
    const {setSearchQuery}=props;
    return (
        <div>
            <input 
                id="search" 
                className="search_bar"
                type ="search"
                placeholder="search..."
                onChange={(event) => setSearchQuery(event.target.value)}/>
                

        </div>
    )
}
