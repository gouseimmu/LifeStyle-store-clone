import React from 'react';
import styles from './Bigbox.module.css'


const Banner = ({src,heading}) => {
  return (
    <div style={{width:"90%",margin:"auto",marginTop:"3rem"}}>
    {/* {heading&&
    <h1 className='head' style={{fontSize:'30px',marginBottom:'25px',color:"#000000"}}>{heading}</h1>
    } */}
    <h1>{heading}</h1>

      <div>
        <img style={{width:'100%'}} src={src} alt="" />
      </div>
    </div>
  )
}

export default Banner
