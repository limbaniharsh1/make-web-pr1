import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import { StarFill, StarHalf } from "react-bootstrap-icons";

function Product() {
  let [data, setdata] = useState([]);
  let my = JSON.parse(localStorage.getItem('data')) || []; 
  console.log(my)
  useEffect(() => {
    get();
  }, []);
  let get = async () => {
    let req = await fetch(`https://dummyjson.com/products?pages=1&limit=60`);
    let res = await req.json();
    setdata(res.products);
  };
  console.log(data);
  console.log(my.length)
  return (
    <div>
      <Header />
      <div>
        <div className="container product">
          <div className="main">
            {data.map((v, i) => {
              return (
                <Link to={my.length>0 ? `/details/${v.id}` : `/signup`} className="product-text">
                  <div key={i}>
                    <div className="box">
                      <div>
                        <img src={v.thumbnail} />
                        <h2>{v.title}</h2>
                        <h3>${v.price}</h3>
                        <p>${v.description}</p>
                        <div className="row">
                          <span className="rating"><StarFill/></span>
                          <span className="rating"><StarFill/></span>
                          <span className="rating"><StarFill/></span>
                          <span className="rating"><StarFill/></span>
                          <span className="rating"><StarHalf/></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
