import ironhacklogoxs from "../images/ironhack-logo-xs.png";
import menutopxs from "../images/menu-top-xs.png";
import '../App.css';

function TopImages(){
    return(
        <div class="row justify-content-between mb-5">
          <div class="col-auto me-auto">
            <img  src={ironhacklogoxs} alt="logo da ironhack"/>
          </div>
          <div class="col-auto">
            <img  src={menutopxs} alt="Menu"/>
          </div>
       </div>
        );

}

export default TopImages;