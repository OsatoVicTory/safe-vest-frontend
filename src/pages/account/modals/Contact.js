import React, { useState } from "react";
import img from "../../../svgs/circle-plain.svg";
import image from "../../../svgs/savings.jpeg";
import { useNavigate, Link } from "react-router-dom";
import Slider from "../../../components/perfectslider/Slider";
import Box from "../../../components/Box/Box";
import "./Index.css";
import contact from "../../../svgs/contact-us.png";

const Contact = () => {

    const [leave, setLeave] = useState(false);
    const navigate = useNavigate();
    const handleNavigate = () => {
        setLeave(true);
        setTimeout(() => {
            navigate(-1);
        }, 1000);
    }
//twitter svg
    //<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter" style="color: rgb(34, 34, 34); margin-right: 0.5rem;"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
    //insta
    //<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram" style="color: rgb(34, 34, 34); margin-right: 0.5rem;"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
    
    const Socials = [
        {
            link: "https://twitter.com/victor_osato?t=xnyAYPLRq7hWbRy6NDN02w&s=09",
            img: img, name: "Twitter Page",
            svg:
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"
             fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" 
             strokeLinejoin="round" className="feather feather-twitter" 
             style={{color: "rgb(34, 34, 34)", marginRight: "0.5rem"}}>
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
            </svg>
        },
        {
            link: "https://www.instagram.com/veektor09/",
            img: img, name: "Instagram Page",
            svg: 
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"
             fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
              strokeLinejoin="round" className="feather feather-instagram" 
              style={{color: "rgb(34, 34, 34)", marginRight: "0.5rem"}}>
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
        },
        {
            link: "https://github.com/OsatoVicTory",
            img: img, name: "Github Page",
            svg:
            <svg width="25px" height="25px" viewBox="0 0 1025 1025" xmlns="http://www.w3.org/2000/svg">
                <circle cx="512" cy="512" r="512" style={{fill:"#181717"}}/>
                <path d="M511.9 262.2c-141.5 0-256.1 114.7-256.1 256.1 0 113.2 73.4 209.2 175.1 243 12.8 2.4 17.5-5.5 17.5-12.3 0-6.1-.2-22.2-.3-43.5-71.2 15.5-86.3-34.4-86.3-34.4-11.7-29.6-28.5-37.5-28.5-37.5-23.2-15.9 1.8-15.6 1.8-15.6 25.7 1.8 39.2 26.4 39.2 26.4 22.8 39.2 60 27.9 74.6 21.3 2.3-16.6 8.9-27.9 16.2-34.3-56.9-6.4-116.7-28.4-116.7-126.6 0-28 9.9-50.8 26.4-68.7-2.9-6.5-11.5-32.5 2.2-67.8 0 0 21.5-6.9 70.4 26.3 20.5-5.7 42.3-8.5 64-8.6 21.8.1 43.5 2.9 64 8.6 48.7-33.1 70.1-26.3 70.1-26.3 13.8 35.3 5.1 61.3 2.6 67.8 16.3 17.9 26.3 40.8 26.3 68.7 0 98.4-59.9 120.1-116.9 126.4 9 7.7 17.3 23.4 17.3 47.4 0 34.3-.3 61.8-.3 70.1 0 6.7 4.5 14.7 17.6 12.2C694.7 727.4 768 631.4 768 518.3c0-141.4-114.7-256.1-256.1-256.1" 
                    style={{fill:"#fff"}}/>
            </svg>
        }
    ]


    return (
        <div className="modal" style={{ zIndex: "1000" }}>
            <div className="popup_dummy" onClick={handleNavigate}></div>
            <div className="popup_main">
                <Slider zIndex={1000} leave={leave}>
                    <div className="popup_top">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" 
                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" 
                        strokeLinejoin="round" className="x" style={{color: "black"}} onClick={handleNavigate}>
                            <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </div>
                    
                    <div className="popup_body">
                        <img src={contact} />
                        <Box>
                            <div className="img_div">
                                <svg className="mb-1 md:my-4 md:mr-2 text-lg w-6 h-6 md:w-6 md:h-6" style={{color: "grey"}} width="24" height="24" viewBox="0 0 24 24" fill="grey" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 22H5C4.73478 22 4.48043 21.8946 4.29289 21.7071C4.10536 21.5196 4 21.2652 4 21V11L12 3L20 11V21C20 21.2652 19.8946 21.5196 19.7071 21.7071C19.5196 21.8946 19.2652 22 19 22H15C14.7348 22 14.4804 21.8946 14.2929 21.7071C14.1054 21.5196 14 21.2652 14 21V17C14 16.7348 13.8946 16.4804 13.7071 16.2929C13.5196 16.1054 13.2652 16 13 16H11C10.7348 16 10.4804 16.1054 10.2929 16.2929C10.1054 16.4804 10 16.7348 10 17V21C10 21.2652 9.89464 21.5196 9.70711 21.7071C9.51957 21.8946 9.26522 22 9 22ZM12 13C12.5304 13 13.0391 12.7893 13.4142 12.4142C13.7893 12.0391 14 11.5304 14 11C14 10.4696 13.7893 9.96086 13.4142 9.58579C13.0391 9.21071 12.5304 9 12 9C11.4696 9 10.9609 9.21071 10.5858 9.58579C10.2107 9.96086 10 10.4696 10 11C10 11.5304 10.2107 12.0391 10.5858 12.4142C10.9609 12.7893 11.4696 13 12 13Z" className="sc-dnqmqq cekKZp mb-1 md:my-4 md:mr-2 text-lg w-6 h-6 md:w-6 md:h-6"></path>
                                    <path d="M12.0101 4.42L3.71007 12.72C3.61749 12.8132 3.50745 12.8873 3.38624 12.938C3.26502 12.9888 3.135 13.0151 3.00361 13.0156C2.87221 13.016 2.74202 12.9906 2.62044 12.9407C2.49887 12.8909 2.38831 12.8176 2.29507 12.725C2.20184 12.6324 2.12775 12.5224 2.07703 12.4012C2.02632 12.2799 1.99998 12.1499 1.99952 12.0185C1.99905 11.8871 2.02447 11.7569 2.07433 11.6354C2.12418 11.5138 2.19749 11.4032 2.29007 11.31L11.3101 2.29C11.4974 2.10375 11.7509 1.99921 12.0151 1.99921C12.2793 1.99921 12.5327 2.10375 12.7201 2.29L21.7101 11.31C21.8971 11.4983 22.0016 11.7532 22.0006 12.0185C21.9997 12.2839 21.8934 12.538 21.7051 12.725C21.5168 12.912 21.2619 13.0165 20.9965 13.0156C20.7312 13.0146 20.4771 12.9083 20.2901 12.72L12.0101 4.42Z" className="sc-dnqmqq cekKZp mb-1 md:my-4 md:mr-2 text-lg w-6 h-6 md:w-6 md:h-6"></path>
                                </svg>
                            </div>
                            <div className="box_txts">
                                <span className="med_txt">Come say hello</span>
                                <span className="small_light">Office: My Room in my house</span>
                            </div>
                        </Box>
                        <div className="display">
                            <span>Phone Number</span>
                            <div>09065352839</div>
                        </div>
                        <div className="display">
                            <span>Email Address</span>
                            <div>osatohanmenogbeide1@gmail.com</div>
                        </div>
                        <div className="socials">
                            {Socials.map((val,idx) => (
                                <Box key={idx}>
                                    <a className="box_link" href={val.link} style={{textDecoration: "none"}}>
                                        {/* <img src={val.img} /> */}
                                        {val.svg}
                                        <span className="thick_med">{val.name}</span>
                                    </a>
                                </Box>
                            ))}
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default Contact;