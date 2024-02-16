import React, { useState } from "react";
import CurrencyComboBox from "./CurrencyComboBox";
import flecha from "../img/Vector.svg";

const InsertExchange = ({ añadirEx, currencies }) => {
  //almacenar la moneda de origen, moneda de destino y la cantidad
  const [originCurrency, setOriginCurrency] = useState(
    Object.keys(currencies)[0]
  );
  const [amount, setAmount] = useState("");
  const [destCurrency, setDestinationCurrency] = useState(Object.keys(currencies)[1]);

    const handleAddExchange = () => {

    const nuevoEx = {
      id: Math.floor(Math.random() * 999),
      originCurrency,
      destCurrency,
      amount: parseFloat(amount),
    };
    //llamamos a la funcion desde el componente padre para añadirle la nueva 
    añadirEx(nuevoEx);
    //Reincia el estado de la cantidad
    setAmount("");
  };
// hace el formulario de inserción de intercambio
  return (
    <div className="insertexchange">
      <div className="insertexchange__form-input">
        <label> Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div className="insertexchange__form">
        <label>Origin Currency:</label>
        <CurrencyComboBox
          currencies={currencies}
          onSelectCurrency={(currency) => setOriginCurrency(currency)}
          value={originCurrency}
        />
      </div>
      <img src={flecha} alt="" />
      <div className="insertexchange__form">
        <label>Destination Currency:</label>
        <CurrencyComboBox
          currencies={currencies}
          onSelectCurrency={(currency) => setDestinationCurrency(currency)}
          value={destCurrency}
        />
      </div>
      <button onClick={handleAddExchange}>Add</button>
    </div>
  );
};

export default InsertExchange;
