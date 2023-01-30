import "./style.css";

export const TotalMoney = ({ setPrice, totalValue, financeList }) => {
  const sumAll = () => {
    const entrieValue = financeList.filter((e) => {
      if (e.type == "Entrada") {
        return e.value;
      }
    });
    const outputValue = financeList.filter((e) => {
      if (e.type == "Saída") {
        return e.value;
      }
    });

    const entrieValueMp = entrieValue.map((e) => {
      return parseInt(e.value);
    });
    const outputValueMp = outputValue.map((e) => {
      return parseInt(e.value);
    });

    const entrieValueReduce = entrieValueMp.reduce(
      (total, currentValue) => (total = total + currentValue),
      0
    );
    const outputValueReduce = outputValueMp.reduce(
      (total, currentValue) => (total = total + currentValue),
      0
    );
    return entrieValueReduce - outputValueReduce;
  };

  setPrice(parseInt(sumAll()).toFixed(2));

  return (
    <div className="totalMoneyDiv">
      <h2>Valor Total:</h2>
      <p>R$ {totalValue}</p>
    </div>
  );
};
