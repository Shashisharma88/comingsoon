import "../fonts/fonts.css"
import logo1 from "../../assets/logo1.png"
import telegram from "../../assets/telegram.png"
import x from "../../assets/twitter.png"
import star1 from "../../assets/star1.png"
import star2 from "../../assets/star2.png"
const Launch =()=>{

    return(<>
        <section id="launch">
        <div className="sta">
        <img className="star1" alt="star" src={star1}/>
        <img className="star2" alt="star" src={star2}/>
        </div>
        <div className="launch-text">
        <div  className="launch-body">
            <img className="logo image-overlay" alt="Trex20" src={logo1}/>
            <div className="tagline text-overlay">
            <p className="play">PLAY, EARN, OWN, TRADE, and NFTFi</p>
                <p className="built">Built on the Bitcoin Protocol </p>
                
            </div>
            <p className="blinking-text blink-overlay">COMING SOON</p>
        </div>
        <div className="footer footer-overlay">
        <a href="https://t.me/trex20OfficialChat">
        <img  className="telegram" alt="Telegram" src={telegram}/></a>
        <a href="https://twitter.com/trex20_official">
        <img  className="twitter" alt="X" src={x}/></a>
        </div>
        </div>
        </section>
        
        
        
        </>
    );
}
export default Launch;