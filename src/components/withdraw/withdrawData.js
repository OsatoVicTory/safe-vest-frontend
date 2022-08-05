const withdraw = [
    {
        label:"Bank Name",name:"banks",placeholder:"Safevest Bank",
        type: "dropdown",
        dropdown: "bank"
    },
    {label:"Accunt Name", name:"acc_name",placeholder: "Osatohanmen Ogbeide", type:"text"},
    {label:"Enter Amount",name:"amt", placeholder: "1,200", type:"number"},
    {label:"Account Number",name:"acc_num", placeholder:"0123456789", type:"number"},
    {label:"Enter Your Pin. This is for Security Reasons",name:"password", placeholder: "0123456789", type:"password"}
]

export default withdraw;