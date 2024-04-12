import React from 'react'
import './MainSereen.css'
import { IoIosArrowDown , IoMdNotificationsOutline ,IoIosSearch , IoMdArrowDropright } from "react-icons/io";
import { FaRegFile } from "react-icons/fa";
import { CgFigma } from "react-icons/cg";
import { CiClock2 } from "react-icons/ci";
import { TfiWorld } from "react-icons/tfi";
import { Navbar1, Navbar2 } from '../Navbar/Navbar';
export const MainScreen = () => {
  return (
    <>
        <main>
        {/* leftSideBar */}
        <div className='MainCotainer'>
            <div className='MainScreenLeftContainer'>
                <aside>
                     {/* div1 */}
                    <div className='outerDivContainerAside'>
                        <div className='innerDivContainerAside'>
                            <div className='userProfile'>
                                <span className='profileIcon'>P</span>
                                <span>Priyanka Shaw</span>
                                <span className='dropownIconUP'><IoIosArrowDown /></span>
                            </div>
                            <div className='notification'>
                                <span className='notificationUser'><IoMdNotificationsOutline /></span>
                            </div>
                        </div>
                    </div>
                     {/* div2 */}
                    <div className='outerDivContainerAside'>
                        <div className='searchBar innerDivContainerAside' style={{backgroundColor : "#F5F5F5"}}>
                            <div className='searchIconInput'>
                                <span className='searchIcon'><IoIosSearch /></span>
                                <span><input type='text' placeholder='search for anything' className='asideInputBox' style={{backgroundColor : "#F5F5F5"}}/></span>
                            </div>
                        </div>
                    </div>
                     {/* div3 */}
                    <div  className='outerDivContainerAside' style={{backgroundColor : "#E5F4FF"}}>
                        <div className='innerDivContainerAside' >
                            <div className='recent'>
                                <span className='recentIcon'><CiClock2 /></span>
                                <span>Recents</span>
                                
                            </div>
                        </div>
                    </div>
                     {/* div4 */}
                    <div  className='outerDivContainerAside' style={{border : "2px solid gray"}}>
                        <div className='innerDivContainerAside' style={{flexDirection : "column"}} >
                            <div className='innerDivContainerAside' style={{ marginBottom : "5px" , justifyContent : "flex-start"}}>
                                <span className='recentIcon'><CgFigma /></span>
                                <span><h4>Your Teams</h4></span>
                            </div>
                            <div className='innerDivContainerAside draft'  style={{ marginBottom : "5px" , justifyContent : "flex-start"}}>
                                <span className='recentIcon'><FaRegFile /></span>
                                <span>Drafts</span>
                            </div>
                        </div>
                    </div>
                     {/* div5 */}
                    <div   className='outerDivContainerAside'>
                        <div className='innerDivContainerAside' style={{flexDirection : "column"}} >
                            <div className='innerDivContainerAside' style={{ marginBottom : "5px" , justifyContent : "flex-start"}}>
                                <span className='recentIcon'><CgFigma /></span>
                                <span><h4>Your Teams</h4></span>
                            </div>
                        </div>
                    </div>
                     {/* div6 */}
                    <div  className='outerDivContainerAside'>
                        <div className='innerDivContainerAside' style={{flexDirection : "column"}} >
                            <div className='innerDivContainerAside' style={{ marginBottom : "5px" , justifyContent : "flex-start"}}>
                                <span className='recentIcon'><IoMdArrowDropright  /></span>
                                <span>Favouriy files</span>
                            </div>
                        </div>
                    </div>
                     {/* div7 */}
                    <div  className='outerDivContainerAside'>
                        <div className='innerDivContainerAside' style={{flexDirection : "column"}} >
                            <div className='innerDivContainerAside' style={{ marginBottom : "5px" , justifyContent : "flex-start"}}>
                                <span className='recentIcon'><IoMdArrowDropright  /></span>
                                <span>Teams</span>
                            </div>
                        </div>
                    </div>
                    {/* div8 */}
                    <div  className='outerDivContainerAside' style={{position:"relative", top:"14.5rem"}}>
                        <div className='innerDivContainerAside'  >
                            <div className='innerDivContainerAside' style={{ justifyContent : "flex-start"}}>
                                <span className='recentIcon'><TfiWorld /></span>
                                <span>Explore community</span>
                            </div>
                        </div>
                    </div>

                </aside>
            </div>
            <div className='MainScreenRightContainer'>
                <div className='rightContainer'>
                    <Navbar1 />
                    <Navbar2 />
                </div>
            </div>
        </div>       
    </main>
     {/* RightSideBr */}

    
    </>
   

    
  )
}
