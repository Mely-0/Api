import React from 'react'
import image from "./img/imagen.jpg";
import './css/home.css'
export const Home = () => {
  return (
        <div className='cont-home'>
            <div className= 'container'>
        <div className="container_content">
        <div className="container_content_inner">
        <div className="title">
        <h1 className='hello'>Hello World</h1>
        </div>
        <div className="par">
        <p>
        Cupiditate alias odio omnis minima veritatis saepe porro, repellendus natus vitae, sequi exercitationem ipsam, qui possimus sit eveniet laborum sapiente quisquam quae neque velit? 
        </p>
        </div>
        <div className="btns">
        <button className='btns_more'> See more </button>
        </div>
        </div>
        </div>
        <div className="container_outer_img">
        <div className="img-inner">
            </div>
            </div>
        </div>
        <div className="overlay"></div>
        </div>
    )
    }
