import { combineReducers } from "redux";
import accountReducer from "./account";
import targetsReducer from "./mytargets";
import investmentReducer from "./investments";
import safelockReducer from "./safelock";
import getSignatureReducer from "./cloudinarySignature";
import passwordReducer from "./plain_password";
import activitiesReducer from "./activities";
import limitReducer from "./limit";

const reducers = combineReducers({
    account: accountReducer,
    activities: activitiesReducer,
    targets: targetsReducer,
    investment: investmentReducer,
    safelock: safelockReducer,
    cloudinary_signature: getSignatureReducer,
    plain_password: passwordReducer,
    limit: limitReducer
});

export default reducers;