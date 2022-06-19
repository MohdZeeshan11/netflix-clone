import React,{useState,useEffect} from 'react';
import './Nav.css';


function Nav() {
  const [handleShow,setHandleShow] = useState(false);
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      if(window.scrollY>100){
        setHandleShow(true);
      }
      else{
        setHandleShow(false);
      }
    });
    return ()=>{
      window.removeEventListener("scroll");
    };
  },[]);
  
  return (
    <div className={`nav ${handleShow && "nav_black"}`}>
      <img 
      className="nav_logo"
      src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" alt="netflix_logo"/>
      <img 
      className="nav_avatar"
      src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
      alt="logo"/>
      
    </div>
  )
}

export default Nav
