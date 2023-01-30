import "./style.css";
import trash from "../../assets/trash.svg";
import lancamento from "../../assets/lancamento.jpg";
import { TotalMoney } from "../TotalMoney";

export const UlList = ({ list, deleteFinanceList, setFilter, typeList }) => {
  return (
    <div className="container-finance">
      <div>
        <ul className="menu-list">
          <span>
            <h2>Resumo financeiro</h2>
          </span>
          <li className="list-buttons">
            <button onClick={() => setFilter("todos")}> Todos </button>
            {typeList.map((e, index) => {
              return (
                <button onClick={() => setFilter(e.value)} key={index}>
                  {e.value}
                </button>
              );
            })}
          </li>
        </ul>
      </div>
      <ul className="ul-card">
        {list == 0 ? (
          <img className="lancamentoImg" src={lancamento} alt="" />
        ) : (
          list.map((e, index) => {
            return (
              <>
                {e.type == "Entrada" ? (
                  <li key={index} className="li-card entry">
                    <span>
                      <h2>{e.description}</h2>
                      <p>{e.type}</p>
                    </span>
                    <span className="span-value">
                      <p>R$ {parseInt(e.value).toFixed(2)}</p>
                      <img
                        onClick={() => {
                          deleteFinanceList(e.description);
                        }}
                        src={trash}
                        alt=""
                      />
                    </span>
                  </li>
                ) : (
                  <li key={index} className="li-card output">
                    <span>
                      <h2>{e.description}</h2>
                      <p>{e.type}</p>
                    </span>
                    <span className="span-value">
                      <p>R$ {parseInt(e.value).toFixed(2)}</p>
                      <img
                        onClick={() => {
                          deleteFinanceList(e.description);
                        }}
                        src={trash}
                        alt=""
                      />
                    </span>
                  </li>
                )}
              </>
            );
          })
        )}
      </ul>
    </div>
  );
};
