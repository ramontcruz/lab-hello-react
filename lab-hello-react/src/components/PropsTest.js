import ironhacklogoxs from "../images/ironhack-logo-xs.png";
import menutopxs from "../images/menu-top-xs.png";
import '../App.css';

function PropsTest(props){
    return(
        <div class="col">
            <img  src={props.imagem} alt="icon 1"/> 
            <h1>Declarative</h1>
            <p className='Text-icon'>React Make it painless to create interactive UIs</p>
          </div>
        );

}

export default PropsTest;

