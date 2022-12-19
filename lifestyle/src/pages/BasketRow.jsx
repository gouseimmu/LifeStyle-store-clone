import React, { useEffect, useState } from "react";
import { Button, Img } from "@chakra-ui/react";

const BasketRow = ({ el, i, data, setData }) => {
  const [count, setCount] = useState(1);
  const [itemTotal, setItemTotal] = useState(0);
  useEffect(() => {
    setItemTotal(el.cost * count);
  }, [count]);
  const handleRemove = () => {
    let tempData = data.filter((item) => item.id != el.id);
    localStorage.setItem("basket", JSON.stringify(tempData));
    setData(tempData);
  };
  return (
    <div key={i} style={{ Width: "50px" }}>
      <Img src={el.image1} w={"100%"} />
      <p>${el.quantity * el.cost}</p>
      <p>{el.description}</p>
      <div
        style={{
          display: "flex",
          gap: "15px",
          marginTop: "1em",
          justifyContent: "start",
          marginBottom: "1em",
        }}
      >
        <Button
          onClick={() =>
            el.quantity > 1 &&
            setData(
              data.map((item) =>
                item.id === el.id
                  ? { ...item, quantity: item.quantity - 1 }
                  : item
              )
            )
          }
        >
          -
        </Button>
        <Button>{el.quantity}</Button>
        <Button
          onClick={() =>
            setData(
              data.map((item) =>
                item.id === el.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              )
            )
          }
        >
          +
        </Button>
      </div>

      <Button bg={"red.500"} color={"white"} onClick={() => handleRemove()}>
        Remove Item
      </Button>
    </div>
  );
};

export default BasketRow;
