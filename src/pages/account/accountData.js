import img from "../../svgs/circle-plain.svg";

const Features = [
    {
        img: img, link: "/dashboard/account/rates", name: "Today's Rates",
        svg: 
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" 
        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
         strokeLinejoin="round" className="feather feather-percent"
          style={{color: "rgb(34, 34, 34)", marginRight: "5px"}}>
            <line x1="19" y1="5" x2="5" y2="19"></line>
            <circle cx="6.5" cy="6.5" r="2.5"></circle>
            <circle cx="17.5" cy="17.5" r="2.5"></circle>
        </svg>

    },
    {
        img: img, link: "/dashboard/account/account_settings", name: "Accounts Settings",
        svg: 
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{color: "black"}} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user mb-1 md:my-4 md:mr-2 text-lg w-6 h-6 md:w-6 md:h-6">
            <circle cx="12" cy="7" r="4" className="sc-htoDjs dXGcZC mb-1 md:my-4 md:mr-2 text-lg w-6 h-6 md:w-6 md:h-6"></circle>
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" className="sc-gzVnrw iLnVEa mb-1 md:my-4 md:mr-2 text-lg w-6 h-6 md:w-6 md:h-6"></path>
        </svg>, 
    },
    {
        img: img, link: "/dashboard/account/card", name: "Debit Card",
        svg: 
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"
         fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
          strokeLinejoin="round" className="feather feather-credit-card"
           style={{color: "rgb(34, 34, 34)", marginRight: "5px"}}>
            <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
            <line x1="1" y1="10" x2="23" y2="10"></line>
        </svg>
    },
    {
        img: img, link: "/dashboard/account/activities", name: "Activities",
        svg: 
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{color: "black"}} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user mb-1 md:my-4 md:mr-2 text-lg w-6 h-6 md:w-6 md:h-6">
            <circle cx="12" cy="7" r="4" className="sc-htoDjs dXGcZC mb-1 md:my-4 md:mr-2 text-lg w-6 h-6 md:w-6 md:h-6"></circle>
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" className="sc-gzVnrw iLnVEa mb-1 md:my-4 md:mr-2 text-lg w-6 h-6 md:w-6 md:h-6"></path>
        </svg>, 
    },
    {
        img: img, link: "/dashboard/account/story", name: "My Story",
        svg: 
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{color: "black"}} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user mb-1 md:my-4 md:mr-2 text-lg w-6 h-6 md:w-6 md:h-6">
            <circle cx="12" cy="7" r="4" className="sc-htoDjs dXGcZC mb-1 md:my-4 md:mr-2 text-lg w-6 h-6 md:w-6 md:h-6"></circle>
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" className="sc-gzVnrw iLnVEa mb-1 md:my-4 md:mr-2 text-lg w-6 h-6 md:w-6 md:h-6"></path>
        </svg>, 
    },
    {
        img: img, link: "/dashboard/account/contact", name: "Contact Us",
        svg:
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"
         fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" 
         strokeLinejoin="round" className="feather feather-phone" 
         style={{color: "rgb(34, 34, 34)", marginRight: "5px"}}>
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
    },
    {
        img: img, link: "/login", name: "Log Out",
        svg:
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" 
        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
         strokeLinejoin="round" className="feather feather-log-out" 
         style={{color: "red", marginRight: "5px"}}>
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
            <polyline points="16 17 21 12 16 7"></polyline>
            <line x1="21" y1="12" x2="9" y2="12"></line>
        </svg>
    }
]

export default Features;