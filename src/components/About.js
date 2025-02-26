import User from "./User";
import UserClass from "./UserClass";

const About = ()=>{
    return(
        <div>
            <h1>
                About
            </h1>
            <h2>
                About Component!!!
                {/* <User name={"Satyam"}/> */}
                <UserClass name={"Paridhi"} />   
            </h2>
        </div>
    );
};

export default About;