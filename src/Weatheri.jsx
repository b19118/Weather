import SearchBox from "./SearchBox";
import Info from "./Info";
import {useState} from "react";
import "./Search.css"
export default function Weatheri(){
   let[weathinfo,setinfo]=useState({
      city:"Hyderabad",
      temp:56,
      tempMin:23,
      tempMax:123,
      humidity:34,
      feelslike:"",
   });
   function updateinfo(res){
      setinfo(res);
   };
   return(
      <div className="container">
         <h2 className="h2">Weather App </h2>
         <SearchBox updateinfo={updateinfo} />
         <Info result={weathinfo}/>
      </div>

   );
}