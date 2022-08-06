import React, { useState, useEffect } from "react";
import "./Complete.css";
import Axios from "axios";
import Slider from "../../../../../components/perfectslider/Slider";
import { useNavigate } from "react-router-dom";
import Input from "../../../../../components/input/Input";
import cancel from "../../../../../svgs/arrow-right.svg";
import uploadLabel from "../../../../../svgs/upload-label.png";
import img from "../../../../../svgs/savings.jpeg";
import image from "../../../../../svgs/circle-plain.svg";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../../../../components/loading";
import Alert from "../../../../../components/alert/Alert";
import Limit from "../../../../../components/limitData";
import { targetAction, activitiesAction, limitAction } from "../../../../../state/index";
import { bindActionCreators } from "redux";
import API from "../../../../../components/apiData";
// import { updateActivities } from "../../../../../state/actions/activities";


const Complete = ({ type, values }) => {

    const [leave, setLeave] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    //to get user_id
    const acc = useSelector((state) => state.account);
    const limit = useSelector((state) => state.limit);
    //to update redux
    const { createTargets } = bindActionCreators(targetAction, dispatch);
    const { updateActivities } = bindActionCreators(activitiesAction, dispatch);
    const { updateLimit } = bindActionCreators(limitAction, dispatch);
    const handleLeave = () => {
        setLeave(true);
       
        setTimeout(() => {
            navigate(-1);
        }, 500);
    }

    const [state, setState] = useState(values)
    const [imageupload, setImgupload] = useState(null);
    //get signature from redux
    const sign = useSelector((state) => state.cloudinary_signature);
    
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    const url = `https://api.cloudinary.com/v1_1/${sign.cloud_name}/auto/upload`;
    const backend = `${API.savings}/add`;

    const grabFormData = () => {
        const formData = new FormData();
        formData.append("file", imageupload);
        formData.append("api_key", sign.api_key);
        formData.append("timestamp", sign.timestamp);
        formData.append("signature", sign.signature);
        return formData;
        
    }
    const closeAlert = () => {
        setError(null);
    }

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const goodDates = () => {
        return new Date(state.start_date).getTime() <= new Date(state.end_date).getTime(); 
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        if(limit >= Limit) {
            setLoading(false);
            setError("You Have Used up Your Memory Limit on Our Database");
            return;
        }
        if(!goodDates) {
            setError("Wrong Start and End Date Format");
            setLoading(false);
            return;
        }

        const upload = async () => {
            try {
                let Data = {
                    ...state,
                    ["amt"]: state.target,
                    ["user_id"]: acc.user_id,
                    ["friends"]: state.friends ? state.friends.split(",") : []
                }
                if(imageupload) {
                    const formData = grabFormData();
                    const response = await Axios.post(url, formData);
                    Data = {
                        ...Data,
                        ["image_url"]: response.data.url
                    };
                }
                //send Data to database
                const upload_toDB = await Axios.post(backend, Data);
                // console.log(upload_toDB);
                Data["_id"] = upload_toDB.data.message;
                createTargets(Data);
                updateActivities({
                    text: `You Created [${Data.name}] Challenge`,
                    when: String(new Date()),
                    type: "savings"
                });
                updateLimit(limit+1);
                setLoading(false);
                navigate("/dashboard/savings/target/*");
                // console.log(state);
            } catch(err) {
                console.log(err);
                setError("Something Went Wrong. Check Internet");
                setLoading(false);
            }
        }
        upload();
    }

    return (
        <div className="complete">
            <div className="dummy" onClick={() => handleLeave()}></div>
            <Slider zIndex={100000000} leave={leave}>
                {/* <div>Yeah</div> */}
                {error && <Alert err={true} message={error} closeAlert={closeAlert} />}
                <div className="popup_top">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" 
                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" 
                    strokeLinejoin="round" className="x" style={{color: "rgb(39,174,96)"}} onClick={handleLeave}>
                        <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </div>
                    
                <div className="popup_body">
                    <h1>Finish setting up</h1>
                    <p>Finalize your target settings</p>
                    <div className="design" style={{backgroundColor:"rgb(39,174,96)"}}>
                        {/* <img src={image} style={{fill:"white",color:"white"}}/> */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="target" 
                        style={{color: "white"}}>
                            <circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle>
                        </svg>
                        <div className="design_txt">
                            <span className="big">Total target of &#8358;{state.target}</span>
                            <span className="small">You want to reach &#8358;{state.target} in your savings target</span>
                        </div>
                    </div>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <Input label="Prefered amount to save on a basis" 
                            placeholder="Amount to save frequently" name="frequency" type="number" handleChange={handleChange} />
                        <Input label="Prefered Time" placeholder="Select a Time" name="time" type="text" handleChange={handleChange} />
                        <label htmlFor="input">
                            <div className="img-upload">
                                <span>Tap Below To Add a picture</span>
                                <img src={imageupload ? URL.createObjectURL(imageupload) : uploadLabel} />
                            </div>
                        </label>
                        <input type="file" id="input" className="hide" onChange={(e) => setImgupload(e.target.files[0])}/>
                        <Input label="Set start date" type="dropdown" placeholder="Select start date" name="start_date" handleChange={handleChange} dropdown='date' />
                        
                        <Input label="Set withdrawal date" placeholder="Select end date" name="end_date" type="dropdown" handleChange={handleChange} dropdown='date' />
                        <div className="complete_base" style={{position: "fixed"}}>
                            {!loading ? 
                              <input type="submit" value={"Complete Target"} style={{backgroundColor:"rgb(39,174,96)"}}></input>
                              : 
                              <div className="loading" style={{backgroundColor:"rgb(39,174,96)"}}>
                                <Loading />
                              </div>
                            }
                        </div>
                    </form>
                </div>
                
            </Slider>
        </div>
    )
}

export default Complete;