import React from 'react';
import  {useState} from 'react';
import { Link  } from 'react-scroll';
// import { Button} from 'semantic-ui-react';
// import { Form } from 'semantic-ui-react';
import  background from '../map.jpg';
import { Icon } from 'semantic-ui-react';


function Footer() {
    // const IconExampleDisabled = () => <Icon disabled name='angle double up' />


    const [message , setMessage]= useState(false)
    const handelSubmit=(e)=>{
        
        e.preventDefault()
        setMessage(true)
    }

    return (
        <div id='contact' style={{display:'flex',justifyContent:'space-around',height:"600px",backgroundImage:`url(${background})`,backgroundSize:'100% 100%'}}>
                    <div style={{width:'40%', height:'60%', marginTop:"40px", border:'solid 1px grey',boxShadow:' 3px 5px 5px black',display:'inline-block'}}>
                        <div>
                        <div style={{marginLeft:'20px', marginTop:'5px', display:'inline-block'}}>
                            <i aria-hidden="true" className="home big icon" ></i>
                            <h2 style={{display:'inline-block'}}>Rotterdam, The Netherlands </h2>
                        </div><br/>
                        <div style={{marginLeft:'20px', marginTop:'5px', display:'inline-block'}}><i aria-hidden="true" className="at big icon"></i>
                            <h2 style={{display:'inline-block'}}>emsham1@outlook.com</h2>
                        </div><br/>
                        <div style={{marginLeft:'20px', marginTop:'5px', display:'inline-block'}}><i aria-hidden="true" className=" mobile alternate big icon"></i>
                            <h2 style={{display:'inline-block'}}>+31 684394625</h2>
                        </div>
                        </div>
                        
                    </div>
                    <div style={{border:'1px solid grey', width:'40%',height:'60%', marginTop:"40px", display:'inline-block',boxShadow:' 3px 5px 5px black', padding:'10px'}}>
                        
    
                        <div>
                        <form className="ui form" onSubmit={handelSubmit} >
                            <div className="field">
                                <label> Name</label>
                                <input placeholder="Your Name"/>
                            </div>
                            <div className="field"><label>Message</label><textarea placeholder="Your message" rows="3"></textarea></div>
                            <button type="submit" className="ui button"   >Submit</button>
                            {message &&<b style={{color:'black',fontSize:'20px'}}>Thank you I will reply ASAP</b> }
                        </form>
                        </div>
                        
                        
                    </div>
                            <Link style={{height:'30px', width:'60px', float:'right', marginTop:'500px', height:'40px', width:'50px'}} to='header' smooth={true} duration={1000} >Go back</Link>

        </div>
    )
}

export default Footer
