import React, {useState} from 'react'


import  styles  from './carouselSecound.module.css'

//Carousel Images
import RestRoom from './image/Carousel/RestRoom.png'
import Kitchen from './image/Carousel/kitchen.png'
import Port from './image/Carousel/Port.png' 
import Enterance from './image/Carousel/Enterance.png' 
import planofthebuilding from './image/Carousel/planofthebuilding.png' 
import backdoorEnterance from './image/Carousel/backdoorEnterance.png' 
import Hall from './image/Carousel/Hall.png' 
import lan from './image/Carousel/lan.png'
import Windows from './image/Carousel/Windows.png' 


//CarouselArrowButton
import  {FcPrevious}   from "react-icons/fc";
import  {FcNext}   from "react-icons/fc";

const slides=[
    {
        imageUrl:RestRoom,
        title:"Rest Room",
        subtitel:"Rest room"
    },
    {
        imageUrl:Kitchen,
        title:"Kitchen",
        subtitel:"Kitchen"
    },
    {
        imageUrl:Port,
        title:"Port",
        subtitel:"Port"
    },
    {
        imageUrl:Enterance,
        title:"Enterance",
        subtitel:"Enterance"
    },
    {
        imageUrl:planofthebuilding,
        title:"planofthebuilding",
        subtitel:"Planofthebuilding"
    },
    {
        imageUrl:backdoorEnterance,
        title:"BackdoorEnterance",
        subtitel:"BackdoorEnterance"
    },
    {
        imageUrl:Hall,
        title:"Hall",
        subtitel:"Hall"
    },
    {
        imageUrl:lan,
        title:"LAN",
        subtitel:"LAN"
    },
    {
        imageUrl:Windows,
        title:"Windows",
        subtitel:"Windows"
    }


]


function CarouselSecound() {
    const [currentImage,setcurrentImage]=useState(0);
    return (
        <div className={styles.carousel} >
                <div className={styles.carouselContainer} >
                    <div className={styles.carouselInner} style={{backgroundImage: `url(${slides[currentImage].imageUrl})`}} >
                        <div className={styles.left } 
                            onClick={()=>{
                               currentImage>0 && setcurrentImage(currentImage-1);
                            }} >
                            <FcPrevious style={{fontSize:30}} />
                        </div>
                        <div className={styles.center}>
                            <h1 className={styles['header-el']}>{slides[currentImage].subtitel}</h1>
                            <p  className={styles['paragraph-el']}>{slides[currentImage].title}</p>
                        </div>
                        <div className={styles.right}
                            onClick={()=>{
                               currentImage<slides.length-1 &&  setcurrentImage(currentImage+1);
                            }}
                        >
                            <FcNext  style={{fontSize:30}} />
                        </div>
                    </div>
                </div>
        </div>
  )
}

export default CarouselSecound