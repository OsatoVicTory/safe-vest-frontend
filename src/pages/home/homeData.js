
const Data = [
    {
        title: "Total Savings", amt: "₦0.00",
        link: "/dashboard/savings/target/*", bg: "blue",
        svg: 
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"
         fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
          strokeLinejoin="round" className="feather feather-shield" 
          style={{color: "rgb(255, 255, 255)", marginRight: "1rem"}}>
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>  
    },
    {
        title: "Total Investments", amt: "₦0.00",
        link: "/dashboard/investify/*", bg: "purple",
        svg:
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"
         fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
          strokeLinejoin="round" className="feather feather-trending-up"
           style={{color: "rgb(255, 255, 255)", marginRight: "1rem"}}>
            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline>
        </svg>
    
    },
    {
        title: "Flex Naira", amt: "₦0.00",
        link: "/dashboard/savings/flexnaira/*", bg: "black",
        svg: 
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"
         fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          className="film" style={{color: "white", paddingRight: "15px"}}>
            <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
            <line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line>
            <line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line>
            <line x1="2" y1="17" x2="7" y2="17"></line>
            <line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line>
        </svg>
    }
]

export default Data;