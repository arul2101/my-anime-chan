'use client'

import { useState } from "react";


const InputSearch: React.FC = () => {
  const [query, setQuery] = useState<string>("");

  const handleQuery = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log(query);
  }

  return (
    <form onSubmit={handleQuery}>
      <input
        type="text"
        name="search"
        id="search"
        onChange={e => setQuery(e.target.value)}
      />
    </form>
  )
}

export default InputSearch;
