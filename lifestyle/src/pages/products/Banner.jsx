import React from 'react'
const Banner = ({src,heading}) => {
  return (
    <div style={{width:"90%",margin:"auto",marginTop:"7rem"}}>
    {heading&&<h1 style={{fontSize:'36px',marginBottom:'25px',color:"#000000"}}>{heading}</h1>}
      <div >
        <img style={{width:'100%'}} src={src} alt="" />
      </div>
    </div>
  )
}

export default Banner
