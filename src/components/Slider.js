import React from 'react';
// import { Grid } from 'semantic-ui-react';
import { Link  } from 'react-scroll';
// import { List } from 'semantic-ui-react';
// import { Progress } from 'semantic-ui-react'
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import Description from './Description';

// import Education from './Education'




function Slider() {
  // const GridExamplePaddedHorizontally = () => (
  //   <div>
  //     <p>The following grid has horizontal gutters.</p>
  
  //     <Grid columns={2} padded='horizontally'>
  //       <Grid.Column>
  //       </Grid.Column>
  //       <Grid.Column>
  //       </Grid.Column>
  //     </Grid>
  //   </div>
  // )
  
  // const ProgressExampleProgress = () => <Progress percent={60} progress />

    return (
        <div id='about-me' style={{height:"700px", paddingTop:'100px'}}>
          <div style={{width:'80%', height:'70%', margin:'auto' , border:'solid 1px grey',boxShadow:' 3px 5px 5px grey', backgroundColor:'#F5F5F5', padding:'20px'}}>
          
          <div>
            <div className="ui horizontally padded two column grid">
              <div className="column">
                <h1>About Me</h1>
                <p style={{fontSize:'20px'}}>
                  I am a person who always loves to learn new things .
                  After several years of working as an Arabic language teacher
                  ,I decided to learn something new and modern, so I entered the IT field.
                 When I started , I was not sure yet,
                but now I am  so happy with what I have accomplished and I am very proud of myself.
                 So I will continue to dive into this field and master more and more.
                </p>
              </div>
              <div className="column">
                <h1 >Skills</h1>
                <h3 style={{marginTop:'-10px'}} >HTML & CSS</h3>
                <div style={{width:'100%',height:'15px'}} className="ui progress" data-percent="90"><div className="bar" style={{width:"90%",backgroundColor:'#32CD32', height:'15px'}}><div className="progress">90%</div></div></div>
                <h3 style={{marginTop:'-10px'}}>jAVASCRIPT</h3>
                <div style={{width:'100%',height:'15px',marginTop:'-10px'}} className="ui progress" data-percent="80"><div className="bar" style={{width:"80%",backgroundColor:'#32CD32', height:'15px'}}><div className="progress">80%</div></div></div>
                <h3 style={{marginTop:'-10px'}}>WORDPRESS</h3>
                <div style={{width:'100%',height:'15px'}} className="ui progress" data-percent="50"><div className="bar" style={{width:"50%",backgroundColor:'#32CD32', height:'15px'}}><div className="progress">50%</div></div></div>
                <h3 style={{marginTop:'-10px'}}>SCRUM  FRAMEWORK</h3>
                <div style={{width:'100%',height:'15px'}} className="ui progress" data-percent="60"><div className="bar" style={{width:"60%",backgroundColor:'#32CD32', height:'15px'}}><div className="progress">60%</div></div></div>
                <h3 style={{marginTop:'-10px'}}>REACT</h3>
                <div style={{width:'100%',height:'15px'}} className="ui progress" data-percent="70"><div className="bar" style={{width:"70%",backgroundColor:'#32CD32', height:'15px'}}><div className="progress">70%</div></div></div>
              </div>
            </div>
  
        </div>
        <Link style={{float:'right', marginTop:'100px', height:'40px', width:'50px'}} to='header' smooth={true} duration={1000} >Go back</Link>
        </div>
          

        </div>
    )
}

export default Slider
