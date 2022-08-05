import React, { useState } from "react";
import circle from "../../../../svgs/circle.svg";
import "./piggy.css";
import { useDispatch, useSelector } from "react-redux";
import { accountAction, activitiesAction } from "../../../../state"
import { bindActionCreators } from "redux";
import Loading from "../../../../components/loading";
import Alert from "../../../../components/alert/Alert";
import Axios from "axios";
import API from "../../../../components/apiData";

const Interest = ({ account, handleState, dateVal }) => {

    const dispatch = useDispatch();
    const acc = useSelector((state) => state.account);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const { updateAccount } = bindActionCreators(accountAction, dispatch);
    const { updateActivities } = bindActionCreators(activitiesAction, dispatch);
    const backend = `${API.account}/update/${acc._id}`;

    const updateData = async (data) => {
        try {
            data["amt"] = Math.floor(1.1*(data["amt"]-0));
            data["lst_balance"] = Math.floor(1.1*(data["amt"]-0));
            const send = await Axios.put(backend, data);
            // console.log(send, data);
            updateAccount(data);
            updateActivities({
                text: `You Redeemed Interest For ${dateVal.join(" ")}`,
                when: String(new Date()),
                type: "piggybank"
            })
            handleState();
            setLoading(false);
        } catch (err) {
            setError("Something Went Wrong. Check Internet");
            setLoading(false);
        }
    }

    const handleClick = () => {
        setLoading(true);
        const data = {
            ...acc,
            ["lst_balance"]: Math.floor(1.1*(data["amt"]-0)),
            ["lst_redeemed"]: new Date().getMonth()
        }
        updateData(data)
    }

    const closeAlert = () => {
        setError(null);
    }

    

    return (
        <div className="interest">
            {error && <Alert err={true} message={error} closeAlert={closeAlert} />}
            <span className="small">
                Interests on Piggybank savings is currently at 10% per annum and is calculated daily for every month.
                For even better interests, use the Safelock feature.
            </span>
            <div className="display_interest">
                <img src={circle} />
                <div className="display_flex">
                    <span className="small" style={{color: "white"}}>{dateVal.join(" ")} Interest Rate</span>
                    <span className="big" style={{color: "white"}}>10%</span>
                </div>
            </div>
            <span className="med" style={{marginTop: "30px"}}>
                You have not activated your interest for the last month savings.
                Click the button below to redeem now.
            </span>

            {/* <div clasName="interest_bottom" style={{background: "red"}}> */}
                {!loading ? 
                    <button onClick={handleClick}>
                        Activate Interests
                    </button> :
                    <div className="loading"><Loading /></div>
                }
            {/* </div> */}
        </div>
    )
}

export default Interest;