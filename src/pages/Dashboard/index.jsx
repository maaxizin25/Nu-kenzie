import "./style.css";
import logo from "../../assets/logoNu.svg";
import { Myform } from "../../components/Form";
import { UlList } from "../../components/UlList";

export const DashBoard = ({
  page,
  listContent,
  typeList,
  addFinanceList,
  deleteFinanceList,
  setFilter,
  totalValue,
  setPrice,
}) => {
  return (
    <>
      <nav>
        <div className="container-logo">
          <img src={logo} alt="" />
          <button onClick={() => page(false)}>Inicio</button>
        </div>
      </nav>
      <header>
        <Myform
          financeList={listContent}
          addFinanceList={addFinanceList}
          typeList={typeList}
          totalValue={totalValue}
          setPrice={setPrice}
        />
        <UlList
          list={listContent}
          deleteFinanceList={deleteFinanceList}
          typeList={typeList}
          setFilter={setFilter}
        />
      </header>
    </>
  );
};
