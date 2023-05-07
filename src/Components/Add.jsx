import React from "react";
import { useState } from "react";

function Add(props) {
  let [count, setcount] = useState(1);
  let[first,setfirst]=useState()
  let add = () => {
    setcount(++count);
    props.settotal(props.total + props.price)
  };
  let decre = () => {
    if (count > 1) {
      setcount(--count);
        props.settotal(props.total - props.price)
    } else {
      setcount((count = 1));
    }
  };
  return (
    <div className="row justify-content-between w-100">
      ${props.price}
      <div className="row qty align-items-center">
        <input type="button" value="-" onClick={decre} />
        <h5>{count}</h5>
        <input type="button" value="+" onClick={add} />
      </div>
      <div>
        {`$${count*props.price}`}
      </div>
    </div>
  );
}

export default Add;
