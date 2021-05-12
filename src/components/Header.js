import React from 'react'

export default function Header({submitHandler,searchTerm,onChange}) {
    
    return (
        <header>
            <h2>Movies Store</h2>
            <form onSubmit={submitHandler}>
                <input className="search" type="text" placeholder="Search..." value={searchTerm} onChange={onChange}/>
                <button type="submit">🔍</button>
            </form>
        </header>
    )
}
