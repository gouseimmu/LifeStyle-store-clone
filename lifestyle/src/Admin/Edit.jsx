import { Box, Button } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { getMenProductList, updateProducts } from "../Redux/AppReducer/action";
import "./admin.css";

const data = {
  title: "",
  price: 0,
  image: "",
  category: "",
};

function Edit() {
  const [task, setTask] = useState({});

  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((store) => store.AppReducer.product);

  useEffect(() => {
    if (product.length === 0) {
      dispatch(getMenProductList());
    }
  }, [dispatch, product.length]);

  useEffect(() => {
    if (id) {
      const pro = product.find((item) => item.id === Number(id));
      pro && setTask(pro);
    }
  }, [id, product]);

  function Update(e) {
    e.preventDefault();
    dispatch(updateProducts(id, task)).then(() => {
      navigate("/admin");
    });
  }

  return (
    <div>
          
        <Navbar />
         
    <div id="bedit">
      <form id="edit" onSubmit={Update}>
        <h1>Edit Product</h1>
        <input
          value={task?.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
          type="text"
          placeholder="Enter Title"
        />{" "}
        <br />
        <input
          value={task?.price}
          onChange={(e) => setTask({ ...task, price: e.target.value })}
          type="number"
          placeholder="Enter price"
        />{" "}
        <br />
        <input
          value={task?.image}
          onChange={(e) => setTask({ ...task, image: e.target.value })}
          type="url"
          placeholder="Enter  url."
        />{" "}
        <br />
        <select 
          name="category"
          value={task?.category}
          onChange={(e) => setTask({ ...task, category: e.target.value })}
        >
          <option value={"Casual Shirts"}>Casual Shirts</option>
          <option value={"Dresses"}>Dresses and JumpSuits</option>
          <option value={"Kurtas"}>Kurtas</option>
          <option value={"Womens"}>Womens</option>
        </select>
        <br />
        <button type="submit">UPDATE PRODUCT</button>
      </form>
      
    </div>
    <Footer/>
    </div>
  );
}

export default Edit;
