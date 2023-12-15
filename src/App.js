import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { Income } from "./components/Income";
import { TransactionList } from "./components/TransactionList";
import { Addtransaction } from "./components/Addtransaction";

import "./App.css";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <div className=" flex justify-center App px-2 ">
      <GlobalProvider>
        <div className=" bg-gray-500 p-6 my-4 rounded-lg ">
          <Header />
          <div className="">
            <Balance />
            <Income />
            <TransactionList />
            <Addtransaction />
          </div>
        </div>
      </GlobalProvider>
    </div>
  );
}

export default App;
