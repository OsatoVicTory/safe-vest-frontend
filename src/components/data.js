let i = 0;

const Data = [
    {
        name: "Cruise",
        type: "account", //savings or investment or safelock, is is for filter purpose
        category: "ongoing",
        url: `/dashboard/savings/target/view_target/${i+1}/*`,
        id: i+1,
        userId: "Xe23Is4", //id of user
        frequency: "N50",
    },
    {
        name: "Cruise",
        type: "savings", //savings or investment or safelock, is is for filter purpose
        category: "ongoing",
        url: `/dashboard/savings/target/view_target/${i+1}/*`,
        id: i+1,
        userId: "Xe23Is4", //id of user
        frequency: "N50",
        amt: "N50.00",  //amount currently saved
        amttype: "My Balance", //for perfectscroll
        target: "N50.00", //amount planning to reach
        interest: "9%",
        days_left: "32",
        nxtparam: "Days Left", //for perfectscroll, smae as days_left
        nxtvalue: "32", //for perfectscroll, same as days_left
        start_date: "07 Jul 2022",
        end_date: "31 Jul 2022",
        members: "1", // by default or > 1 for groups,
        rate: "20",
        lock: true, // or false, //false by default
        break: true, // or false, //false by default
        Category: "Rent", //rent,education,expenses,travel etc..
        savings_preference: "Daily",
        friends: null
    },
    {
        name: "Cruise",
        type: "savings", //savings or investment or safelock, is is for filter purpose
        category: "ongoing",
        url: `/dashboard/savings/target/view_target/${i+2}/*`,
        id: i+2,
        userId: "Xe23Is4", //id of user
        frequency: "N50",
        amt: "N50.00",  //amount currently saved
        amttype: "My Balance", //for perfectscroll
        target: "N50.00", //amount planning to reach
        interest: "9%",
        days_left: "32",
        nxtparam: "Days Left", //for perfectscroll, smae as days_left
        nxtvalue: "32", //for perfectscroll, same as days_left
        start_date: "07 Jul 2022",
        end_date: "31 Jul 2022",
        members: "1", // by default or > 1 for groups,
        rate: "20",
        lock: true, // or false, //false by default
        break: true, // or false, //false by default
        Category: "Rent", //rent,education,expenses,travel etc..
        savings_preference: "Daily",
        friends: null
    },
    {
        name: "Cruiseer",
        type: "savings", //savings or investment or safelock, is is for filter purpose
        category: "completed",
        userId: "Xe23Is4", //id of user
        id: i+1,
        frequency: "N50",
        url: `/dashboard/savings/target/completed/view_target/${i+1}/*`,
        amt: "N50.00",  //amount currently saved
        amttype: "My Balance", //for perfectscroll
        target: "N50.00", //amount planning to reach
        interest: "9%",
        days_left: "32",
        nxtparam: "Days Left", //for perfectscroll, smae as days_left
        nxtvalue: "32", //for perfectscroll, same as days_left
        start_date: "07 Jul 2022",
        end_date: "31 Jul 2022",
        members: "1", // by default or > 1 for groups,
        rate: "20",
        lock: true, // or false, //false by default
        break: true, // or false, //false by default
        Category: "Rent", //rent,education,expenses,travel etc..
        savings_preference: "Daily",
        friends: null
    },
    {
        name: "Cruise",
        type: "savings", //savings or investment or safelock, is is for filter purpose
        category: "completed",
        url: `/dashboard/savings/target/completed/view_target/${i+2}/*`,
        userId: "Xe23Is4", //id of user
        id: i+2,
        frequency: "N50",
        amt: "N50.00",  //amount currently saved
        amttype: "My Balance", //for perfectscroll
        target: "N50.00", //amount planning to reach
        interest: "9%",
        days_left: "32",
        nxtparam: "Days Left", //for perfectscroll, smae as days_left
        nxtvalue: "32", //for perfectscroll, same as days_left
        start_date: "07 Jul 2022",
        end_date: "31 Jul 2022",
        members: "1", // by default or > 1 for groups,
        rate: "20",
        lock: true, // or false, //false by default
        break: true, // or false, //false by default
        Category: "Rent", //rent,education,expenses,travel etc..
        savings_preference: "Daily",
        friends: null
    },
    {
        name: "Cruise",
        type: "savings", //savings or investment or safelock, is is for filter purpose
        category: "explore",
        url: `/dashboard/savings/target/explore/view_target/${i+1}/*`,
        id: i+1,
        userId: "Xe23Is4", //id of user
        frequency: "N50",
        amt: "N50.00",  //amount currently saved
        amttype: "My Balance", //for perfectscroll
        target: "N50.00", //amount planning to reach
        interest: "9%",
        days_left: "32",
        nxtparam: "Days Left", //for perfectscroll, smae as days_left
        nxtvalue: "32", //for perfectscroll, same as days_left
        start_date: "07 Jul 2022",
        end_date: "31 Jul 2022",
        members: "1", // by default or > 1 for groups,
        rate: "20",
        lock: true, // or false, //false by default
        break: true, // or false, //false by default
        Category: "Rent", //rent,education,expenses,travel etc..
        savings_preference: "Daily",
        friends: null
    },
    {
        company: "Recyclan Global",
        name: "Credit Financing: Recyclan Global",
        location: "Nigeria and e UK",
        userId: "Xe23Is4", //id of user
        url: `/dashboard/investify/view_investment/${i+1}/*`,
        id: i+1,
        cycle: "6 Mons",
        type: "investment",
        category: "ongoing",
        amt: "5000",
        completed: false, //false by default
        expected_returns: "13% in 6 mons",
        percent: "13%", //for perfectscroll
        returns: "in 6 mons",
        investment_type: "Fixed income",
        nxtparam: "Investors", 
        nxtvalue: "10", //for perfectscroll, number of investors
        closing_date: "24 June 2022",
        maturity_date: "24 June 2022",
        payout_type: "Capital + Profit is paid at maturity date",
        unit_type: "units can be sold to oers anytime",
        insurance_partner: "Leadway Assurance",
    },
    {
        company: "Recyclan Global",
        name: "Credit Financing: Recyclan Global",
        location: "Nigeria and e UK",
        userId: "Xe23Is4", //id of user
        url: `/dashboard/investify/view_investment/${i+2}/*`,
        id: i+2,
        cycle: "6 Mons",
        type: "investment",
        category: "ongoing",
        amt: "5000",
        completed: false, //false by default
        expected_returns: "13% in 6 mons",
        percent: "13%", //for perfectscroll
        returns: "in 6 mons",
        investment_type: "Fixed income",
        nxtparam: "Investors", 
        nxtvalue: "10", //for perfectscroll, number of investors
        closing_date: "24 June 2022",
        maturity_date: "24 June 2022",
        payout_type: "Capital + Profit is paid at maturity date",
        unit_type: "units can be sold to oers anytime",
        insurance_partner: "Leadway Assurance",
    },
    {
        company: "Recyclan Global",
        name: "Credit Financing: Recyclan Global",
        location: "Nigeria and e UK",
        userId: "Xe23Is4", //id of user
        url: `/dashboard/investify/completed/view_investment/${i+1}/*`,
        id: i+1,
        cycle: "6 Mons",
        type: "investment",
        category: "completed",
        amt: "5000",
        completed: false, //false by default
        expected_returns: "13% in 6 mons",
        percent: "13%", //for perfectscroll
        returns: "in 6 mons",
        investment_type: "Fixed income",
        nxtparam: "Investors", 
        nxtvalue: "10", //for perfectscroll, number of investors
        closing_date: "24 June 2022",
        maturity_date: "24 June 2022",
        payout_type: "Capital + Profit is paid at maturity date",
        unit_type: "units can be sold to oers anytime",
        insurance_partner: "Leadway Assurance",
    },
    {
        company: "Recyclan Global",
        name: "Credit Financing: Recyclan Global",
        location: "Nigeria and e UK",
        userId: "Xe23Is4", //id of user
        url: `/dashboard/investify/completed/view_investment/${i+2}/*`,
        id: i+2,
        cycle: "6 Mons",
        type: "investment",
        category: "completed",
        amt: "5000",
        completed: false, //false by default
        expected_returns: "13% in 6 mons",
        percent: "13%", //for perfectscroll
        returns: "in 6 mons",
        investment_type: "Fixed income",
        nxtparam: "Investors", 
        nxtvalue: "10", //for perfectscroll, number of investors
        closing_date: "24 June 2022",
        maturity_date: "24 June 2022",
        payout_type: "Capital + Profit is paid at maturity date",
        unit_type: "units can be sold to oers anytime",
        insurance_partner: "Leadway Assurance",
    },
    {
        company: "Recyclan Global",
        name: "Credit Financing: Recyclan Global",
        location: "Nigeria and e UK",
        userId: "Xe23Is4", //id of user
        url: `/dashboard/investify/explore/view_investment/${i+1}/*`,
        id: i+1,
        cycle: "6 Mons",
        type: "investment",
        category: "explore",
        amt: "5000",
        completed: false, //false by default
        expected_returns: "13% in 6 mons",
        percent: "13%", //for perfectscroll
        returns: "in 6 mons",
        investment_type: "Fixed income",
        nxtparam: "Investors", 
        nxtvalue: "10", //for perfectscroll, number of investors
        closing_date: "24 June 2022",
        maturity_date: "24 June 2022",
        payout_type: "Capital + Profit is paid at maturity date",
        unit_type: "units can be sold to oers anytime",
        insurance_partner: "Leadway Assurance",
    },
    {
        company: "Recyclan Global",
        name: "Credit Financing: Recyclan Global",
        location: "Nigeria and e UK",
        userId: "Xe23Is4", //id of user
        url: `/dashboard/investify/explore/view_investment/${i+2}/*`,
        id: i+2,
        cycle: "6 Mons",
        type: "investment",
        category: "explore",
        amt: "5000",
        completed: false, //false by default
        expected_returns: "13% in 6 mons",
        percent: "13%", //for perfectscroll
        returns: "in 6 mons",
        investment_type: "Fixed income",
        nxtparam: "Investors", 
        nxtvalue: "10", //for perfectscroll, number of investors
        closing_date: "24 June 2022",
        maturity_date: "24 June 2022",
        payout_type: "Capital + Profit is paid at maturity date",
        unit_type: "units can be sold to oers anytime",
        insurance_partner: "Leadway Assurance",
    },
    {
        name: "Cruise",
        userId: "Xe23Is4", //id of user
        url: `/savings/safelock/view_safelock/${i+1}/*`,
        id: i+1,
        type: "safelock",
        category: "ongoing",
        amt: "N2000",
        target: "N2000",
        interest: "10% p.a",
        days_left: "20",
        amttype: "My Balance",  // for perfectscroll
        nxtparam: "Days Left",  // for perfectscroll
        nxtvalue: "20", // for perfectscroll same as days_left
        rate: "50",
        start_date: "10 Apr 2022",
        end_date: "10 Apr 2022"
    },
    {
        name: "Cruiseer",
        userId: "Xe23Is4", //id of user
        url: `/savings/safelock/view_safelock/${i+2}/*`,
        id: i+2,
        type: "safelock",
        category: "ongoing",
        amt: "N2000",
        target: "N2000",
        interest: "10% p.a",
        days_left: "20",
        amttype: "My Balance",  // for perfectscroll
        nxtparam: "Days Left",  // for perfectscroll
        nxtvalue: "20", // for perfectscroll same as days_left
        rate: "50",
        start_date: "10 Apr 2022",
        end_date: "10 Apr 2022"
    },
    {
        name: "Cruiseer",
        userId: "Xe23Is4", //id of user
        url: `/savings/safelock/completed/view_safelock/${i+1}/*`,
        id: i+1,
        type: "safelock",
        category: "completed",
        amt: "N2000",
        target: "N2000",
        interest: "10% p.a",
        days_left: "20",
        amttype: "My Balance",  // for perfectscroll
        nxtparam: "Days Left",  // for perfectscroll
        nxtvalue: "20", // for perfectscroll same as days_left
        rate: "50",
        start_date: "10 Apr 2022",
        end_date: "10 Apr 2022"
    },
]

export default Data;