import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./admin.css"

function Edit() {
  const [title, settitle] = useState("");
  const [price, setprice] = useState(0);
  const [image, setImage] = useState("");
  const [category, setcategory] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://solar-juvenile-camel.glitch.me/menpro/${id}`)
      .then((res) => {
        settitle(res.data.title);
        setprice(res.data.price);
        setImage(res.data.image);
        setcategory(res.data.category);
      });
  }, [id]);

  const data = {
    title: title,
    price: price,
    image: image,
    category: category,
  };

  function Update(e) {
    e.preventDefault();
    axios
      .put(`https://solar-juvenile-camel.glitch.me/menpro/${id}`, data)
       .then(navigate("/admin")).then(window.location.reload())
      
  }
  return (
    <div id="bedit" >
      
      <form id="edit" >
     <h1>Edit Product</h1>
        <input
          value={title}
          onChange={(e) => settitle(e.target.value)}
          type="text"
          placeholder="Enter Title"
        /> <br/>
        <input
          value={price}
          onChange={(e) => setprice(e.target.value)}
          type="number"
          placeholder="Enter price"
        /> <br/>
        <input
          value={image}
          onChange={(e) => setImage(e.target.value)}
          type="url"
          placeholder="Enter  url."
        /> <br/>
        <select
          name="category"
          value={category}
          onChange={(e) => setcategory(e.target.value)}
        >
          <option value={"Kurtas"}>Kurtas</option>
          <option value={"Womens"}>Womens</option>
        </select><br/>
        <button type="submit" onClick={Update}>
          UPDATE PRODUCT
        </button>
      </form>
    </div>
  );
}

export default Edit;
