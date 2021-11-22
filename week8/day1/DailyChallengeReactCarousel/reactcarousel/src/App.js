import React from 'react';
import './App.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from './imgaes/pic1.jpg'
import img2 from './imgaes/pic2.jpg'
import img3 from './imgaes/pic3.jpg'
import img4 from './imgaes/pic4.jpg'


function App() {
  return (
    <>
     <Carousel className="main">
                <div>
                    <img src={'https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg'}  />
                    <p className="legend">Hong Kong</p>
                </div>
                <div>
                    <img src={'https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/c1cklkyp6ms02tougufx.webp'}   />
                    <p className="legend">Macao</p>
                </div>
                <div>
                    <img src={'https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/e8fnw35p6zgusq218foj.webp'} />
                    <p className="legend">japan</p>
                </div>
                <div>
                    <img src={'https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/liw377az16sxmp9a6ylg.webp'}   />
                    <p className="legend">las vegas</p>
                </div>
            </Carousel>
    </>
  );
}

export default App;
