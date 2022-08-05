let i = 0;

const routes = {
    savings: [
        [
            {url:`/savings/target/view_target/${i+1}/*`,name:"Cruise",amt:"100",amttype:"My Balance",nxtparam:"10",nxtvalue:"30 days",rate:"50"},
            {url:`/savings/target/view_target/${i+2}/*`,name:"Cruise",amt:"100",amttype:"My Balance",nxtparam:"10",nxtvalue:"30 days",rate:"50"},
            {url:`/savings/target/view_target/${i+3}/*`,name:"Cruise",amt:"100",amttype:"My Balance",nxtparam:"10",nxtvalue:"30 days",rate:"50"},
            {url:`/savings/target/view_target/${i+4}/*`,name:"Cruise",amt:"100",amttype:"My Balance",nxtparam:"10",nxtvalue:"30 days",rate:"50"},
            {url:`/savings/target/view_target/${i+5}/*`,name:"Cruise",amt:"100",amttype:"My Balance",nxtparam:"10",nxtvalue:"30 days",rate:"50"}
        ],
        [
            {url:`/savings/target/completed/view_target/${i+1}/*`,name:"Cruiseer",amt:"100",amttype:"My Balance",nxtparam:"10",nxtvalue:"30 days",rate:"50"},
            {url:`/savings/target/completed/view_target/${i+2}/*`,name:"Cruise",amt:"100",amttype:"My Balance",nxtparam:"10",nxtvalue:"30 days",rate:"50"},
            {url:`/savings/target/completed/view_target/${i+3}/*`,name:"Cruise",amt:"100",amttype:"My Balance",nxtparam:"10",nxtvalue:"30 days",rate:"50"},
            {url:`/savings/target/completed/view_target/${i+4}/*`,name:"Cruise",amt:"100",amttype:"My Balance",nxtparam:"10",nxtvalue:"30 days",rate:"50"},
            {url:`/savings/target/completed/view_target/${i+5}/*`,name:"Cruise",amt:"100",amttype:"My Balance",nxtparam:"10",nxtvalue:"30 days",rate:"50"}
        ],
        [
            {url:`/savings/target/explore/view_target/${i+1}/*`,name:"Cruiseer",amt:"100",amttype:"My Balance",nxtparam:"10",nxtvalue:"30 days",rate:"50"},
            {url:`/savings/target/explore/view_target/${i+2}/*`,name:"Cruise",amt:"100",amttype:"My Balance",nxtparam:"10",nxtvalue:"30 days",rate:"50"},
            {url:`/savings/target/explore/view_target/${i+3}/*`,name:"Cruise",amt:"100",amttype:"My Balance",nxtparam:"10",nxtvalue:"30 days",rate:"50"},
            {url:`/savings/target/explore/view_target/${i+4}/*`,name:"Cruise",amt:"100",amttype:"My Balance",nxtparam:"10",nxtvalue:"30 days",rate:"50"},
            {url:`/savings/target/explore/view_target/${i+5}/*`,name:"Cruise",amt:"100",amttype:"My Balance",nxtparam:"10",nxtvalue:"30 days",rate:"50"}
        ]
    ],
    invest: [
        [
            {url:`/investify/view_investment/${i+1}/*`,name:"Cruise",percent: "13%",returns: "returns in 6 months",amt:"100",amttype:"per unit",nxtparam:"10",nxtvalue:"investors",rate:"50"},
            {url:`/investify/view_investment/${i+2}/*`,name:"Cruise",percent: "13%",returns: "returns in 6 months",amt:"100",amttype:"per unit",nxtparam:"10",nxtvalue:"investors",rate:"50"},
            {url:`/investify/view_investment/${i+3}/*`,name:"Cruise",percent: "13%",returns: "returns in 6 months",amt:"100",amttype:"per unit",nxtparam:"10",nxtvalue:"investors",rate:"50"},
            {url:`/investify/view_investment/${i+4}/*`,name:"Cruise",percent: "13%",returns: "returns in 6 months",amt:"100",amttype:"per unit",nxtparam:"10",nxtvalue:"investors",rate:"50"},
            {url:`/investify/view_investment/${i+5}/*`,name:"Cruise",percent: "13%",returns: "returns in 6 months",amt:"100",amttype:"per unit",nxtparam:"10",nxtvalue:"investors",rate:"50"}
        ],
        [
            {url:`/investify/completed/view_investment/${i+1}/*`,name:"Cruiseer",percent: "13%",returns: "returns in 6 months",amt:"100",amttype:"per unit",nxtparam:"10",nxtvalue:"investors",rate:"50"},
            {url:`/investify/completed/view_investment/completed/${i+2}/*`,name:"Cruise",percent: "13%",returns: "returns in 6 months",amt:"100",amttype:"per unit",nxtparam:"10",nxtvalue:"investors",rate:"50"},
            {url:`/investify/completed/view_investment/completed/${i+3}/*`,name:"Cruise",percent: "13%",returns: "returns in 6 months",amt:"100",amttype:"per unit",nxtparam:"10",nxtvalue:"investors",rate:"50"},
            {url:`/investify/completed/view_investment/completed/${i+4}/*`,name:"Cruise",percent: "13%",returns: "returns in 6 months",amt:"100",amttype:"per unit",nxtparam:"10",nxtvalue:"investors",rate:"50"},
            {url:`/investify/completed/view_investment/completed/${i+5}/*`,name:"Cruise",percent: "13%",returns: "returns in 6 months",amt:"100",amttype:"per unit",nxtparam:"10",nxtvalue:"investors",rate:"50"}
        ],
        [
            {url:`/investify/explore/view_investment/${i+1}/*`,name:"Cruiseer",percent: "13%",returns: "returns in 6 months",amt:"100",amttype:"per unit",nxtparam:"10",nxtvalue:"investors",rate:"50"},
            {url:`/investify/explore/view_investment/${i+2}/*`,name:"Cruise",percent: "13%",returns: "returns in 6 months",amt:"100",amttype:"per unit",nxtparam:"10",nxtvalue:"investors",rate:"50"},
            {url:`/investify/explore/view_investment/${i+3}/*`,name:"Cruise",percent: "13%",returns: "returns in 6 months",amt:"100",amttype:"per unit",nxtparam:"10",nxtvalue:"investors",rate:"50"},
            {url:`/investify/explore/view_investment/${i+4}/*`,name:"Cruise",percent: "13%",returns: "returns in 6 months",amt:"100",amttype:"per unit",nxtparam:"10",nxtvalue:"investors",rate:"50"},
            {url:`/investify/explore/view_investment/${i+5}/*`,name:"Cruise",percent: "13%",returns: "returns in 6 months",amt:"100",amttype:"per unit",nxtparam:"10",nxtvalue:"investors",rate:"50"}
        ]
    ],
    safelock: [
        [
            {url:`/safelock/view_safelock/${i+1}/*`,name:"Cruise",percent: "13%",returns: "returns in 6 months",amt:"100",amttype:"per unit",nxtparam:"10",nxtvalue:"investors",rate:"50"},
            {url:`/safelock/view_safelock/${i+2}/*`,name:"Cruise",percent: "13%",returns: "returns in 6 months",amt:"100",amttype:"per unit",nxtparam:"10",nxtvalue:"investors",rate:"50"},
            {url:`/safelock/view_safelock/${i+3}/*`,name:"Cruise",percent: "13%",returns: "returns in 6 months",amt:"100",amttype:"per unit",nxtparam:"10",nxtvalue:"investors",rate:"50"},
            {url:`/safelock/view_safelock/${i+4}/*`,name:"Cruise",percent: "13%",returns: "returns in 6 months",amt:"100",amttype:"per unit",nxtparam:"10",nxtvalue:"investors",rate:"50"},
            {url:`/safelock/view_safelock/${i+5}/*`,name:"Cruise",percent: "13%",returns: "returns in 6 months",amt:"100",amttype:"per unit",nxtparam:"10",nxtvalue:"investors",rate:"50"}
        ],
        [
            {url:`/safelock/completed/view_safelock/${i+1}/*`,name:"Cruiseer",percent: "13%",returns: "returns in 6 months",amt:"100",amttype:"per unit",nxtparam:"10",nxtvalue:"investors",rate:"50"},
            {url:`/safelock/completed/view_safelock/${i+2}/*`,name:"Cruise",percent: "13%",returns: "returns in 6 months",amt:"100",amttype:"per unit",nxtparam:"10",nxtvalue:"investors",rate:"50"},
            {url:`/safelock/completed/view_safelock/${i+3}/*`,name:"Cruise",percent: "13%",returns: "returns in 6 months",amt:"100",amttype:"per unit",nxtparam:"10",nxtvalue:"investors",rate:"50"},
            {url:`/safelock/completed/view_safelock/${i+4}/*`,name:"Cruise",percent: "13%",returns: "returns in 6 months",amt:"100",amttype:"per unit",nxtparam:"10",nxtvalue:"investors",rate:"50"},
            {url:`/safelock/completed/view_safelock/${i+5}/*`,name:"Cruise",percent: "13%",returns: "returns in 6 months",amt:"100",amttype:"per unit",nxtparam:"10",nxtvalue:"investors",rate:"50"}
        ]
    ]
}

export default routes;