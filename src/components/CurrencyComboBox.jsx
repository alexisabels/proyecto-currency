import React, { useState } from "react";

const CurrencyComboBox = ({ currencies, onSelectCurrency, label }) => {
  const [seleccionado, setSelectedCurrency] = useState(null);
  const [listado, listar] = useState(false);

  const handleCurrencyClick = (currency) => {
    setSelectedCurrency(currency);
    onSelectCurrency(currency);
    listar(false);
  };

  return (
    <div>
      <label>{label}</label>
      <div
        onClick={() => listar(!listado)}
        className="insert-exchange__form-group-select"
      >
        {seleccionado ? (
          <>
            <img
              src={`/flags/${currencies[seleccionado].flag}`}
              alt={seleccionado}
              style={{
                marginRight: "5px",
                marginTop: "0",
                width: "25px",
              }}
            />
            {currencies[seleccionado].name}
          </>
        ) : (
          "Select a currency"
        )}
      </div>

      {listado && (
        <div
          style={{
            border: "1px solid #ccc",
            marginTop: "5px",
            position: "absolute",
            zIndex: "1",
            backgroundColor: "#fff",
          }}
        >
          {Object.keys(currencies).map((currencyCode) => (
            <div
              key={currencyCode}
              onClick={() => handleCurrencyClick(currencyCode)}
              style={{
                borderBottom: "1px solid black",
                padding: "5px",
                cursor: "pointer",
              }}
            >
              <img
                src={`/flags/${currencies[currencyCode].flag}`}
                alt={currencyCode}
                style={{width: "30px", height: "20px" }}
              />
              {currencies[currencyCode].name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CurrencyComboBox;
