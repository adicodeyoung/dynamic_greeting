import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./index.css";


const cssstyle={};
let  currentTime=new Date().getHours();
let greeting="";
let img="";


if(currentTime>=1 && currentTime<12){
  greeting="G☀️☀️d M☀️rning";
  img="https://www.icegif.com/wp-content/uploads/2022/01/icegif-1841.gif";
  cssstyle.color="cornflourblue";
}
else if(currentTime>=12 && currentTime<17){
  greeting= "G🌅🌅d aftern🕑🕑n";
  img= "https://media3.giphy.com/media/Lr3hZgwizXIw1FSYWQ/giphy.gif?cid=6c09b952bfd87117079764238afb910b87e80157f4bc9b36&rid=giphy.gif&ct=s"
  cssstyle.color="red";
}
else if(currentTime>=17 && currentTime<20){
greeting= "G🌆🌆d Evenℹ️ng"
img= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK14h9vWIrnbY35bSpXvGqTkuX--cVsCbHPQ&usqp=CAU"
cssstyle.color="blue";
}
else{
  greeting= "G🌃🌃d n🌌ght";
  img= "https://i.pinimg.com/originals/d5/cf/a4/d5cfa4395f1667025a2e42e92bd9cd51.gif";
  cssstyle.color="black";

}
ReactDOM.render(
 <>
 <div>
  <h1>Hello World, <span style={cssstyle}>{greeting}</span> </h1>
  <br/>
  <img src={img}/>
  </div>
 </>,
 document.getElementById("root")
);