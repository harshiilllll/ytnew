import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
  return (
   <Paper 
    component="form"
    onSubmit={() => {}}
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
        value=""
        onChange={() =>{}}
    />
    <IconButton sx={{ p: '10px', color: 'red' }}>
        <Search />
    </IconButton>
   </Paper>
  )
};

export default SearchBar;
