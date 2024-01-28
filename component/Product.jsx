import React from 'react'
import "./Product.css"
import Price from './Price'

const Product = ({title, price,idx}) => {
    let oldPrice =["45,413","50,522","34,543","59,433"];
    let newPrice =["40'090","45,003","30,342","55,434"];
    let description = ["Best performing Graphic Card","Best Experience sunning visual screen","Recommended for current gen Games","Only for Gamers"]
  return (
    <div className='Product'>
       <h4>{title}</h4>
        <p>{description[idx]}</p>
        <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]}/>
    </div>
  )
}

export default Product