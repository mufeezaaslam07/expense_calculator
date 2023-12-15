import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Transaction } from "../components/Transaction";

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <div className="mb-4">
      <h3 className="text-sm md:text-xl font-extrabold">History</h3>
      <div className="h-1  border-b-2 border-gray-300  mb-2 md:mt-2"></div>
      <ul id="list" className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};
