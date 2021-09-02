import React from 'react';
import { Link  } from 'react-scroll';
// import { Card, Icon, Image } from 'semantic-ui-react';

function Projects() {
    return (
        <div id='projects' style={{width:'100%', height:'700px',paddingTop:'100px'}}>
            <div style={{width:'80%', height:'70%', margin:'auto' , border:'solid 1px grey',boxShadow:' 3px 5px 5px grey', backgroundColor:'#F5F5F5', padding:'20px',display:'flex',justifyContent:'space-around'}}>
                <h1 style={{marginTop:'-20px',font:'50px Arial sans-serif'}}>Some<br/> Of<br/> My<br/> Projects</h1> 
                <div className="ui card">
                    <div className="image">
                        <img src="https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJ1c2luZXNzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt='lamp'/>
                    </div>
                    <div className="content">
                        <div className="header">GitHub using React</div>
                        <div className="description">A web page application that have a github user's information using react</div>
                    </div>
                    <div style={{paddingLeft:'10px'}}><a href=' # '>Read more</a></div>
                </div> 
                <div className="ui card">
                    <div className="image">
                        <img src="https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJ1c2luZXNzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"alt='lamp' />
                    </div>
                    <div className="content">
                        <div className="header"> Open Weather Map API</div>
                        <div className="description">A web page that give us the weather state in any city in the world that we want</div>
                    </div>
                    <div style={{paddingLeft:'10px'}}><a href=' # '>Read more</a></div>
                </div> 
                <div className="ui card">
                    <div className="image">
                        <img src="https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJ1c2luZXNzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"alt='lamp'  />
                    </div>
                    <div className="content">
                        <div className="header">Facebook using HTML/CSS</div>
                        <div className="description">A static web page using html/css</div>
                    </div>
                    <div style={{paddingLeft:'10px'}}><a href=' # '>Read more</a></div>
                </div> 

                <Link style={{float:'right', marginTop:'450px', height:'40px', width:'50px'}} to='header' smooth={true} duration={1000}  >Go back</Link>
            </div>
            
        </div>
    )
}

export default Projects
