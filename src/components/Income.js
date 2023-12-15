import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Income = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);

  const formatAmount = (amount) => {
    if (Math.abs(amount) >= 1000) {
      return amount / 1000 + "k";
    }
    return amount;
  };

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div className="flex gap-4 justify-evenly items-center bg-gray-200 px-6 py-3  shadow-lg rounded-lg mb-4">
      <div className="flex flex-col items-center ">
        <h4 className="text-sm md:text-xl font-extrabold">INCOME</h4>
        <p className="text-md md:text-2xl font-extrabold text-green-500">
          {" "}
          ${formatAmount(income)}
        </p>
      </div>
      <div className="h-10 md:h-12 border-r-2 border-gray-300  "></div>
      <div className="flex flex-col items-center ">
        <h4 className="text-sm md:text-xl font-extrabold">EXPENSE</h4>
        <p className="text-md md:text-2xl  font-extrabold text-red-500">
          ${formatAmount(expense)}
        </p>
      </div>
    </div>
  );
};
