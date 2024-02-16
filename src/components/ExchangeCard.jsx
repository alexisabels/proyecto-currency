import React, { useEffect, useState } from "react";
import flechas from "../img/flechas.png";
import imgBorrar from "../img/remove.svg";

const ExchangeCard = ({ exchange, borrarExchange, currencies }) => {
  const { originCurrency, destCurrency, amount } = exchange;
  const [resultado, setResultado] = useState("");

  useEffect(() => {
      //CONVERSION
      const exchangeRate =
        currencies[destCurrency].exchangeRate / currencies[originCurrency].exchangeRate;
      
      const resultado = amount * exchangeRate;
      //para poner el resultado y ponerlo con 2 decimas (no se si hay otra forma)
      setResultado(Math.round(resultado * 100) / 100); 
    
  }, [originCurrency, destCurrency, amount, currencies]);

/*CARD DEL EXCHANGE */
  return (
    <div className="exchange-card">
      <div className="exchange-card__pais">
        <img src={`/flags/${currencies[originCurrency].flag}`} alt="" />
        <p>{amount} {originCurrency}</p>
      </div>
      <div>
        <img src={flechas} alt="" />
      </div>
      <div className="exchange-card__pais">
        <img src={`/flags/${currencies[destCurrency].flag}`} alt="" />
        <p>{resultado} {destCurrency}</p>
      </div>
      <img src={imgBorrar} alt="" onClick={borrarExchange} />
    </div>
  );
};

export default ExchangeCard;
