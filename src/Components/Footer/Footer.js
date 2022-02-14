import React from 'react'
import { NavLink } from 'react-router-dom'
import './Footer.css'
import footerData from './FooterData'
import { RiFacebookBoxFill,RiInstagramLine } from "react-icons/ri";
import {  AiFillTwitterCircle} from "react-icons/ai";


const Footer = () => {


  return (
    <>
    <div className="container">
        <div className="row">
            <img src={require("../../Images/DropGrubLogo.svg").default} alt="" />
            <div id="google_translate_element"></div> 
        
    
           
        </div>

        <div className="row2">
{footerData.map((item,index)=>(
    <div key={index} className="footerData">
<h4 className="linksHeading">{item.title}</h4>
<NavLink style={{paddingTop:"10px"}} to={item.link1}  >{item.linktext1}</ NavLink>
<NavLink style={{paddingTop:"10px"}} to={item.link2} >{item.linktext2}</NavLink>
<NavLink style={{paddingTop:"10px"}} to={item.link3} >{item.linktext3}</NavLink>
<NavLink style={{paddingTop:"10px"}} to={item.link4} >{item.linktext4}</NavLink>
<NavLink style={{paddingTop:"10px"}} to={item.link5?item.link5:"/"} >{item.linktext5?item.linktext5:""}</NavLink>
    </div>
))}
 <div className="footerData ">
<h4>SOCIAL LINKS</h4>
<div style={{paddingTop:"10px",fontSize:"20px"}}><a className="sociallinks"  href="!#"><RiFacebookBoxFill/></a><a className="sociallinks" href="!#"><RiInstagramLine/></a><a className="sociallinks" href="!#"><AiFillTwitterCircle/></a></div>
<a style={{paddingTop:"10px"}} href="!#"><img src={require("../../Images/playstore.svg").default} alt="" /></a>
<a style={{paddingTop:"10px"}} href="!#"><img src={require("../../Images/applestore.svg").default} alt="" /></a>
    </div>
</div>


<div className="row3">
 {new Date().getFullYear()-1}-{new Date().getFullYear()} &#169; DropGrub&#8482; Media Pvt. Ltd. All rights reserved.

</div>

    </div>
    </>
  )
}

export default Footer