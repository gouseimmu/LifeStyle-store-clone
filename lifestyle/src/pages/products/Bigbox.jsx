import React from 'react'
import styles from './Bigbox.module.css'
const Bigbox = ({heading,data}) => {
  return (
    <div className={styles.bigbox_img_main}>
      <h1>{heading}</h1>
      <div className={styles.bigbox_img_cont}>
        {data?.map((el)=>  <div>
            <img src={el} alt="img" />
        </div>)}
      </div>
    </div>
  )
}

export default Bigbox
