import "./Search.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {useState} from "react";
import Info from "./Info";
export default function SearchBox({updateinfo}){
   
    
   let[city,setcity]=useState("");
   let[error,seterror]=useState(false);
   const api_key="d22fe5820938fc5993368fd5a2ec36ae";
   const url="https://api.openweathermap.org/data/2.5/weather";

   let getWeatherinfo=async()=>{
      try{
      let response=await fetch(`${url}?q=${city}&appid=${api_key}`);
      let jsonresponse=await response.json();
      let result={
         city:city,
         temp:jsonresponse.main.temp,
         tempMin:jsonresponse.main.temp_min,
         tempMax:jsonresponse.main.temp_max,
         humidity:jsonresponse.main.humidity,
         feelslike:jsonresponse.main.feels_like,
        // weather:jsonresponse.main.weather[0].description,
      };
     console.log(result);
      return result;
   }
   catch(err){
      throw err;
   }
   };
   //q={city name}&appid={API key}"
  // q={city name}&appid={API key}"
   function handleChange(event){
      setcity(event.target.value)
   }
   async function handlesubmit(event){
      try{
      console.log(city);
       event.preventDefault();
       seterror(false);
       setcity("");
      let res= await getWeatherinfo();
       updateinfo(res);
       console.log(res);
      }
      catch(err){
         console.log(error);
         updateinfo(" ");
         setcity(" ");
         seterror(true);
         console.log(error);
      }
   }
   return(
      <div className="searcb" >
         <form onSubmit={handlesubmit}>
           <TextField  sx={{
                '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white', // Set border color to white
      },
      '&:hover fieldset': {
        borderColor: 'white', // Set border color to white on hover
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white', // Set border color to white when focused
      },
    },
    '& .MuiFormLabel-root': {
      color: 'white', // Set label color to white
    },
    '& .MuiInputBase-root': {
      color: 'white', // Set text color to white
    },
}}onChange={handleChange} id="city" label="City Name" name="city" variant="outlined" value={city} />
           <br></br>
           <br></br>
           <Button variant="contained" type="submit"> Search </Button>
           <br></br>
           <br></br>
           {error&&<p className="warning-box" style={{color:"Red"}}>No such place exists</p>}
         </form>
      </div>

   );

}