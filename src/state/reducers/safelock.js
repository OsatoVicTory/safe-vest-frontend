let INITIAL_STATE = {
    ongoing: [],
    completed: []
}

const getDays = (from, to) => {
    var start = new Date(from).getTime();
    var end = new Date(to).getTime();
    return Math.floor((end-start)/(3600*1000*24))
}
const getRate = (start, end) => {
    var s = new Date(start).getTime();
    var nw = new Date().getTime()-s;
    var e = new Date(end).getTime()-s;
    return Math.max(0, Math.floor((nw/e)*100));
}


const random = Math.floor(Math.random() * 1000);

const safelockReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "LOAD_SAFELOCK":
            //we correct for safelocks that has ended before now
            const ongoing = action.payload.map(x => {
                var days = getDays(x.start_date, x.end_date)
                var rates = getRate(x.start_date, x.end_date);
                if(new Date(x.end_date).getTime() <= new Date().getTime()) {
                    return {
                        ...x,
                        completed: true,
                        rate: "100",
                        "days_left": "Completed",
                        "nxtvalue": "Completed",
                        _id: x._id,
                        "img_url": x.img_url
                    }
                } else {
                    return {
                        ...x,
                        "rate": rates,
                        "days_left": days,
                        "nxtvalue": days,
                        _id: x._id,
                        "img_url": x.img_url
                    }
                }
            })

            //if completed
            const completed = ongoing.filter(x => x.completed).map(val => {
                return {
                    ...val,
                    "url": `/dashboard/savings/safelock/completed/view_safelock/${val.id}/*`
                }
            });

            return {
                ...state,
                ongoing,
                completed
            }
        case "UPDATE_SAFELOCK":
            const newOngoing = state.ongoing.map(x => 
                x._id == action.payload._id ? action.payload : x
            );
            const newCompleted = newOngoing.filter(x => x.completed)

            return {
                ...state,
                ongoing: newOngoing,
                completed: newCompleted
            }
        
        case "CREATE_SAFELOCK":
            let newSafelock = state.ongoing;
            let createdNew = {
                ...action.payload
            }
            var days = getDays(createdNew.start_date, createdNew.end_date);
            createdNew["days_left"] = days;
            createdNew["nxtvalue"] = days;
            createdNew["rate"] = "0";
            newSafelock.push(createdNew);
            return {
                ...state,
                ongoing: newSafelock
            }

        default: 
            return state;
        
        
    }
}

export default safelockReducer;