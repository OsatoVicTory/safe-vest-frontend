import image from "../../../../svgs/user-profile.svg";
// import img from "../../../../svgs/activities.png";

const Data = {
    exploreData: [
        "name","type","category","url","Category","friends","img_url",
        "user_id","frequency","amt","completed","amttype","target","img_url","time",
        "days_left","nxtparam","nxtvalue","start_date","end_date",,"interest","id",
        "lock", "break","members","rate","savings_preference"
    ],
    detailsOptions: [
        {type: "Frequency", value: "frequency"},
        {type: "My Target", value: "amt"},
        {type: "Interest P.A", value: "interest"},
        {type: "Days Left", value: "days_left"},
        {type: "Start Date", value: "start_date"},
        {type: "End Date", value: "end_date"},
    ],
    Linklists: [
        {link: "lock", title: "Lock", img: image},
        {link: "extend", title: "Extend", img: image},
        {link: "break", title: "Break", img: image},
        {link: "settings", title: "Settings", img: image}
    ],
    Topup: {
        type: "Top up this target",
        title: "Instantly topup this savings target",
        body: [
            {label:"Enter an Amount", name:"amt",type:"number"},
            {label: "Source of Funding", name: "source",type:"dropdown",dropdown:"source"},
            {label:"Please enter your password to confirm this action", name: "password",type:"password"}
        ]
    },
    Lock: {
        type: "lock",
        title: "Lock this target to prevent your ability to break it anytime",
        body: [
            {label:"A note to yourself for locking this target",name:"lock_note",type:"text"},
            {label:"Please enter your password to confirm this action",name:"password",type:"password"},
            // {label:"Set Overall Target Amount",name: "amt",type:"number"}
        ]
    },
    Extend: {
        type: "extend",
        title: "You can now extend your target amount",
        body: [
            {label:"Inrease amount to",name:"amt",type:"number"},
            {label:"Change savings preference",name:"savings_preference",type:"dropdown",dropdown:"savings_preference"},
            {label:"Enter Periodic Amount",name:"frequency",type:"number"},
            {label:"Select New End Date", name:"end_date",type:"dropdown",dropdown:"date"},
            {label:"For Security Reasons, Please Enter Your Password", name:"password",type:"password"}
        ]
    },
    Break: {
        type: "break",
        title: "We made it simpler. If you break this target early before the end date you will lose all interest accrued and bear the 1% gateway change for processing your withdrawal",
        body: [
            {label:"Reason For Breaking",name:"reason",type:"text"},
            {label:"Tell us why you are breaking",name:"why",type:"text"},
            {label:"For Security Reasons, Please Enter Your Password",name:"password",type:"password"}
        ]
    },
    Settings: {
        type: "settings",
        title: "Update your target settings",
        body: [
            {label:"Savings Target name",name:"name",type:"text"},
            {label:"Target Sub-Title",name:"sub_title",type:"text"},
            {label:"Target Description",name:"description",type:"text"},
            {label:"Select a Primary Source",name:"source",type:"dropdown", dropdown:"source"},
            {label:"Select a secondary source",name:"source",type:"dropdown", dropdown:"source"},
            {label:"For Security Reasons, Please Enter Your Password",name:"password",type:"password"}
        ]
    },
    DatabaseParams: ["amt","savings_preference","frequency","name","end_date"]
}
export default Data;