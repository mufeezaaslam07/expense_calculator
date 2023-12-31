import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  const formatTotal = (total) => {
    if (Math.abs(total) >= 1000) {
      return total / 1000 + "k";
    }
    return total;
  };

  return (
    <div className="mb-3">
      <h4 className="text-xs font-bold md:text-lg">YOUR BALANCE</h4>
      <h1 className="font-extrabold text-lg md:text-2xl">
        ${formatTotal(total)}
      </h1>
    </div>
  );
};
