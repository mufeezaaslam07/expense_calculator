import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Addtransaction = () => {
  const { addTransaction } = useContext(GlobalContext);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);
  };
  return (
    <div>
      <h3 className="text-sm md:text-lg font-extrabold">Add new transaction</h3>
      <div className="h-1  border-b-2 border-gray-300  mb-3"></div>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="text" className="text-sm md:text-lg font-extrabold">
            Text
          </label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text...."
            className=" border-gray-200 border-2 w-full p-1 text-sm md:text-lg mb-2 rounded-lg "
          />
        </div>
        <div>
          <label htmlFor="amount" className="text-sm md:text-lg font-bold ">
            Amount <br />
            <span className="note"> (negative - expense, positive-income)</span>
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
            className=" border-gray-200 border-2 w-full p-1 text-sm my-1 md:text-lg rounded-lg"
          />
        </div>
        <button className="bg-indigo-400 w-full text-xs md:text-lg p-2 text-white rounded-md">
          Add transaction
        </button>
      </form>
    </div>
  );
};
