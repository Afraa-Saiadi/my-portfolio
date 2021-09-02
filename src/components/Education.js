import React from 'react';
import { Link  } from 'react-scroll';

function Education() {
    return (
        <div id='education' style={{width:'100%', height:'700px',paddingTop:'100px'}}>
            <div style={{width:'80%', height:'80%', margin:'auto' , border:'solid 1px grey',boxShadow:' 3px 5px 5px grey', backgroundColor:'#F5F5F5', padding:'20px'}}>  
                <div>
                    <div className="ui horizontally padded two column grid">
                        <div className="column">
                            <h1>Education</h1>
                                <h3>-Full stack MERN program at Code Matrix Zone/ Rotterdam
                                Februari – now 2021</h3>
                                <h5>A program of 5 months where we learn the basic of the most important things in the web development world.</h5>
                                <h3>- Interpreter at Vluchtelingenwerk van het noorden/ Groningen
                                   2019</h3>
                                <h5>A training to become a translator for goups people who are new in  the Netherlands. </h5> 
                                <h3>- Arabic language and literature at Al-Baath University
                                September 2009- 2014</h3>
                                <h5>Arabic Language and Literature (My degree is evaluated by IDW and it is equivalent to bachelor degree in Arabic language and culture in the Netherlands.</h5>
                        </div>
                        <div className="column">
                            <h1>Work Experience</h1>
                            <h3>-Front-end Web Developer at Code Matrix Zone (now).</h3>
                            <h3>-Arabic language Teacher (2014-now).</h3>
                            <h3>-Interpreter at Vluchtelingenwerk van het noorden/ Groningen  (2019). </h3>
                            
                        </div>
                    </div>
            </div>
        

                <Link style={{float:'right', marginTop:'150px', height:'40px', width:'50px'}} to='header' smooth={true} duration={1000} >Go back</Link>
            </div>
            
        </div>
    )
}

export default Education
