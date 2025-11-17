import React, { useEffect, useState } from "react";
import { IoChevronUp } from "react-icons/io5";

export default function BackToTop(){
  const [visible,setVisible] = useState(false);
  useEffect(()=>{
    const onScroll = ()=> setVisible(window.scrollY > 200);
    window.addEventListener("scroll", onScroll);
    return ()=> window.removeEventListener("scroll", onScroll);
  },[]);
  return (
    <button onClick={()=>window.scrollTo({top:0, behavior:"smooth"})}
      className={`fixed right-6 bottom-6 p-3 rounded-full bg-gray-900 text-white shadow-lg transition-opacity ${visible? "opacity-100":"opacity-0 pointer-events-none"}`}>
      <IoChevronUp />
    </button>
  );
}
