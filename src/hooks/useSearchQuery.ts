import React, { useState } from "react";

export default function useSearchQuery() {
  const [query, setQuery] = useState("");
  const [searchValue, setSearchValue] = useState("");

  // SEARCH QUERY OPERATIONS
  const handleQueryChange = (value: string) => {
    setQuery(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (query.trim().length < 3) {
      setQuery("");
      return;
    }

    setSearchValue(query);
    setQuery("");
  };

  return { query, handleQueryChange, handleSubmit, searchValue };
}
