import "./UsText.css"
import Us from "../../../assets/us.png"
import Image from "../../atoms/Image/Image";

function  UsText() {
  return (
      <section className="mission-container">
        <Image src={Us} alt="Us" className="mission-img" ></Image>
    
        <div className="mission-text-container">
            <h2 className="mission-title">ABOUT US</h2>
            <p>
                At PawFriends, we believe that every dog<br/>
                 ​​deserves a community that supports them,<br/> 
                and every human needs a place to share the love for their furry friend
            </p>
            
            <p>
            This social network was born with the idea of <br/>
            ​​connecting dog owners from all over the world to share<br/>
            experiences,advice, happy moments, and also support each other in difficult times.
            </p>

        </div>
    </section>
  );
}
export default UsText;