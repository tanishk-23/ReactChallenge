import React,{useState,useEffect} from "react";
import Header from "./Header";

export default function Slider() {
  const [value,onChange]=useState(1);
  useEffect(()=>{
      const ele = document.querySelector('.buble');
    if (ele) {
      ele.style.left = `${Number(value / 4)}px`;
    }
  })
  return (
    <div className="slidecontainer">
        <Header value={`$${value}`}/>
        <input type="range" className={`slider`} id="myRange" min="1" max="500" value={value}
            style={{backgroundColor: `rgb(val-50, val, val-20)`}}
            onChange={({ target: { value: radius } }) => {
                        onChange(radius);
                    }}
        />
    </div>
  );
}
