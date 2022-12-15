
import React from "react";

import styles from "./Section.module.css"


const Section = () => {
    
  
   
  
   
    return (
      <div className={styles.productBox}>
        <div className={styles.head}> Men</div>
        <div className={styles.filterbox}>
          <div>
            <img
              src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS_SubCatimg/women-beauty.jpg"
              alt=""
            />
            <p>Beauty</p>
          </div>
          <div>
            <img
              src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS_SubCatimg/women-dressesandjumpsuits.jpg"
              alt=""
            />
            <p>Dress And JumpSuits</p>
          </div>
          <div>
            <img
              src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS_SubCatimg/women-ethnicwear.jpg"
              alt=""
            />
            <p>Ethnic Wear</p>
          </div>
          <div>
            <img
              src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS_SubCatimg/women-facemasks.jpg"
              alt=""
            />
            <p>Face Mask</p>
          </div>
          <div>
            <img
              src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS_SubCatimg/women-fashionjewellery.jpg"
              alt=""
            />
            <p>Fashion Jewellery</p>
          </div>
          <div>
            <img
              src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS_SubCatimg/women-lingerie.jpg"
              alt=""
            />
            <p>Lingrie</p>
          </div>
          <div>
            <img
              src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS_SubCatimg/women-nightwear.jpg"
              alt=""
            />
            <p>Night Ware</p>
          </div>
          <div>
            <img
              src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS_SubCatimg/women-plussize.jpg"
              alt=""
            />
            <p>Plus Size</p>
          </div>
          <div>
            <img
              src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS_SubCatimg/women-sportswear.jpg"
              alt=""
            />
            <p>Sports Ware</p>
          </div>
          <div>
            <img
              src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS_SubCatimg/women-sunglasses.jpg"
              alt=""
            />
            <p>Sunglasses</p>
          </div>
          <div>
            <img
              src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS_SubCatimg/women-tops.jpg"
              alt=""
            />
            <p>Top Ware</p>
          </div>
          <div>
            <img
              src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS_SubCatimg/women-watches.jpg"
              alt=""
            />
            <p>Watches</p>
          </div>
          <div>
            <img
              src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS_SubCatimg/women-watchesandsunglasses.jpg"
              alt=""
            />
            <p>Watches & Sunglasses</p>
          </div>
          <div>
            <img
              src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS_SubCatimg/women-winterwear.jpg"
              alt=""
            />
            <p>Winter Ware</p>
          </div>
        </div>
        <div className={styles.selectbox}>
          <select name="Price" id="">
            <option value="">Price</option>
          </select>
          <select name="Price" id="">
            <option value="">Type</option>
          </select>
          <select name="Price" id="">
            <option value="">Size</option>
          </select>
          <select name="Price" id="">
            <option value="">Color</option>
          </select>
          <select name="Price" id="">
            <option value="">Sleeve Length</option>
          </select>
          <select name="Price" id="">
            <option value="">Length</option>
          </select>
          <select name="Price" id="">
            <option value="">Brand</option>
          </select>
          <select name="Price" id="">
            <option value="">Browse</option>
          </select>
          <select name="Price" id="">
            <option value="">Promotions</option>
          </select>
          <select name="Price" id="">
            <option value="">Discount Range</option>
          </select>
        </div>
  
        {/* <div className={styles.sort}>
          <p>Sort By</p>
          <select name="" id="">
            <option value="">Relevance</option>
            <option value="">Price - Low To High</option>
            <option value="">Price - High To Low</option>
            <option value="">Alphabetical</option>
          </select>
        </div> */}
      </div>
    );
}

export default Section
