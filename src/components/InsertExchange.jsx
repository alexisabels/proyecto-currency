import React, { useState } from "react";
import CurrencyComboBox from "./CurrencyComboBox";
import flecha from "../img/Vector.svg";

const InsertExchange = ({ añadirEx, currencies }) => {
  const [originCurrency, setOriginCurrency] = useState(
    Object.keys(currencies)[0] //guardar divisa de origen
  );
  const [amount, setAmount] = useState(""); //guardar cantidad
  const [destCurrency, setDestinationCurrency] = useState(Object.keys(currencies)[1]);  //guardar divisa destino

  //FUNCIÓN DE AÑADIR
    const addExchange = () => {
    const nuevoEx = {
      id: Math.floor(Math.random() * 999), //para el id aleatorio
      originCurrency,
      destCurrency,
      amount: parseFloat(amount),
    };
    añadirEx(nuevoEx);
 
    setAmount("");    //resetear la cantidad
  };
//---FORMULARIO---
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
      <button onClick={addExchange}>Add</button>
    </div>
  );
};

export default InsertExchange;
