let i = 0;
const Data = [
    {
        name: "Cruise",
        type: "savings", //savings or investment or safelock, this is for filter purpose
        category: "explore",
        url:`/savings/target/explore/view_target/1/*`,
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
        start_date: "07th Jul 2022",
        end_date: "31st Jul 2022",
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
        type: "savings", //savings or investment or safelock, this is for filter purpose
        category: "explore",
        url:`/savings/target/explore/view_target/2/*`,
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
        start_date: "07th Jul 2022",
        end_date: "31st Jul 2022",
        members: "1", // by default or > 1 for groups,
        rate: "20",
        lock: true, // or false, //false by default
        break: true, // or false, //false by default
        Category: "Rent", //rent,education,expenses,travel etc..
        savings_preference: "Daily",
        friends: null
    }
]
export default Data;