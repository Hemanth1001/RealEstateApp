import React  from "react";

import styles from './search.module.css';

import ADZMONSTERS2 from './image/ADZMONSTERS2.png';

import user from './image/user.png';
import cart from './image/cart.png';
import heart from './image/heart.png';
import message from './image/message.png';

import  IconName, { FcAcceptDatabase }  from "react-icons/fc";


const imagesList=[
    {    

        imageUrl:user,
        alt:"user"
    },
    {
        imageUrl:cart,
        alt:"cart"
    },
    {
        imageUrl:heart,
        alt:"heart"
    },
    {
        imageUrl:message,
        alt:"message"
    }
]


const SearchBox:React.FC<{}> =()=>{
    return(
        <div className={styles['search-container']} >
            <img src= {ADZMONSTERS2}  className={styles['adz-logo']} alt="adzlogo" />
            <div className={styles['searchbox-container']} >
                <input className={styles['searchInput']} type="search"  placeholder="Search for product,Brand,service" />
            </div>
            <div >   
                <ul>
                    {imagesList.map((eachImage)=>(
                        <img src={eachImage.imageUrl} className={styles['images-el']} alt={eachImage.alt} />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default SearchBox