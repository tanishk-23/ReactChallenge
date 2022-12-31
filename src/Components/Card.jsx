import Billing from "./Billing";
import Footer from "./Footer";
import Slider from "./Slider";

export default function Card(){
    return(
        <div className="card">
        <Slider/>
        <Billing/>
        <div className="separator"></div>
        <Footer/>
      </div>    
    );
}