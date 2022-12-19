import { Button, Img } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import BasketRow from "./BasketRow";
import "./Kids.css";

const Basket = () => {
  const [data, setData] = useState(null);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setData(
      JSON.parse(localStorage.getItem("basket")).map((item) => {
        return { ...item, quantity: 1 };
      })
    );
  }, []);
  const obj = JSON.parse(localStorage.getItem("basket")) || [];
  // const Remove = (i) => {
  //   obj.splice(i, 1);
  //   localStorage.setItem("basket", JSON.stringify(obj));
  //   window.location.reload();
  // };
  const handleCheckout = () => {
    let total = 0;
    for (let i = 0; i < data.length; i++) {
      total += data[i].cost * data[i].quantity;
    }
    localStorage.setItem("basketTotal", total);
  };
  return (
    <div>
      <Navbar />
      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          margin: "20px",
        }}
      >
        <Link to="/kids">
          <Button bg={"teal"} color={"white"}>
            Go Back
          </Button>
        </Link>
        <Link to="/checkout">
          {" "}
          <Button bg={"red"} color={"white"} onClick={handleCheckout}>
            Checkout
          </Button>
        </Link>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateRows: "repeat(1,1fr)",
          margin: "auto",
          width: "80%",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "20px",
        }}
      >
        {data?.map((el, i) => {
          return <BasketRow el={el} i={i} data={data} setData={setData} />;
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Basket;
