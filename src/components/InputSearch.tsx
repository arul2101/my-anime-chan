'use client'

import { useState } from "react";

const InputSearch: React.FC = () => {
  const [query, setQuery] = useState<string>("");

  const handleQuery = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log(query);
  }

  return (
    <form onSubmit={handleQuery} className="w-[100%] flex justify-end">
      <input
        type="text"
        name="search"
        id="search"
        className="py-2 px-4 rounded-lg lg:w-[15rem] md:w-[15rem] w-[100%]"
        autoComplete="off"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
    </form>
  )
}

export default InputSearch;
