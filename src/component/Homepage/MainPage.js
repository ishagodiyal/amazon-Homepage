import React, { Component } from 'react'
import big1 from'./bigimage1.jpg';
import big2 from'./bigimage2.jpg';
import big3 from'./bigimage3.jpg';
import "./MainPage.css"
import box1 from './box2_4.jpg' 
import box2 from './shoes.jpeg'
import box3 from './watch.webp'
import box4 from './bags.avif'
import boat from './boat.jpg'
import bolt from './bolt.jpeg'
import noise from './noise.jpeg'
import zebro from './zebronics.webp'
import sheet from './bedsheet.jpg'
import decor from './decors.jpg'
import light from './lights.jpg'
import stores from './homestorage.jpg'
import crush from './crushed.jpg'
import pharma from './pharmacy.jpg'
import t1 from './tshirt.jpg'
import red1 from './redtape.jpg'
import red2 from './redtape2.jpg'
import t2 from './tshirt2.jpg'
import gym from './sports.jpg'
import micro from './microwave.jpg'

class MainPage extends Component {
    constructor(props){
        super(props);
        this.state={ }
    }
    render() {
      return (
      

    
< div className="main">
  <div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={big1} class="d-block w-100" height="100%"  />
    </div>
    <div class="carousel-item">
      <img src={big2} class="d-block w-100" />
    </div>
    <div class="carousel-item">
      <img src={big3} class="d-block w-100" />
    </div>
  </div>
  
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div> 

<div className="addmain">
      <div className="addheader">
       Styles for men | women
      </div>
      <div className="addmiddle">
        <img src={box1} height="110px" width="150px"></img>
      </div>
      <div className="addfoot">clothing</div>

      <div className="addmiddle1">
        <img src={box2}height="110px" width="150px"></img>
      </div>
      <div className="addfoot1">footwear</div>

      <div className="addmiddle2">
        <img src={box3} height="110px" width="150px"></img>
      </div>
      <div className="addfoot2">watches</div>

      <div className="addmiddle3">
        <img src={box4}height="110px" width="150px"></img>
      </div>
      <div className="addfoot3">bags & wallets</div>

      <div className="lastdiv">see more</div>
    </div>

    <div className="addmain1">
    <div className="cardhead">
      Up to 75% off | Headphones
      </div>
      <div className="cardmiddle">
        <img src={boat} height="110px" width="150px"></img>
      </div>
      <div className="cardfoot">boat</div>

      <div className="cardmiddle1">
        <img src={bolt}height="110px" width="150px"></img>
      </div>
      <div className="cardfoot1">bolt</div>

      <div className="cardmiddle2">
        <img src={noise} height="110px" width="150px"></img>
      </div>
      <div className="cardfoot2">noise</div>

      <div className="cardmiddle3">
        <img src={zebro}height="110px" width="150px"></img>
      </div>
      <div className="cardfoot3">zebronics</div>

      <div className="cardlastdiv">see more</div>
    </div>

    <div className="addmain2">
   <div className="homestylehead">
    Revamp your home in style
   </div>
   <div className="homestylemid">
<img src={sheet} height="110px" width="150px"></img>
   </div>
   <div className="homestylefoot">cushion covers,bedsheets <br/>& more</div>

   <div className="homestylemid1">
<img src={decor} height="110px" width="150px"></img>
   </div>
   <div className="homestylefoot1">Figurines,vases<br/> & more </div>

   <div className="homestylemid2">
<img src={stores} height="110px" width="150px"></img>
   </div>
   <div className="homestylefoot2">Home storage </div>

   <div className="homestylemid3">
<img src={light} height="110px" width="150px"></img>
   </div>
   <div className="homestylefoot3">Lighting solutions</div>
   <div className="homestylebottom">see more</div>
</div>

<div className="addmain3">
<div className="crushhead">
    Watch only on miniTV
   </div>
   <div className="crushmain">
 <a href="https://www.amazon.in/minitv/tp/5b0f642a-209b-4762-8bcd-6373c7327186"><img src={crush} height="270px" width="290px"></img></a>
  </div>
  <div className="crushbottom">Watch more FREE content | only on miniTV</div>
</div>
< div className="addmain4">
  <div className="diabetes">
  Up to 50% off|Diabetes care <br/>devices
  </div>
  <div className="diabbody">
<img src={pharma} height="280px" width="300px"></img>
  </div>
  <div className="addmain4bottom">see more</div>
</div>
<div className="addmain5">
  <div className="outhead">
    Customers' Most-Loved<br/>Fashion For you
  </div>
<div className="outfit1">
        <img src={t1} height="130px" width="100px"></img>
      </div>
   <div className="outfit2">
        <img src={red1} height="120px" width="160px"></img>
   </div>
   <div className="outfit3">
        <img src={t2} height="130px" width="75px"></img>
   </div>
   <div className="outfit4">
        <img src={red2} height="120px" width="150px"></img>
   </div>
   <div className="addmain5bottom">see more</div>
</div>
<div className="addmain6">
  <div className="gymhead">
    Starting ₹99 |Start your <br/>fitness journey
  </div>
 <div className="gym">
 <img src={gym} height="280px" width="300px"></img>
 </div>
 <div className="addmain6bottom">see more</div>
</div>
<div className="electric">
  <div className="elechead">
    Appliances for home | Up<br/>to 55% off
  </div>
  <div className="elecmain">
  <img src={micro} height="280px" width="300px"></img>
  </div>
  <div className="addmain7bottom">see more</div>
</div>


    </div>


      );
    }
  }
  export default MainPage;