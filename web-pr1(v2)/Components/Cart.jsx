import React, { useEffect } from "react";
import Header from "./Header";
import { CheckLg, JournalMinus, Minecart, Minus, NodeMinus, PatchMinus, Plus, Subtract } from "react-bootstrap-icons";
import { useState } from "react";
import Add from "./Add";

function Cart() {
  let [count, setcount] = useState(1)
  let [total, settotal] = useState(0)
  useEffect(() => {
    getprice()
  }, [])
  
  // console.log(count)
  let product = JSON.parse(localStorage.getItem("cart"));
  // console.log(product);
  let getprice = () => {
    let first = 0
    let product = JSON.parse(localStorage.getItem("cart"));
    product.map((v, i) => {
      first += v.price
      // console.log(v.price)
      settotal(first)
    })
  }
  return (
    <div>
      <Header />
      <div className="cart">
        <div className="container">
          <h1>shopping cart</h1>
          <div className="">
            <div className="justfy-content-between">
              {product.map((v, i) => {
                return (
                  <div className="box" key={i}>
                    <div className="row">
                      <div className="w-50">
                        <div className="w-100">
                          <div className="row">
                            <img src={v.thumbnail} />
                          </div>
                          <div>
                            <h2>{v.title}</h2>
                            <h3>avilable : {v.stock}</h3>
                            <h3>discount : {v.discountPercentage}</h3>
                            <h3>category : {v.category}</h3>
                          </div>
                        </div>
                      </div>
                      <div className="w-50">
                        <div className="w-100">
                          <Add price={v.price} total={total} settotal={settotal} />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="foot">
            <div className="row">
              <div className="w-50">
                <div className="w-100">
                  <h3>total payable price : </h3>
                </div>
              </div>
              <div className="w-50">
                <div className="w-100">
                  <h3>${total}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
