

import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { Link  } from 'react-scroll';
import  background from '../rotterdam.jpg';
import { init } from 'ityped';
import {useEffect , useRef} from 'react';


export default function Header() {
    const textRef = useRef();
    useEffect(() => {
        init(textRef.current,{ 
            showCursor: false,
            backSpeed:  60,
            strings: [' Web Developer','Welcome to my portfolio' ] })
    }, [])
    return (
        <div id='header' style={{height:'700px',  backgroundImage:`url(${background})`,backgroundSize:'100% 100%'}} >
            
                <div>
                    <div style={{display:'flex', font:' 20px Arial sans-serif',padding:'20px'}} >
                        <div style={{marginRight:'20px',height:'60px',width:'90px'}}><Link style={{color:'white'}} to = 'about-me' smooth={true} duration={1000} >About Me </Link></div>
                        <div style={{marginRight:'20px'}}  ><Link style={{color:'white'}} to = 'education' smooth={true} duration={1000} >Education & Experience</Link></div>
                        <div style={{marginRight:'20px'}}><Link style={{color:'white'}} to = 'projects' smooth={true} duration={1000} >Projects</Link></div>
                        <div style={{marginRight:'20px'}}><Link style={{color:'white'}} to = 'contact' smooth={true} duration={1000} >Contact</Link></div>
                        
                        
                        
                        
                    </div> 
                    <div  style={{textAlign:'center' ,font:'50px Arial sans-serif', color:'white',marginTop:'200px' }}>
                        Afraa Saiadi<br/><span ref={textRef}><br/></span><br/>
                        <a  target='_blank' href ='Afraa Saiadi CV NL.pdf' download>Download cv</a>
                    </div>
                    <div style={{marginTop:'30px' , textAlign:'center'}}>
                        <SocialIcon url="https://github.com/Afraa-Saiadi" />
                        <SocialIcon url='https://www.linkedin.com/feed/'/>
                    </div>


                </div>

            
        </div>
    )
}

