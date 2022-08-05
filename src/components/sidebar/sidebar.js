import React, { useState, useEffect } from 'react';
import logo from '../../svgs/safelock-logo.svg';
import logout from '../../svgs/logout.svg';
import { Link } from 'react-router-dom';
import "./sidebar.css";
import list from "./sidebarData";

const Sidebar = ( { sidebar, setSidebar }) => {

    const List = list;
    // const mobile = window.innerWidth <= 769;
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        return () => {
            window.addEventListener("resize", () => {
              if (window.innerWidth <= 769) setIsMobile(true);
              else setIsMobile(false);
            });
        };
    }, []);

    return (
        <>
        <div className={sidebar ? 'sidebar_container_full' : "sidebar_container"}>
            <div className='sidebar_wrapper'>
                <div className='sidebar_content'>
                    <div className="sidebar_header" style={{ justifyContent:(sidebar?"space-between":"center") }}>
                        {/* <img src={logo} onClick={() => setSidebar(!sidebar)} /> */}
                        <svg onClick={() => setSidebar(!sidebar)} stroke="currentColor" fill="white" 
                        style={{color: "white"}} strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" 
                        strokeLinejoin="round" className="text-white w-6 h-6 cursor-pointer" height="30px" 
                        width="30px" xmlns="http://www.w3.org/2000/svg">
                            <line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>

                        {sidebar &&
                            <div className="logo">
                                <img src={logo} />
                                <h3>safevest</h3>
                            </div>
                        }
                    </div>
                    <ul className="sidebar_lists">
                        {List.map((lists, idx) => (
                            <li className='sidebar_list' key={idx}>
                                <Link to={lists.url} className="sidebar_links" style={{textDecoration: 'none', justifyContent:(sidebar?"space-between":"center") }} >
                                    {lists.svg}
                                    {(sidebar||isMobile) && <div><span>{lists.name}</span></div>}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className={!isMobile ? "sidebar_base" : ""}>
                        <Link className="sidebar_links" to="/login" style={{textDecoration: 'none', justifyContent:(sidebar?"space-between":"center") }}>
                            <img src={logout} />
                            {(sidebar&&!isMobile) && <div><span>Logout</span></div>}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        {sidebar && <div className="sidebar_dummy" onClick={() => setSidebar(false)}></div>}
        </>
    )
}

export default Sidebar;