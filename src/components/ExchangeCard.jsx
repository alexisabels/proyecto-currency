import React, { useEffect, useState } from "react";
import flechas from "../img/flechas.png";
import removeExchange from "../img/remove.svg";

const ExchangeCard = ({ exchange, onDelete, currencies }) => {
  const { originCurrency, destCurrency, amount } = exchange;
  const [convertedAmount, setConvertedAmount] = useState("");

  useEffect(() => {
    //comprueba que las monedas existan en el objeto 'currencies'
    if (
      originCurrency &&
      destCurrency &&
      currencies[originCurrency] &&
      currencies[destCurrency]
    ) {
      //calcula el cambio
      const exchangeRate =
        currencies[destCurrency].exchangeRate / currencies[originCurrency].exchangeRate;
      // Calcula la cantidad convertida y redondea a 2 decimales
      const converted = amount * exchangeRate;
      // Actualiza el estado con la cantidad convertida
      setConvertedAmount(converted);
    }
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
        <p>{convertedAmount} {destCurrency}</p>
      </div>
      <img src={removeExchange} alt="removeExchange" onClick={onDelete} />
    </div>
  );
};

export default ExchangeCard;
