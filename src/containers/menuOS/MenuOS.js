import React, {useContext} from "react";
import StyleContext from "../../contexts/StyleContext";
import "./MenuOs.css";


export default function MenuOS() {
    const {isDark} = useContext(StyleContext);
    return (
        <div id="dock-container">
        <div id="dock">
          <ul>

          
             <li>
               <span>Skills</span>
               <a href="#"><img
                alt="Skills"
                src={require("../../assets/images/habilidadesColor.png")}
              /></a>
             </li>
             <li>
               <span>Experience</span>
               <a href="#"><img
                alt="Skills"
                src={require("../../assets/images/workExpe.png")}
              /></a>
             </li>
             <li>
                <span>Resume</span>
                <a href="#"><img
                alt="Skills"
                src={require("../../assets/images/cvSumary.png")}
              /></a>
             </li>
             <li>
                <span>Contact</span>
                <a href="#"><img
                alt="Skills"
                src={require("../../assets/images/phone-book.png")}
              /></a>
             </li>
          </ul>
        </div>
       </div>
    )
}



