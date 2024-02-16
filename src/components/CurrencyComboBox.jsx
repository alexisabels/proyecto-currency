import React, { useState } from "react";

const CurrencyComboBox = ({ currencies, onSelectCurrency, label }) => {
  const [selectedCurrency, setSelectedCurrency] = useState(null);
  const [showOptions, setShowOptions] = useState(false);

  const handleCurrencyClick = (currency) => {
    setSelectedCurrency(currency);
    onSelectCurrency(currency);
    setShowOptions(false);
  };

  return (
    <div>
      <label>{label}</label>
      <div
        onClick={() => setShowOptions(!showOptions)}
        className="insert-exchange__form-group-select"
      >
        {selectedCurrency ? (
          <>
            <img
              src={`/flags/${currencies[selectedCurrency].flag}`}
              alt={selectedCurrency}
              style={{
                marginRight: "5px",
                marginTop: "0",
                width: "25px",
              }}
            />
            {currencies[selectedCurrency].name}
          </>
        ) : (
          "Select a Currency"
        )}
      </div>

      {showOptions && (
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
                style={{ marginRight: "5px", width: "25px", height: "18px" }}
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
