import React from "react";
import styles from './navbar.module.css';
import  * as data from  "./links.json";
const linkString=JSON.stringify(data);
const links=JSON.parse(linkString).links;

type Link={
    label:string;
    href:string
}

const Links:React.FC<{links:Link[]}>=()=>{
    return(
        <div className={styles['link-container']} >
                {links.map((link: Link)=>{
                    return(
                        <div key={link.href} className={styles['link']}>
                            <a href={link.href} className={styles['link-el']} >
                                {link.label}
                            </a>
                        </div>
                    )
                })}
            </div>
    )
}

const Navbar:React.FC<{}> =()=>{
    return(
        <div className={styles.navbar}  >
            <Links links={links} />
        </div>
    )
}

export default Navbar