import React from 'react';

const SearchBox = ({ searchField, callback }) => {
    return (
        <div className='pa2'>
            <input
                className='pa3 ba b--green bg-lightest-blue'
                type='search'
                placeholder='Search Robots'
                onChange={callback}
            />
        </div>
    );
}

export default SearchBox;