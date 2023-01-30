import logo from "./logo.svg";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import { DashBoard } from "./pages/Dashboard";
import { useState } from "react";
import { listFinance, typeListFinance } from "./data/data";

function App() {
  const [page, setPage] = useState(false);

  const [financeList, setFinanceList] = useState(listFinance);
  const [typeList, setTypeList] = useState(typeListFinance);
  const [filter, setFilter] = useState("todos");
  const [price, setPrice] = useState(0);

  const filterFinanceList = financeList.filter((finance) =>
    filter === "todos" ? true : finance.type == filter
  );

  function addFinanceList(newFinance) {
    setFinanceList([...financeList, newFinance]);
  }
  function deleteFinanceList(financeName) {
    const newList = financeList.filter((e) => e.description !== financeName);
    setFinanceList(newList);
  }

  return page ? (
    <>
      <DashBoard
        page={setPage}
        listContent={filterFinanceList}
        typeList={typeList}
        addFinanceList={addFinanceList}
        deleteFinanceList={deleteFinanceList}
        setFilter={setFilter}
        totalValue={price}
        setPrice={setPrice}
      />
    </>
  ) : (
    <div className="App">
      <header className="App-header">
        <HomePage page={setPage} />
      </header>
    </div>
  );
}

export default App;
