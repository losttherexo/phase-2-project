import {React, useState} from 'react'

function Search ({searcher}) {
    const [searchQ, setSearchQ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    const handleChange = (value) => {
        setSearchQ(value);
        searcher(value);

    }

    return (
        <div className='search'>
            <form className="form-box" onSubmit={handleSubmit}>
                <input onChange={e => handleChange(e.target.value)} value={searchQ} name="searchQ" type="text" placeholder="Search..." />
                <span><button type='submit'>🔍</button></span>
            </form>
        </div>
    )

}

export default Search;