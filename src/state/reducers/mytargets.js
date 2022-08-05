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
    var d = new Date().getTime()-s;
    var e = new Date(end).getTime()-s;
    return Math.max(0, (Math.floor((d/e)*100)));
}
const random = Math.floor(Math.random() * 1000);

const targetsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        // action.payload => [ targets, amt balance]
        case "LOAD_TARGETS":
            //we correct for targets that has ended before now
            const ongoing = action.payload[0].map(x => {
                var days = getDays(x.start_date, x.end_date);
                var rates = getRate(x.start_date, x.end_date);
                if(new Date(x.end_date).getTime() <= new Date().getTime()) {
                    return {
                        ...x,
                        completed: true,
                        rate: "100",
                        "days_left": "Completed",
                        "nxtvalue": "Completed",
                        _id: x._id || ""+random,
                        amt: action.payload[1]
                    }
                } else {
                    return {
                        ...x,
                        "days_left": days,
                        rate: rates,
                        "nxtvalue": days,
                        _id: x._id || ""+random,
                        amt: action.payload[1]
                    }
                }
            })

            //if completed
            const completed = ongoing.filter(x => x.completed).map(val => {
                return {
                    ...val,
                    "url": `/dashboard/savings/target/completed/view_target/${val.id}/*`
                }
            });

            return {
                ...state,
                ongoing,
                completed
            }
        case "UPDATE_TARGETS":
            const newOngoing = state.ongoing.map(x => 
                x._id == action.payload._id ? action.payload : x
            );
            const newCompleted = newOngoing.filter(x => x.completed);

            return {
                ...state,
                ongoing: newOngoing,
                completed: newCompleted
            }

        case "CREATE_TARGETS":
            let newTarget = [...state.ongoing];
            let createdNew = {
                ...action.payload
            }
            var days = getDays(createdNew.start_date, createdNew.end_date);
            createdNew["days_left"] = days;
            createdNew["nxtvalue"] = days;
            createdNew["rate"] = getRate(createdNew.start_date, createdNew.end_date);
            newTarget.push(createdNew);
            return {
                ...state,
                ongoing: newTarget
            }

        case "UPDATE_ALL_TARGETS":
            let updatedOngoing = state.ongoing.map(val => (
                {
                    ...val,
                    ["amt"]: action.payload
                }
            ))
            return {
                ...state,
                ongoing: updatedOngoing
            }
            
        default: 
            return state;
    }
}

export default targetsReducer;