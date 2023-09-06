import React from "react";
import axios from "axios";
import { Cell, Table, Header, Row } from "./styled";
import { useNavigate } from "react-router-dom";

const CurrenciesTable = ({ filteredCryptocurrencies }) => {
  const navigate = useNavigate();

  const handleRowClick = (name) => {
    axios
      .post("http://localhost:4000/api/cryptocurrencies/selected", {
        title: name,
      })
      .then((resp) => console.log(resp.data))
      .catch((err) =>
        console.error(err, "error while adding selected currency")
      );
    navigate(`/graph/${name}`);
  };
  return (
    <Table>
      <Header>
        <tr>
          <th>Name</th>
          <th>Last price</th>
          <th>24h change</th>
        </tr>
      </Header>
      <tbody>
        {filteredCryptocurrencies.map(({ name, icon, price, changeRate }) => {
          const formattedChangeRate = parseFloat(changeRate.slice(0, -1));
          return (
            <Row
              key={name}
              changerate={formattedChangeRate}
              onClick={() => handleRowClick(name)}
            >
              <Cell>
                <img width="20px" src={icon} alt={`${name} icon`} />
                {name}
              </Cell>
              <Cell>{price}</Cell>
              <Cell>{changeRate}</Cell>
            </Row>
          );
        })}
      </tbody>
    </Table>
  );
};

export default CurrenciesTable;
