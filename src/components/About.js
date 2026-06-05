import User from "./User";
import UserClass from "./UserClass";

const About = () =>{
    return (
        <div className="about">
            <h1>About Us</h1>
            <h2>This React Learning From Namaste-React</h2>
            {/* <User name={"Soniya(functional)"} location={"Vijayawada"}/> */}
            <UserClass name={"Soniya(class)"} location={"Vijayawada"}/>
        </div>
    )
}
export default About;