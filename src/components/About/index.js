import React from 'react';
import coverImage from "../../assets/cover/cover-image.jpg";

const About = () => {
    // jsx - javascript xml 
    return (
        //React.createElement("div", {}, [ 
            // React.createElement('h1', {}, "name"),
        // React.createElement("p", {}, "whatever that goes in P tag")
       // ])
       //the above is the equivalent of what is happening below. JSX translates that ^ 
        <section className="my-5">
            <h1 id = "about">Who am I?</h1>
            <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
         </section>
        
    );
    
}

export default About;