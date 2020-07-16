import React, { useState } from "react";

function Search({getQuery}) {
  const [search, setSearch] = useState("");
  const onChange=(q)=>{
      setSearch(q)
      getQuery(q)
  }
  return (
    <div className="row">
      <div className="col-sm-4"></div>
      <div className="col-md-4">
        <form className="">
          <input
            type="text"
            className="form-control rounded"
            placeholder="Search Characters"
            value={search}
            onChange={(e) => onChange(e.target.value)}
            autoFocus
          />
          
        </form>
      </div>
      <div className="col-sm-4"></div>
    </div>
  );
}

export default Search;
