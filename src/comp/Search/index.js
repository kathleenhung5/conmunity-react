import React,{useState} from 'react';
//import SearchBar from '@opuscapita/react-searchbar';
import {IoMdSearch} from 'react-icons/io'

function Search({searchItem}){
const [txt, setTxt] = useState("");
    return(
        <div className="search">
        <IoMdSearch className="search-icon"/> 
                <input
                    type='text'
                    size='45'
                    placeholder={"Search "+searchItem}
                    onChange={(text)=>setTxt(text.target.value)}
                    value={txt} />
        </div>
    )
}

//not sure how to change the text on input 
Search.defaultProps = {
    searchItem: 'item',
}

export default Search;

//SearchBar api from the opuscapita I tried out, found it hard to style
/*function Search({onSearch, searchInput}){
    return(
        <div onSearch={onSearch} >
        <IoMdPerson className="profile-icon"/>
        <SearchBar className="search" />
            <div>
                <h4>{searchInput}</h4>
            </div>
        </div>
    )
}

Search.defaultValue = {
    searchInput: 'Search',
    onSearch: ()=>{}
}*/