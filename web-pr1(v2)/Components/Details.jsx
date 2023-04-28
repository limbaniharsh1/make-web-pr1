import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import { StarFill, StarHalf } from "react-bootstrap-icons";

function Details() {
  let [data, setData] = useState({});
  let { id } = useParams();
  console.log(id);
  useEffect(() => {
    get();
  }, []);
  let get = async () => {
    let req = await fetch(`https://dummyjson.com/products/${id}`);
    let res = await req.json();
    setData(res);
  };
  return (
    <div className="details">
      <Header />
      <div className="container">
        <div className="detail-box">
          <div className="row">
            <div className="w-50">
              <div className="w-100">
                <div className="detail-img row">
                  <div className="main1">
                    <div className="img-box">
                      {/* <img src={data.images[4]}/> */}
                    </div>
                  </div>
                  <div className="main2">
                    <img src={data.thumbnail} />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-50">
              <div className="w-100">
                <div className="detail-content">
                  <h2>{data.title}</h2>
                  <h6>{data.brand}</h6>
                  <h5>${data.price}</h5>
                  <div className="row">
                    <span className="rating">
                      <StarFill />
                    </span>
                    <span className="rating">
                      <StarFill />
                    </span>
                    <span className="rating">
                      <StarFill />
                    </span>
                    <span className="rating">
                      <StarFill />
                    </span>
                    <span className="rating">
                      <StarHalf />
                    </span>
                  </div>
                  <h3>Description : </h3>
                  <p>
                    {data.description} Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Ea fugit enim voluptate maxime laborum.
                    Nulla, non? Vel quia veniam pariatur facilis aperiam
                    cupiditate suscipit unde laborum asperiores quod?
                  </p>
                  <div className="row detail-btn justify-content-between">
                    <div className="btns">
                      <button className="buy-btn">Buy now</button>
                      <button className="add-btn">Add to cart</button>
                    </div>
                    <h4>Available Stock : {data.stock}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
