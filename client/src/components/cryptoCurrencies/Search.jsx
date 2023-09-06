import React, { useState } from "react";
import axios from "axios";
import { Input, SearchContainer, Button } from "./styled";

const Search = ({
  search,
  setSearch,
  cryptocurrencies,
  setFilteredCryptocurrencies,
  setItemOffset,
}) => {
  const [error, setError] = useState(""); // 1. Create a piece of state for error handling

  const handleSearch = (search) => {
    setError(""); // Clear previous errors

    if (search.length > 30) {
      // 2. Validate the input
      setError("Search input should be up to 30 characters only.");
      return;
    }

    setItemOffset(0);

    axios
      .post("http://localhost:4000/api/cryptocurrencies/searched", {
        title: search,
      })
      .then((resp) => resp.data)
      .catch((err) =>
        console.error(err, "error while adding searched currency")
      );

    if (search !== "") {
      const filtered = cryptocurrencies.filter(
        ({ price, name }) =>
          price && name.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredCryptocurrencies(filtered);
    }
  };

  return (
    <SearchContainer error={error}>
      {error && <div style={{ color: "red" }}>{error}</div>}
      {/* 4. Display the error message */}
      <div>
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search cryptocurrency..."
          list="cryptocurrencies"
        />
        <datalist id="cryptocurrencies">
          {cryptocurrencies.map(({ name }) => (
            <option key={name} value={name} />
          ))}
        </datalist>
      </div>
      <Button onClick={() => handleSearch(search)}>Search</Button>
    </SearchContainer>
  );
};

export default Search;
