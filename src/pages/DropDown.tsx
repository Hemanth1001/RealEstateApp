import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './DropDown.css'
import  * as data from  "../component/menus.json";
const MenuItemString=JSON.stringify(data);
const MenuItems=JSON.parse(MenuItemString).menus;

type MenuItemValues={
    title:string,
    path:string,
    cName:string
}

function DropDown() {
    const [click,setClick]=useState(false)

    const handleClick=()=>setClick(!click)


  return (
    <>
    <ul onClick={handleClick} className={click ? 'dropdown-menu.clicked':'dropdown-menu'} > 
    {MenuItems.map((item:MenuItemValues,index:number ) =>{
        return(
            <li key={index} >
                <Link
                 className={item.cName}
                 to={item.path}
                 onClick={()=>setClick(false)}
                >
                    {item.title}
                </Link>
            </li>
        )
    })}
    </ul>
    </>
  )
}

export default DropDown