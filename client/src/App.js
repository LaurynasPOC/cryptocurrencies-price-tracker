import React from "react";
import { GlobalStyle } from "./styles/globalStyles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CryptoCurrencies from "./components/cryptoCurrencies/CryptoCurrencies";
import Graph from "./components/graph/Graph";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<CryptoCurrencies />} />
        <Route path="/graph/:symbol" element={<Graph />} />
      </Routes>
    </Router>
  );
}

export default App;
