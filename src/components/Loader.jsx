import React from "react";
import "./styles/Loader.css";

const Loader = ({message}) => {
  return (
    <div className="min-h-screen bg-primary-light">
      <div className="flex flex-col justify-center items-center min-h-screen p-5">
        <img
          src="./images/loader/cloud.png"
          alt=""
          className="w-[147px] self-center sm:w-[187px]"
        />
        <h1 className="text-white text-4xl sm:text-6xl">Weather app</h1>
        <section className="bg-white w-full sm:w-[650px] rounded-3xl sm:rounded-3xl flex justify-between sm:justify-around px-2 py-1 sm:py-2 mt-4">
          <img src="./images/loader/lo1.png" alt="" />
          <img src="./images/loader/lo4.png" alt="" />
          <img src="./images/loader/lo2.png" alt="" />
          <img src="./images/loader/lo7.png" alt="" />
          <img src="./images/loader/lo3.png" alt="" />
          <img src="./images/loader/lo5.png" alt="" />
          <img src="./images/loader/lo4.png" alt="" />
          <img src="./images/loader/lo8.png" alt="" />
        </section>
        <div className="w-full flex justify-center">
          <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="message pt-4 text-white text-center w-full">{message}</div>
      </div>
    </div>
  );
};

export default Loader;
