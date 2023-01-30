import { useState } from "react";
import { TotalMoney } from "../TotalMoney";
import "./style.css";

export const Myform = ({
  typeList,
  addFinanceList,
  financeList,
  totalValue,
  setPrice,
}) => {
  const [formData, setFormData] = useState({
    description: "",
    value: "",
    type: typeList[0].value,
  });

  function submit(event) {
    event.preventDefault();
    addFinanceList(formData);
    setFormData({
      description: "",
      value: "",
      type: typeList[0].value,
    });
  }

  return (
    <div>
      <form onSubmit={submit}>
        <p className="description">Descrição</p>
        <input
          value={formData.description}
          required
          className="first-input"
          placeholder="Digite aqui sua descrição"
          type="text"
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        />
        <p className="description-input">Ex: Compra de roupas</p>
        <div className="two-inputs">
          <span>
            <p className="label-input">Valor</p>
            <input
              value={formData.value}
              required
              onChange={(e) =>
                setFormData({ ...formData, value: e.target.value })
              }
              placeholder="0"
              className="input-data"
              type="number"
            />
          </span>
          <span>
            <p className="label-input"> Tipo de valor</p>
            <select
              onChange={(event) => {
                return setFormData({
                  ...formData,
                  type: event.target[event.target.selectedIndex].text,
                });
              }}
              className="input-data"
            >
              {typeList.map((e, index) => (
                <option key={index} value="">
                  {e.value}
                </option>
              ))}
            </select>
          </span>
        </div>
        <button type="submit">Inserir valor</button>
      </form>
      <TotalMoney
        setPrice={setPrice}
        totalValue={totalValue}
        financeList={financeList}
      />
    </div>
  );
};
