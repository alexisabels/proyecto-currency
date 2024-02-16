import React, { useEffect, useState } from "react";
import flechas from "../img/flechas.png";
import imgBorrar from "../img/remove.svg";

const ExchangeCard = ({ exchange, borrarExchange, currencies }) => {
  const { originCurrency, destCurrency, amount } = exchange;
  const [resultado, setResultado] = useState("");

  useEffect(() => {
   
      //cálculo
      const exchangeRate =
        currencies[destCurrency].exchangeRate / currencies[originCurrency].exchangeRate;
      
      const resultado = amount * exchangeRate;
      setResultado(resultado);
    
  }, [originCurrency, destCurrency, amount, currencies]);

  // Renderizamos el JSX de la tarjeta
  return (
    <div className="exchange-card">
      <div className="exchange-card__item">
        <img src={`/flags/${currencies[originCurrency].flag}`} alt="" />
        <p>{amount} {originCurrency}</p>
      </div>
      <div>
        <img src={flechas} alt="" />
      </div>
      <div className="exchange-card__item">
        <img src={`/flags/${currencies[destCurrency].flag}`} alt="" />
        <p>{resultado} {destCurrency}</p>
      </div>
      <img src={imgBorrar} alt="" onClick={borrarExchange} />
    </div>
  );
};

export default ExchangeCard;
