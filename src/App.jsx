import React, { useState } from "react";
import InsertExchange from "./Components/InsertExchange";
import ExchangeCard from "./Components/ExchangeCard";
import "./App.css";
import logo from "./img/logo.svg";

const currencies = {
  USD: {
    emoji: "\uD83C\uDDFA\uD83C\uDDF8",
    exchangeRate: 1,
    name: "US Dollar",
    flag: "us.png",
  },
  EUR: {
    emoji: "\uD83C\uDDEA\uD83C\uDDFA",
    exchangeRate: 0.89,
    name: "Euro",
    flag: "eu.png",
  },
  JPY: {
    emoji: "\uD83C\uDDEF\uD83C\uDDF5",
    exchangeRate: 114.42,
    name: "Japanese Yen",
    flag: "jp.png",
  },
  GBP: {
    emoji: "\uD83C\uDDEC\uD83C\uDDE7",
    exchangeRate: 0.75,
    name: "British Pound",
    flag: "gb.png",
  },
  AUD: {
    emoji: "\uD83C\uDDE6\uD83C\uDDFA",
    exchangeRate: 1.35,
    name: "Australian Dollar",
    flag: "au.png",
  },
  CAD: {
    emoji: "\uD83C\uDDE8\uD83C\uDDE6",
    exchangeRate: 1.28,
    name: "Canadian Dollar",
    flag: "ca.png",
  },
  CHF: {
    emoji: "\uD83C\uDDE8\uD83C\uDDED",
    exchangeRate: 0.93,
    name: "Swiss Franc",
    flag: "ch.png",
  },
  CNY: {
    emoji: "\uD83C\uDDE8\uD83C\uDDF3",
    exchangeRate: 6.36,
    name: "Chinese Yuan",
    flag: "cn.png",
  },
  SEK: {
    emoji: "\uD83C\uDDF8\uD83C\uDDEA",
    exchangeRate: 8.51,
    name: "Swedish Krona",
    flag: "se.png",
  },
  NZD: {
    emoji: "\uD83C\uDDF3\uD83C\uDDFF",
    exchangeRate: 1.49,
    name: "New Zealand Dollar",
    flag: "nz.png",
  },
  INR: {
    emoji: "\uD83C\uDDEE\uD83C\uDDF3",
    exchangeRate: 74.57,
    name: "Indian Rupee",
    flag: "in.png",
  },
  BRL: {
    emoji: "\uD83C\uDDE7\uD83C\uDDF7",
    exchangeRate: 5.22,
    name: "Brazilian Real",
    flag: "br.png",
  },
  RUB: {
    emoji: "\uD83C\uDDF7\uD83C\uDDFA",
    exchangeRate: 73.96,
    name: "Russian Ruble",
    flag: "ru.png",
  },
  ZAR: {
    emoji: "\uD83C\uDDFF\uD83C\uDDE6",
    exchangeRate: 16.96,
    name: "South African Rand",
    flag: "za.png",
  },
  MXN: {
    emoji: "\uD83C\uDDF2\uD83C\uDDFD",
    exchangeRate: 20.45,
    name: "Mexican Peso",
    flag: "mx.png",
  },
};

const initialExchanges = [
  {
    id: 1001,
    originCurrency: "EUR",
    destCurrency: "USD",
    amount: 12,
  },
  
];

const App = () => {
  const [exchanges, setExchanges] = useState(initialExchanges);


  const addExchange = (nuevoExchange) => { //para el exchange
    setExchanges([...exchanges, nuevoExchange]);
  };


//para cuando queramos eliminar un exhange
  const deleteExchange = (id) => {
    const updatedExchanges = exchanges.filter((exchange) => exchange.id !== id);
    setExchanges(updatedExchanges);
  };

  return (
    <div className="App">
      <header>
        <img src={logo} alt="" />
        <div className="currency-exchanger">
          <h1>Currency Exchanger</h1>
          <InsertExchange
            añadirEx={addExchange} //para insertar un exchange
            currencies={currencies}
          />
        </div>
      </header>
      <div className="currency-exchanger__exchanges">
        <div className="currency-exchanger__card">
          {exchanges.map((exchange) => (
            <ExchangeCard
              key={exchange.id}
              exchange={exchange} //pasa los exchanges
              borrarExchange={() => deleteExchange(exchange.id)} //para borrar un exchange
              currencies={currencies} // pasa las currencies
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
