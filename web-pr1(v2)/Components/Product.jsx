import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Link, useSearchParams } from "react-router-dom";
import { Star, StarFill, StarHalf} from "react-bootstrap-icons";
import Filter from "./Filter";

function Product() {
  let [data, setdata] = useState([]);
  let[urlname,setUrlname]=useSearchParams()
  let my = JSON.parse(localStorage.getItem('data')) || [];
  // let obj;
  // my.map((v)=>{obj=v.length})
  console.log(my)
  useEffect(() => {
    get();
    // handlecategories()
  }, []);
  useEffect(()=>{
  },[])
  let get = async () => {
    let req = await fetch(`https://dummyjson.com/products?pages=1&limit=300`);
    let res = await req.json();
    setdata(res.products);
  };
  // console.log(data);
  // console.log(my.length)
  
  let param=urlname.get('sort')
  if(param == 'lth'){
    data.sort((a,b)=>a.price - b.price)
  }
  else if(param == 'htl'){
    data.sort((a,b)=>b.price - a.price)
  }
  else if(param == 'all'){
    alert('all')
  }
  
  // function handlecategories(){
  //   // let cate = 'electronics'
  //   // console.log('myyyyyyyyyy'+cate)
  //   // if(cate == 'electronics'){
  //     // data.filter((ele)=>ele.category == 'Laptops')
  //     // setdata(elect)
  //     // data.filter((v)=>{
  //     //   console.log(v)
  //     // })
    
  // }
  let mydata=()=>{
    data.filter((e)=>e.category == 'Laptops')
  }

  return (
    <div>
      <Header />
      <div>
        <div className="container product">
          <div className="row">
            <div className="w-25 menu">
              <div className="w-100">
                <Filter/>
              </div>
            </div>
            <div className="w-75">
              <div className="main">
                {data.map((v, i) => {
                  return (
                    <Link to={my.length > 0 ? `/details/${v.id}` : `/signup`} className="product-text">
                      <div key={i}>
                        <div className="box">
                          <div>
                            <img src={v.thumbnail} />
                            <h2>{v.title}</h2>
                            <h3>${v.price}</h3>
                            <h3>${v.category}</h3>
                            <p>${v.description}</p>
                            <div className="row">
                              <span className="rating"><StarFill /></span>
                              <span className="rating"><StarFill /></span>
                              <span className="rating"><StarFill /></span>
                              <span className="rating"><StarFill /></span>
                              <span className="rating"><StarHalf /></span>
                            </div>
                            <button onClick={mydata}>click me</button>
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
      </div>
    </div>
  );
}

export default Product;
