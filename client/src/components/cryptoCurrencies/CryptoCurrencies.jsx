import React, { useEffect, useState } from "react";
import axios from "axios";
import PaginatedCurrencies from "./PaginatedCurrencies";
import Search from "./Search";
import { Container, SectionWrapper } from "../wrappers";
import { Loader } from "../Loader";

const CryptoCurrencies = () => {
  const [cryptocurrencies, setCryptocurrencies] = useState([]);
  const [filteredCryptocurrencies, setFilteredCryptocurrencies] = useState([]);
  const [search, setSearch] = useState("");
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:4000/all-symbols")
      .then((resp) => {
        setCryptocurrencies(resp.data);
        setFilteredCryptocurrencies(resp.data);
      })
      .catch((err) => console.error(err, "Error fetching cryptocurrencies"));
  }, []);

  useEffect(() => {
    if (search === "") {
      setFilteredCryptocurrencies(cryptocurrencies);
    }
  }, [search, cryptocurrencies]);

  return (
    <SectionWrapper>
      <Container>
        <Search
          search={search}
          setItemOffset={setItemOffset}
          setSearch={setSearch}
          setFilteredCryptocurrencies={setFilteredCryptocurrencies}
          cryptocurrencies={cryptocurrencies}
        />
        {cryptocurrencies.length === 0 ? (
          <Loader />
        ) : (
          <PaginatedCurrencies
            itemsPerPage={15}
            itemOffset={itemOffset}
            setItemOffset={setItemOffset}
            filteredCryptoCurrencies={filteredCryptocurrencies}
          />
        )}
      </Container>
    </SectionWrapper>
  );
};

export default CryptoCurrencies;
