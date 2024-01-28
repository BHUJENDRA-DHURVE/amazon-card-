import React from 'react'
import Product from './Product'

const ProductTab = () => {
    let styles ={
        display: "flex",
        flexWrap: "wrap",
        justifyContent:"center",
        alignItems:"center"
    };
  return (
    <div style={styles}>
        
    <Product title={"Nvidia RTX 4080 Ti"} idx={0}/>
    <Product title={"Asus 65 inch 4k monitor"} idx={1}/>
    <Product title={"Asus Rog DDR4 32 GB RAM"} idx={2}/>
    <Product title={"Mechanical RGB Keyboard"} idx={3}/>
    </div>
    
    
  )
}

export default ProductTab