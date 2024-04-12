import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { FiGrid } from "react-icons/fi";
import { MdOutlineMenu } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import './Navbar.css'
export const Navbar1 = () => {
  return (
     <>
        <div className='nav1OuterContainer'>
            <div className='nav1InnerContainer'>
                <div className='nav1recent'>
                    <p>Recent</p>
                </div>
                <div className='nav1buttons'>
                    <NavLink to={"/draft"}>
                    <button style={{backgroundColor : "#0D99FF"}}>
                        <p>Drafts</p>
                        <IoIosArrowDown className='iconsSize'/>
                    </button>
                    </NavLink>
                   
                  
                    <button style={{backgroundColor : "#9747FF"}}>
                        <p>Figjamboard</p>
                        <IoIosArrowDown className='iconsSize'/>
                    </button>

                    <button style={{border : "2px solid black"}}>
                        <p>Import</p>
                    </button>
                </div>
            </div>
        </div>
     </>
  )
}

//navbar 2

export const Navbar2   = () => {
    return (
       <>
          <div className='nav2OuterContainer'>
              <div className='nav2InnerContainer'>
                  
                  <div className='nav2leftMenu'>
                    <div className='nav2recent' style={{backgroundColor : "rgb(240, 238, 235)" , padding : "10px" , borderRadius  :"5px"}}>
                        <p>Recently viewed</p>
                    </div>
                    <div className='nav2recent'>
                        <p>Shared files</p>
                    </div>
                    <div className='nav2recent'>
                        <p>Share projects</p>
                    </div>
                 
                  </div>

                  <div className='nav2buttons'>
                      <button >
                          <p>All Organizations</p>
                          <IoIosArrowDown className='iconsSize'/>
                      </button>
                      <button >
                          <p>All files</p>
                          <IoIosArrowDown className='iconsSize'/>
                      </button>
                      <button >
                          <p>Last Viewed</p>
                          <IoIosArrowDown className='iconsSize'/>
                      </button>
                      <button >
                        
                          <FiGrid />
                      </button>
                      <button >
                        
                          <MdOutlineMenu  />
                      </button>
                  </div>
              </div>
          </div>
       </>
    )
  }
  
