import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import reducers from "./reducers/index";
import thunk from "redux-thunk";

const persistConfig = {
    key: "root",
    storage,
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = createStore(
    persistedReducer,
    {},
    applyMiddleware(thunk)
);
const persistor = persistStore(store);

export default store;
export { persistor };