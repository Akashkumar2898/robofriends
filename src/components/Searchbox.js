import React from "react";

function Searchbox({searchfield,searchChange}){
    return(
        <div className="pa2">
            <input className="pa3 ba b--green bg-light-blue"
            type="search" 
            placeholder= "search robots"
            onChange={searchChange}
            />             
        </div>
    )
};

export default Searchbox;