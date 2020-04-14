import React from 'react'

export default function Search({searchBar,search}) {
    return (
        <form>
            <div>
                <input 
                onChange={searchBar} 
                placeholder='look for an animal'
                type="text" 
                value={search}
                />
            </div>
        </form>
    )
}