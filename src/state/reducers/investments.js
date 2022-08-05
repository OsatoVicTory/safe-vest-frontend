let INITIAL_STATE = {
    ongoing: [],
    completed: []
}

const getDays = (from, to) => {
    var start = new Date(from).getTime();
    var end = new Date(to).getTime();
    return Math.floor((end-start)/(3600*1000*24))
}
const random = Math.floor(Math.random() * 1000);
const investmentReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "LOAD_INVESTMENTS":
            //we correct for investments that has ended before now
            const ongoing = action.payload.map(x => {
                // var days = getDays(x.start_date, x.end_date);
                if(new Date(x.closing_date).getTime() <= new Date().getTime()) {
                    return {
                        ...x,
                        completed: true,
                        _id: x._id || ""+random,
                        "url": `/dashboard/investify/view_investment/${x._id||random}/*`,
                        "img_url": x.img_url||"https://www.cnet.com/google-amp/news/cut-costs-around-the-house-now-heres-how/"
                    
                    }
                } else {
                    return {
                        ...x,
                        _id: x._id || ""+random,
                        "url": `/dashboard/investify/view_investment/${x._id||random}/*`,
                        "img_url": x.img_url||"https://www.cnet.com/google-amp/news/cut-costs-around-the-house-now-heres-how/"
                    
                    }
                }
            })

            //if completed
            const completed = ongoing.filter(x => x.completed).map(val => {
                return {
                    ...val,
                    "url": `/dashboard/investify/completed/view_investment/${val._id}/*`
                }
            });

            return {
                ...state,
                ongoing,
                completed
            }
        case "UPDATE_INVESTMENTS":
            const newOngoing = state.ongoing.map(x => 
                x._id == action.payload._id ? action.payload : x
            );
            const newCompleted = newOngoing.filter(x => x.completed)

            return {
                ...state,
                ongoing: newOngoing,
                completed: newCompleted
            }

        case "CREATE_INVESTMENTS":
            let newInvestment = state;
            newInvestment.push(action.payload);
            return {
                ...state,
                ongoing: newInvestment
            }


        default: 
            return state;
    }
}

export default investmentReducer;