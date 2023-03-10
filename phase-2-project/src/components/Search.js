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
        <div className='search py-4' >
            <form className="flex justify-center py-3 bg-[#5F5F5F] mx-[420px] rounded-lg" onSubmit={handleSubmit}>
                <input className='px-2' onChange={e => handleChange(e.target.value)} value={searchQ} name="searchQ" type="text" placeholder="Search..." />
                <span className='px-2' ><button type='submit'>🔍</button></span>
            </form>
        </div>
    )

}

export default Search;