import { Button } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getProductList } from '../../Redux/AppReducer/action';
import "./UserProducts.css";


const UserProducts = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams()
  const location = useLocation()


  const productList = useSelector((store) => store.AppReducer.product)
  // console.log(productList)

  useEffect(() => {
    if (location || productList.length === 0) {
      const productCategory = searchParams.getAll("category")

      const productGender = searchParams.getAll("gender")


      const queryParams = {
        params: {
          gender:productGender,
          category: productCategory,
          _sort: searchParams.get('sortBy') && "price",
          _order: searchParams.get('sortBy')
        },
      }
    
      dispatch(getProductList(queryParams))
    }

  }, [location.search])
  return (
    <>
      {productList.length > 0 && productList.map(menpro => {
        return (


         <Link to={`/menpro/${menpro.id}`}>
          <div key={menpro.id} className="product-list" >
              <div>
              <img src={menpro.image} alt={menpro.title} style={{ height: "300px", width: "100%" }} />
              </div>
              <div>
              <h2 className='pr'> ${menpro.price}</h2>
              </div>
              <div>
              <h3>{menpro.title}</h3>
              </div>
              <div>
              {menpro.category}
              </div>
              <button className='button-product'>ADD TO BASKET</button>            

              
          </div></Link>

        )

      })}

    </>
  )
}

export default UserProducts