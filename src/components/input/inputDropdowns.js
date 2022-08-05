const mnths = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const days = ["31","29","31","30","31","30","31","31","30","31","30","31"];
const date = new Date();
let yr = date.getFullYear();
let mnth = date.getMonth();
let day = date.getDay();
let endDay, endMnth, endYr;

const genStartDates = () => {
    let arr = [];
    arr.push({
        label: `${mnths[mnth]} ${day} ${yr}`,
        value: `${mnths[mnth]} ${day} ${yr}`
    })
    //next 100 days date
    for(var i=1;i<=100;i++) {
        if(day+1 > days[mnth]) {
            day = 1;
            mnth = (mnth+1)%12;
            yr = mnth == 0 ? yr+1 : yr;
        } else {
            day++;
        }
        arr.push({
            label: `${mnths[mnth]} ${day} ${yr}`,
            value: `${mnths[mnth]} ${day} ${yr}`
        })

        if(i == 30) {
            endDay = day;
            endMnth = mnth;
            endYr = yr;
        }
    }
    
    return arr;
}

const genEndDates = () => {
    let arr = [];
    //next 300 days after 31 days from now
    for(var i=1;i<=300;i++) {
        if(endDay+1 > days[endMnth]) {
            endDay = 1;
            endMnth = (endMnth+1)%12;
            endYr = endMnth == 0 ? endYr+1 : endYr;
        } else {
            endDay++;
        }
        arr.push({
            label: `${mnths[endMnth]} ${endDay} ${endYr}`,
            value: `${mnths[endMnth]} ${endDay} ${endYr}`
        })
    }

    return arr;

}

const Dropdown = {
    start_date: [...genStartDates()],
    end_date: [...genEndDates()],
    source: [
        {label:"Safevest Transact", value:"Safevest Transact"},
        {label:"Bank", value:"Bank"},
        {label:"Safevest Pay",value:"Safevest Pay"},
        {label:"Safevest Wallet",value:"Safevest Wallet"}
    ],
    bank: [
        {label:"Safevest Bank",value:"Safevest Bank"},
        {label:"GTBank",value:"GTBank"},
        {label:"Zenith Bank",value:"Zenith Bank"},
        {label:"Access Bank",value:"Access Bank"},
        {label:"KeyStone Bank",value:"KeyStone Bank"},
        {label:"FCMB",value:"FCMB"},
        {label:"UBA",value:"UBA"},
        {label:"First Bank",value:"First Bank"},
        {label:"Ecobank",value:"Ecobank"},
        {label:"Standard Chartered",value:"Standard Chartered"},
        {label:"Fidelity Bank",value:"Fidelity Bank"},
        {label:"Hope PSB",value:"Hope PSB"},
        {label:"Providus Bank",value:"Providus Bank"},
        {label:"VBank",value:"VBank"}
    ],
    savings_preference: [
        {label:"Daily",value:"Daily"},
        {label:"Weekly",value:"Weekly"},
        {label:"Monthly",value:"Monthly"},
        {label:"Quaterly",value:"Quaterly"},
        {label:"Yearly",value:"Yearly"}
    ],
    category: [
        {label:"Rent",value:"Rent"},
        {label:"Fees",value:"Fees"},
        {label:"Vacation",value:"Vacation"},
        {label:"Savings",value:"Savings"},
        {label:"Gadget",value:"Gadget"},
        {label:"Education",value:"Education"},
        {label:"Events",value:"Events"},
        {label:"Cruise",value:"Cruise"},
        {label:"Travel",value:"Travel"},
        {label:"Business",value:"Business"}
    ]
}

export default Dropdown;