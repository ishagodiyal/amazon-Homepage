import React, { Component } from 'react'
import "./NavBar.css"
import { faEnvelope,faLocationDot} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import logo from './am.jpg'
import { colors } from '@material-ui/core'
import { red } from '@material-ui/core/colors'

class NavBar extends Component {
    constructor(props){
        super(props);
        this.state={ }
    }
    render() {

     



      return (
        
        <div>
      <div className="navbar_component">
<div className="navbar_logo">
<svg xmlns="http://www.w3.org/2000/svg" width="90" height="29" viewBox="0 0 90 29">
    <g fill="none" fill-rule="evenodd">
        <path fill="#F90" d="M55.835 21.326c-5.231 3.81-12.809 5.898-19.339 5.898-9.148 0-17.389-3.358-23.62-9.075-.49-.453-.054-.998.535-.635 6.727 3.902 15.045 6.262 23.638 6.262 5.796 0 12.166-1.18 18.03-3.72.88-.364 1.62.634.756 1.27z"/>
        <path fill="#F90" d="M58.012 18.785c-.67-.817-4.421-.363-6.108-.182-.51.09-.59-.363-.131-.726 2.993-2.087 7.9-1.452 8.469-.817.573.726-.151 5.718-2.957 8.077-.432.363-.84.09-.65-.363.633-1.543 2.046-5.082 1.377-5.99z"/>
        <path fill="#FFF" d="M52.02 2.995V.907c.004-.272.235-.544.52-.544h9.155c.29 0 .529.272.529.544v1.815c-.004.273-.252.636-.69 1.27L56.792 10.8c1.762-.09 3.623.181 5.223 1.089.362.181.46.544.486.817v2.178c0 .272-.328.635-.673.453-2.819-1.452-6.556-1.633-9.673 0-.319.182-.654-.181-.654-.453v-2.088c0-.363.007-.907.342-1.36l5.495-7.987h-4.785c-.295 0-.53-.181-.533-.453zM70.13 3.085c-2.053 0-2.184 2.814-2.184 4.538 0 1.724-.026 5.535 2.16 5.535 2.16 0 2.26-3.085 2.26-4.9 0-1.18-.053-2.632-.414-3.811-.312-.999-.938-1.362-1.822-1.362zM70.106.181c4.136 0 6.37 3.54 6.37 8.077 0 4.356-2.469 7.804-6.37 7.804-4.055 0-6.268-3.539-6.268-7.986 0-4.446 2.237-7.895 6.268-7.895zM47.534 15.79c-.185.09-.52.09-.66 0-.951-.726-1.598-1.815-1.598-1.815-1.53 1.543-2.611 1.996-4.59 1.996-2.345 0-4.17-1.451-4.17-4.355 0-2.27 1.226-3.812 2.97-4.538 1.51-.726 3.624-.816 5.238-.998 0 0 .133-1.724-.339-2.36-.364-.544-.99-.725-1.563-.725-1.035 0-2.033.544-2.23 1.633-.057.272-.285.545-.527.545L37.397 4.9c-.204-.09-.482-.272-.415-.635C37.605.998 40.562 0 43.214 0c1.356 0 3.127.363 4.195 1.361 1.356 1.27 1.226 2.995 1.226 4.81v4.356c0 1.36.542 1.905 1.051 2.631.178.273.218.545-.01.726-.569.454-2.142 1.906-2.142 1.906zm-2.81-6.897c0 1.09.027 1.997-.52 2.995-.441.817-1.145 1.27-1.928 1.27-1.069 0-1.694-.816-1.694-1.996 0-2.45 2.129-2.813 4.142-2.813v.544zM11.017 15.79c-.184.09-.523.09-.656 0-.951-.726-1.598-1.815-1.598-1.815-1.53 1.543-2.612 1.996-4.59 1.996C1.824 15.971 0 14.52 0 11.616c0-2.27 1.226-3.812 2.97-4.538 1.51-.726 3.623-.816 5.237-.998 0 0 .134-1.724-.338-2.36-.368-.544-.991-.725-1.564-.725-1.034 0-2.032.544-2.23 1.633-.057.272-.284.545-.525.545L.88 4.9c-.204-.09-.482-.272-.415-.635C1.088.998 4.045 0 6.697 0c1.356 0 3.128.363 4.196 1.361 1.356 1.27 1.226 2.995 1.226 4.81v4.356c0 1.36.542 1.905 1.051 2.631.177.273.218.545-.01.726-.57.454-2.143 1.906-2.143 1.906zm-2.81-6.897c0 1.09.027 1.997-.522 2.995-.442.817-1.145 1.27-1.929 1.27-1.068 0-1.694-.816-1.694-1.996 0-2.45 2.13-2.813 4.142-2.813v.544h.003zM19.16 7.623c0-1.634-.076-3.902 1.926-3.902 1.976 0 1.715 2.36 1.715 3.902l.003 7.623c0 .272.22.544.499.544h2.782c.299 0 .536-.272.536-.544V7.623c0-.817-.026-1.997.262-2.723.287-.726.987-1.18 1.663-1.18.808 0 1.43.273 1.639 1.271.13.545.076 2.087.076 2.632v7.623c0 .272.22.544.499.544h2.783c.298 0 .535-.272.535-.544l.004-9.075c0-1.543.18-3.267-.703-4.447C32.6.635 31.326.091 30.154.091c-1.638 0-3.171.907-3.848 2.722C25.526.998 24.435.091 22.694.091c-1.715 0-2.991.907-3.668 2.722h-.053V.998c0-.363-.235-.544-.52-.544h-2.597c-.288 0-.52.181-.52.544v14.248c0 .272.235.544.52.544h2.782c.288 0 .52-.272.52-.544l.003-7.623zM82.382 15.246c0 .272-.235.544-.52.544H79.08c-.288 0-.52-.272-.52-.544V.998c0-.363.235-.544.52-.544h2.572c.3 0 .519.272.519.363v2.178h.054C83.005 1.089 84.096.18 86.022.18c1.249 0 2.47.454 3.25 1.634C90 2.995 90 4.9 90 6.262v9.074c-.03.272-.258.454-.533.454h-2.792c-.259 0-.466-.182-.496-.454l.004-8.711c0-2.904-1.11-2.904-1.748-2.904-.744 0-1.343.544-1.605 1.089-.388.907-.452 1.724-.452 2.722l.004 7.714z"/>
    </g>
</svg>
</div>
<div className="navbar_place">
  <div className="navbar_placeimage">
  <FontAwesomeIcon icon={faLocationDot} />
  </div>
 
  <div className="navbar_placeadd">
  Newdelhi
  </div>
</div>
<div>
  <div className="Box">
  <div>
    <select className="dropdown">
      <option value="all">ALL</option>
      <option value="dk">Alexa skills</option>
      <option value="q">Amazon devices</option>
      <option value="w">Amazon fresh</option>
      <option value="e">Amazon Pharmacy</option>
      <option value="dk">Appa & Games</option>
      <option value="q">Amazon devices</option>
      <option value="w">Amazon fresh</option>
      <option value="e">Amazon Pharmacy</option>
    </select>
  </div>
  <div>
    <input type="text" className="searchbox"></input>
  </div>
  
  <div className="searchboxdiv">
    <div className="searchbox_icon">
    <FontAwesomeIcon icon={faMagnifyingGlass} />
    </div>
    </div>
   
<div className="threeright">
    <div className="signup">
      <div style={{fontsize:"14px"}}>Hello,sign in</div>
      <div style={{fontWeight:"bold"}}>Account & List</div>
    </div>
    <div className="returns">
      <div style={{fontsize:"14px"}}>Returns</div>
      <div style={{fontWeight:"bold"}}>& Orders</div>
    </div>
    <div className="mycart">
    <div className="carticon">
    <FontAwesomeIcon icon={faCartShopping}/></div>
    <div className="cart">Cart</div>
    </div>
    </div>
    </div>
    </div>
    <div className="secondbar">
      <div className="secondbar_text">Fresh</div>
      <div className="secondbar_text">Amazon miniTV </div>
      <div className="secondbar_text">Sell </div>
      <div className="secondbar_text">Best Sellers </div>
      <div className="secondbar_text">Mobiles </div>
      <div className="secondbar_text">Today's Deals </div>
      <div className="secondbar_text">Electronic</div>
      <div className="secondbar_text">Customer Service </div>
      <div className="secondbar_text">New Releases </div>
      <div className="secondbar_text">Prime </div>
      <div className="secondbar_text">Gift ideas </div>
      <img src={logo} className="App-logo" />
  </div>
      </div>
      
  </div>
  
  
      
      );
    }
  }
  export default NavBar;