const getDays = (from) => {
    return new Date().getTime() - new Date(from).getTime();
}
const mnths = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

const getLongerday = (first, second) => {
    return new Date(first).getTime() >= new Date(second).getTime();
}
const getstrictLongerday = (first, second) => {
    return new Date(first).getTime() > new Date(second).getTime();
}
const getDateFormat = (val) => {
    const day = new Date(val);
    return `${mnths[day.getMonth()]} ${day.getFullYear()}`
}

const pushSavingsVal = (obj) => {
    if(obj.break) {
        return {
            text: `You "broke" [${obj.name}] target savings`,
            days: getDays(obj.updatedAt),
            when: (obj.updatedAt),
            type: "savings"
        };
    } else if(obj.lock) {
        return {
            text: `You "locked" [${obj.name}] target savings`,
            days: getDays(obj.updatedAt),
            when: (obj.updatedAt),
            type: "savings"
        };
    } else if(getstrictLongerday(obj.updatedAt, obj.createdAt)) {
        return {
            text: `You updated [${obj.name}] target savings`,
            days: getDays(obj.updatedAt), 
            when: (obj.updatedAt),
            type: "savings"
        };
    } else {
        return {
            text: `You Joined [${obj.name}] saving challenge`, 
            days: getDays(obj.createdAt), 
            when: (obj.createdAt), 
            type: "savings"
        };
    }
}

const pushInvestifyVal = (obj) => {
    if(getstrictLongerday(obj.updatedAt, obj.createdAt)) {
        return {
            text: `You withdrew this Investment`,
            days: getDays(obj.updatedAt),
            when: (obj.updatedAt),
            type: "investify"
        }
    } else {
        return {
            text: `You Joined [${obj.name}] investment deal`,
            days: getDays(obj.createdAt),
            when: (obj.createdAt),
            type: "investify"
        }
    }
}


const pushSafelockVal = (obj) => {
    if(getstrictLongerday(obj.updatedAt, obj.createdAt)) {
        return {
            text: `You Cashed out [${obj.name}] Safelock`,
            days: getDays(obj.updatedAt),
            when: (obj.updatedAt),
            type: "safelock"
        }
    } else {
        return {
            text: `You Started [${obj.name}] Safelock`,
            days: getDays(obj.createdAt),
            when: (obj.createdAt),
            type: "safelock"
        }
    }
}


const pushFlexnairaVal = (obj) => {
    if(obj.updatedAt) {
        if(obj["flexnaira_topup"] && obj["flexnaira_withdrawal"]) {
            if(getLongerday(obj["flexnaira_topup"], obj["flexnaira_withdrawal"])) {
                return {
                    text: `You top up your Flex Naira Wallet`,
                    days: getDays(obj["flexnaira_topup"]),
                    when: (obj["flexnaira_topup"]),
                    type: "flexnaira"
                }
            } else {
                return {
                    text: `You top up your Flex Naira Wallet`,
                    days: getDays(obj["flexnaira_withdrawal"]),
                    when: (obj["flexnaira_withdrawal"]),
                    type: "flexnaira"
                }
            }
        } else if(obj["flexnaira_topup"] || obj["flexnaira_withdrawal"]) {
            return {
                text: `You ${obj["flexnaira_topup"] ? "Top up" : "Withdrew"} your Flex Naira Wallet`,
                days: getDays(obj["flexnaira_topup"] ? obj["flexnaira_topup"] : obj["flexnaira_withdrawal"]),
                when: (obj["flexnaira_topup"] ? obj["flexnaira_topup"] : obj["flexnaira_withdrawal"]),
                type: "flexnaira"
            }
        } else return null;
    } else return null
}


const pushPiggybankVal = (obj) => {
    if(obj.updatedAt) {
        if(obj["topup"] && obj["withdrawal"]) {
            if(getLongerday(obj["topup"], obj["withdrawal"])) {
                return {
                    text: `You Top up your Piggybank`,
                    days: getDays(obj["topup"]),
                    when: (obj["topup"]),
                    type: "piggybank"
                }
            } else {
                return {
                    text: `You Withdrew from your Piggybank`,
                    days: getDays(obj["withdrawal"]),
                    when: (obj["withdrawal"]),
                    type: "piggybank"
                }
            }
        } else if(obj["topup"] || obj["withdrawal"]) {
            return {
                text: `You ${obj["topup"] ? "Top up" : "Withdrew from"} your Piggybank`,
                days: getDays(obj["topup"] ? obj["topup"] : obj["withdrawal"]),
                when: (obj["topup"] ? obj["topup"] : obj["withdrawal"]),
                type: "piggybank"
            }
        } else return null
    } else return null
}


const activitiesReducer = (state = [], action) => {
    switch (action.type) {
        case "LOAD_ACTIVITIES":
            const Arr = [];

            
            action.payload[1].map(val => {
                Arr.push(pushSavingsVal(val));
            });

            action.payload[2].map(val => {
                Arr.push(pushInvestifyVal(val));
            });   
            
            action.payload[3].map(val => {
                Arr.push(pushSafelockVal(val));
            }); 

            var flexnaira = pushFlexnairaVal(action.payload[0]);
            if(flexnaira) Arr.push(flexnaira);
            var piggybank = pushPiggybankVal(action.payload[0]);
            if(piggybank) Arr.push(piggybank);
            if(action.payload[0].lst_redeemed) {
                Arr.push({
                    text:`You Redeemed Piggybank Interest on ${getDateFormat(action.payload[0].lst_redeemed)}`,
                    when: action.payload[0].lst_redeemed,
                    type: "piggybank"
                })
            }
            Arr.push({
                text: `You Joined Safevest`,
                when: action.payload[0].createdAt,
                type: "piggybank safelock savings"
            })
            
            
            Arr.sort((a, b) => a["days"] - b["days"])
            return [...state, ...Arr];

        case "UPDATE_ACTIVITIES":
            return [action.payload, ...state];
        default:
            return state;
    }
}

export default activitiesReducer;