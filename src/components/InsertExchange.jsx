import React, { useState } from "react";
import CurrencyComboBox from "./CurrencyComboBox";
import flecha from "../img/Vector.svg";

const InsertExchange = ({ onAddExchange, currencies }) => {
  //almacenar la moneda de origen, moneda de destino y la cantidad
  const [originCurrency, setOriginCurrency] = useState(
    Object.keys(currencies)[0]
  );
  const [amount, setAmount] = useState("");
  const [destCurrency, setDestCurrency] = useState(Object.keys(currencies)[1]);

    const handleAddExchange = () => {

    const newExchange = {
      id: Math.floor(Math.random() * 10000),
      originCurrency,
      destCurrency,
      amount: parseFloat(amount),
    };
    //llamamos a la funcion desde el componente padre para añadirle la nueva 
    onAddExchange(newExchange);
    //Reincia el estado de la cantidad
    setAmount("");
  };
// hace el formulario de inserción de intercambio
  return (
    <div className="insert-exchange">
      <div className="insert-exchange__form-group-input">
        <label> Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div className="insert-exchange__form-group">
        <label>Origin Currency:</label>
        <CurrencyComboBox
          currencies={currencies}
          onSelectCurrency={(currency) => setOriginCurrency(currency)}
          value={originCurrency}
        />
      </div>
      <img src={flecha} alt="" />
      <div className="insert-exchange__form-group">
        <label>Destination Currency:</label>
        <CurrencyComboBox
          currencies={currencies}
          onSelectCurrency={(currency) => setDestCurrency(currency)}
          value={destCurrency}
        />
      </div>
      <button onClick={handleAddExchange}>Add</button>
    </div>
  );
};

export default InsertExchange;
