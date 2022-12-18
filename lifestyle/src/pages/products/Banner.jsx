import React from 'react';
import styles from './Bigbox.module.css'


const Banner = ({src,heading}) => {
  return (
    <div style={{width:"90%",margin:"auto",marginTop:"3rem"}}>
    <h1>{heading}</h1>

      <div>
        <img style={{width:'100%'}} src={src} alt="" />
      </div>
    </div>
  )
}

export default Banner
