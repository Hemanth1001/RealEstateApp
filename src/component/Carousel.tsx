import React ,{useState} from "react"

import RestRoom from './image/Carousel/RestRoom.png'
import Kitchen from './image/Carousel/Port.png'
import Port from './image/Carousel/Port.png'        



const slides=[
    {
        imageUrl:RestRoom,
        title:"Rest Room"
    },
    {
        imageUrl:Kitchen,
        title:"Kitchen"
    },
    {
        imageUrl:Port,
        title:"Port"
    }
]

const containerStyles={
    width:"500px",
    height:"250px",
    margin:"0 auto"
}

    

const ImageSlider:React.FC<{}> =()=>{
    const [currentIndex,setCurrentIndex]=useState(0);

    const slideStyles={
        width:"100%",
        height:"100%",
        borderRadius:"10px",
        backgroundPosition:"center",
        backgroundSize:"cover",
        backgroundImage:`url(${slides[currentIndex].imageUrl})`
    }

    const silderStyles={
        height:"100%",
    }

    const leftArrowStyles={
        top:"50%",
        transform:'translate(0,-50%)',
        left:"32px",
        fontSize:'45px',
        color:"#fff",
        zIndex:1,
        cursor:"pointer"
    }

    const rightArrowStyles={
        top:"50%",
        transform:'translate(0,-50%)',
        right:"32px",
        fontSize:'45px',
        color:"#fff",
        zIndex:1,
        cursor:"pointer"
    }


    return(
        // <div style={containerStyles} >
            <div >
                {/* <div style={silderStyles} > */}
                    {/* <div style={leftArrowStyles} >(</div> */}
                    {/* <div style={rightArrowStyles} >)</div> */}
                    <div style={slideStyles} ></div> 
                {/* </div> */}
            </div>
        // </div>
    )
}
export default ImageSlider