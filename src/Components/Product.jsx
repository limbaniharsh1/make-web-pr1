import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Star, StarFill, StarHalf} from "react-bootstrap-icons";
import Filter from "./Filter";
import Kids from "./Kids";

function Product() {
  let [data, setdata] = useState([]);
  let[urlname,setUrlname]=useSearchParams()
  let my = JSON.parse(localStorage.getItem('data')) || [];
  // let obj;
  // my.map((v)=>{obj=v.length})
  let nav = useNavigate()
  console.log(my)
  useEffect(() => {
    get();
    // handlecategories()
  }, []);
  let get = async () => {
    let req = await fetch(`https://dummyjson.com/products?pages=1&limit=300`);
    let res = await req.json();
    setdata(res.products);
  };
  
  let param=urlname.get('sort')
  if(param == 'lth'){
    data.sort((a,b)=>a.price - b.price)
  }
  else if(param == 'htl'){
    data.sort((a,b)=>b.price - a.price)
  }
//  else{
//   setdata(data)
//  }
  
  let cate = urlname.get('cate')
  useEffect(()=>{
    handle()
  },[cate])
  let handle =()=>{
    if(cate == 'electronics'){
      let filtereddata = data.filter((v)=>v.category === 'laptops' || v.category === 'smartphones' || v.category === 'automotive');
      setdata(filtereddata)
    }
    else if(cate == 'mens'){
      let filtereddata = data.filter((v)=>v.category === 'mens-shirts' || v.category === 'mens-shoes' || v.category === 'mens-watches' || v.category === 'sunglasses' || v.category === 'fragrences')
      setdata(filtereddata)
    }
    else if(cate == 'womens'){
      let filtereddata = data.filter((v)=>v.category === 'womens-dresses' || v.category === 'womens-shoes' || v.category === 'womens-watches' || v.category === 'womens-bags' || v.category === 'womens.jewellery')
      setdata(filtereddata)
    }
    else if(cate == 'furniture'){
      let filtereddata = data.filter((v)=>v.category === 'furniture' || v.category === 'home-decoration')
      setdata(filtereddata)
    }
    else if(cate == 'automotive'){
      let filtereddata = data.filter((v)=>v.category === 'automotive')
      setdata(filtereddata)
    }
    else if(cate == 'motocycle'){
      let filtereddata = data.filter((v)=>v.category === 'motorcycle')
      setdata(filtereddata)
    }
    else if(cate == 'lighting'){
      let filtereddata = data.filter((v)=>v.category === 'lighting')
      setdata(filtereddata)
    }
    else if(data == 'skincare'){
      let filtereddata = data.filter((V)=>v.category == 'skincare')
      setdata(filtereddata)
    }
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
  // let mydata=()=>{
  //   data.filter((e)=>e.category == 'Laptops')
  // }

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
                            {/* <button onClick={mydata}>click me</button> */}
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
