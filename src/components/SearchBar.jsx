import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {

const [searchTerm, setSearchTerm] = useState('')
const navigate = useNavigate();
const handleSearch = (e) => {
    e.preventDefault();
    if(searchTerm){
        navigate(`/search/${searchTerm}`)

        setSearchTerm('');
    }
}

  return (
   <Paper 
    component="form"
    onSubmit={handleSearch}
    sx={{
        borderRadius: '20px',
        boxShadow: 'none',
        pl :'10px',
        mr: { sm:5 }
    }}
   >
    <input 
        className="search-bar"
        type="text" 
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
    />
    <IconButton sx={{ p: '10px', color: 'red' }}>
        <Search />
    </IconButton>
   </Paper>
  )
};

export default SearchBar;
