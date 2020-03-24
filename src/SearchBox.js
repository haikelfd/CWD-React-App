import React from 'react';

const SearchBox = ({Searchfield, searchChange}) => {
    return (
        <div className='tc'>
            <input
            className='pa3 ba b--green bg lightest bleu'
            type='search' 
            placeholder=' search robots'
            onChange={searchChange}
            />
            </div>
    );
}
export default SearchBox;