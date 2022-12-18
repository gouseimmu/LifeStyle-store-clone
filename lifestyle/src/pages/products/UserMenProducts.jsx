import { Button } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { getMenProductList, setSelectProduct } from "../../Redux/AppReducer/action";
import "./UserProducts.css";
const UserMenProducts = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate()

  const productList = useSelector((store) => store.AppReducer.product);
  // console.log(productList)

  useEffect(() => {
    if (location || productList.length === 0) {
      const productCategory = searchParams.getAll("category");

      const productGender = searchParams.getAll("gender");

      const queryParams = {
        params: {
          gender: productGender,
          category: productCategory,
          _sort: searchParams.get("sortBy") && "price",
          _order: searchParams.get("sortBy"),
        },
      };

      dispatch(getMenProductList(queryParams));
    }
  }, [location.search]);

  const handleProductClick =(item)=>{
    dispatch(setSelectProduct(item))
    navigate(`/menpro/${item.id}`)
  }
  return (
    <>
      {productList.length > 0 &&
        productList.map((menpro) => {
          return (
            // <Link to={`/menpro/${menpro.id}`}>
              <div  key={menpro.id} className="product-list" onClick={()=>handleProductClick(menpro)}>
                <div>
                  <img
                    src={menpro.image}
                    alt={menpro.title}
                    style={{ height: "300px", width: "100%" }}
                  />
                </div>
                <div>
                  <h2> ${menpro.price}</h2>
                </div>
                <div>
                  {" "}
                  <h3>{menpro.title}</h3>
                </div>
                <div>{menpro.category}</div>

                <div>
                  <button className="button-product">BUY NOW</button>
                </div>
              </div>
            // </Link>
          );
        })}
    </>
  );
};

export default UserMenProducts;
