import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Edit() {
  const [title, settitle] = useState("");
  const [price, setprice] = useState(0);
  const [image,setImage] = useState("");
  const [category,setcategory] = useState("")

  const { id } = useParams();

  useEffect(() => {
    axios.get(`https://twisty-careful-composer.glitch.me/products/${id}`).then((res) => {
      settitle(res.data.title);
      setprice(res.data.price);
      setImage(res.data.image);
      setcategory(res.data.category)
    });
  }, [id]);

  const navigate = useNavigate();

  const data = {
    title:title,
    price:price,
    image:image,
    category:category,
 }

  function Update(e) {
    e.preventDefault();
    axios.put(`https://twisty-careful-composer.glitch.me/products/${id}`, data).then(navigate("/"));
  }
  return (
    <div className="w-screen h-full flex flex-col justify-center items-center mt-16">
      <h2 className="text-2xl font-bold">User Details</h2>
      <form className="w-[50%] h-full flex flex-col mt-2">
        <input
          value={title}
          onChange={(e) => settitle(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Enter Title"
        />
        <input
          value={price}
          onChange={(e) => setprice(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="number"
          placeholder="Enter price"
        />
        <input
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="url"
          placeholder="Enter  url."
        />
        <select
                    name="category"
                    value={category}
                    onChange={(e)=>setcategory(e.target.value)}
                  >
                    <option value={"Kurtas"}>Kurtas</option>
                    <option value={"Womens"}>Womens</option>
                  </select>
        <button
          className="bg-teal-600 outline-none font-bold border text-white border-zinc-400 py-4 pl-4 mt-4"
          type="submit"
          onClick={Update}
        >
          UPDATE PRODUCT
        </button>
      </form>
    </div>
  );
}

export default Edit;