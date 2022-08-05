import imag from "../../svgs/circle.svg";
import eye from "../../svgs/circle.svg";

let Arr = [
    {
        link: "/dashboard/savings/piggybank/*", 
        navimg: eye, img :imag,
        svg: 
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shield" style={{color: "rgb(13, 96, 216)"}}>
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>,
        title:"Piggybank", name: "Piggybank",
        desc: "Strict savings automatically",
        amt: "N0.00",
        color: "rgb(13,96,216)",
        border: "5px solid rgb(13,96,216)",
        bg: "rgb(204,240,254)"
    },
    {
        link: "/dashboard/savings/flexnaira/*",
        navimg: eye, img :imag,
        svg: 
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
         fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          className="film" style={{color: "rgb(231, 67, 156)"}}>
            <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
            <line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line>
            <line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line>
            <line x1="2" y1="17" x2="7" y2="17"></line>
            <line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line>
        </svg>,
        title:"Flex Naira", name: "Flex Naira",
        desc: "Flexible savings for emergencies, Free transfers, withdrawal etc. 10% more or less p.a",
        amt: "N0.00",
        color: "rgb(231, 67, 156)",
        border: "5px solid rgb(231,67,156)",
        bg: "rgb(255,234,245)"
    },
    {
        link: "/dashboard/savings/safelock/*",
        navimg: eye, img :imag,
        svg: 
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
        className="lock" style={{color: "rgb(34, 149, 242)"}}>
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        </svg>,
        title:"Safelock", name: "Safelock",
        desc: "Lock funds to avoid temptations. Upfrnt interest up to 10% more or less p.a",
        amt: "N0.00",
        color: "rgb(34,149,242)",
        border: "5px solid rgb(34,149,242)",
        bg: "rgb(231,246,255)"
    },
    {
        link: "/dashboard/savings/target/*", 
        navimg: eye, img :imag,
        svg: 
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="target" 
        style={{color: "rgb(39, 174, 96)"}}>
            <circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle>
        </svg>,
        title:"Targets", name: "Targets",
        desc: "Reach your unique individual saving goal. 10% more or less p.a",
        amt: "N0.00",
        color: "rgb(39,174,96)",
        border: "5px solid rgb(39,174,96)",
        bg: "rgb(220,255,235)"
    }
]

export default Arr;