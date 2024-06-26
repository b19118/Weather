import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import "./card.css";
import "./Search.css";
import UseState from "react";
export default function Info({result}){
   //console.log("resulr is"+result);
   const url="https://tse4.mm.bing.net/th?id=OIP.nX5pnQxG3pc9ZHizFdW2SgHaEK&pid=Api&P=0&h=180"//rainy
   const url2="https://tse4.mm.bing.net/th?id=OIP.FUkH3puxHJqI1T-Hkdv9uQHaDt&pid=Api&P=0&h=180"//cold
   const url3="https://tse1.mm.bing.net/th?id=OIP.gVIEKIE-jtNJ2fUrsaZB6wHaEK&pid=Api&P=0&h=180"
   const url4="https://lightwidget.com/wp-content/uploads/local-file-not-found.png"
   const temp1=Math.round(result.temp-273.15);
   return(
      <div>
        <Card sx={{ width:300, height:400,  marginLeft:5,// Move the card to the right
    marginTop: '20px'}}>
      <CardMedia
        sx={{ height: 140 }}
        image={temp1>=25 && temp1<30?url:(temp1<20)?url2:temp1>30?url3:url4}
        title="green iguana"
        height="200px"
        width="400px"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">{result.city}
       {temp1>=25 && temp1<30?<ThunderstormIcon className="element"/>:(temp1<20)?<AcUnitIcon  className="element"/>: temp1>30?<WbSunnyIcon  className="element" />:null}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <div className="text">
        <p >Temperarture :<span className="t1">{Math.round(result.temp-273.15)}&deg;C</span></p>
        <p>Humidity : <span className="t1">{result.humidity}</span> </p>
        <p>Temp Min:<span className="t1">{Math.round(result.tempMin-273.15)}&deg;C</span> </p>
        <p >Temp Max:<span className="t1">{Math.round(result.tempMax-273.15)}&deg;C</span></p>
        <p>The Weather Feels Like :<span className="t1">{Math.round(result.feelslike-273.15)}&deg;C</span></p>
        </div>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
      </div>
   );
}