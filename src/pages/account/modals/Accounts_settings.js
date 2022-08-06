import React, { useState } from "react";
import img from "../../../svgs/circle-plain.svg";
import avatar from "../../../svgs/avatar.png";
import { useNavigate } from "react-router-dom";
import Slider from "../../../components/perfectslider/Slider";
import Input from "../../../components/input/Input";
import { useDispatch, useSelector } from "react-redux";
import { accountAction } from "../../../state/index";
import { bindActionCreators } from "redux";
import Alert from "../../../components/alert/Alert";
import Loading from "../../../components/loading";
import Axios from "axios";
import API from "../../../components/apiData";
import "./Index.css";

const AccountSettings = () => {

    const accountInfo = useSelector((state) => state.account);
    const sign = useSelector((state) => state.cloudinary_signature);
    const [leave, setLeave] = useState(false);
    const [state, setState] = useState({
        ...accountInfo
    });
    const [imageupload, setImgupload] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { updateAccount } = bindActionCreators(accountAction, dispatch)
    const handleNavigate = () => {
        setLeave(true);
        setTimeout(() => {
            navigate(-1);
        }, 1000);
    }

    const url = `https://api.cloudinary.com/v1_1/${sign.cloud_name}/auto/upload`;
    const backend = `${API.account}/update/${state._id}`;
    const defaultPic = "https://storage.googleapis.com/piggybankservice.appspot.com/statics/default_avatar_v4.png";

    const grabFormData = () => {
        const formData = new FormData();
        formData.append("file", imageupload);
        formData.append("api_key", sign.api_key);
        formData.append("timestamp", sign.timestamp);
        formData.append("signature", sign.signature);
        return formData;
        
    }

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const closeAlert = () => {
        setError(null);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        let formData = null;
        if(imageupload) formData = grabFormData();
        setLoading(true);


        const upload = async () => {
            try {
                setLoading(true);
                let Data = {
                    ...state,
                    ["profile_picture"]: defaultPic
                }
                if(formData) {
                    const response = await Axios.post(url, formData);
                    Data = {
                        ...state,
                        ["profile_picture"]: response.data.url
                    };
                }
                //send Data to redux
                updateAccount(Data);
                setLoading(false);
                //send Data to database
                const upload_toDB = await Axios.put(backend, Data);
                // console.log(upload_toDB)
                // console.log(state);
            } catch(err) {
                console.log(err);
                setError("Something Went Wrong. Check Internet");
                setLoading(false);
            }
        }
        upload();
    }

    const Inputs = [
        {label: "First Name", value: accountInfo.first_name || "Osatohanmen",name:"first_name"},
        {label: "Last Name", value: accountInfo.last_name || "Ogbeide",name:"last_name"},
        {label: "Email Address", value: accountInfo.email || "osatohanmenogbeide1@gmail.com",name:"email"},
        {label: "Phone Number", value: accountInfo.phone_number || "09065352839",name:"phone_number"}
    ]


    return (
        <div className="modal" style={{ zIndex: "1000" }}>
            <div className="popup_dummy" onClick={handleNavigate}></div>
            <div className="popup_main">
                <Slider zIndex={1000} leave={leave}>
                    {error && <Alert err={true} message={error} closeAlert={closeAlert} />}
                    <div className="popup_top">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" 
                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" 
                        strokeLinejoin="round" className="x" style={{color: "rgb(34,149,242)"}} onClick={handleNavigate}>
                            <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </div>
                    
                    <div className="popup_body">
                        <h2 style={{color: "rgb(34,149,242)"}}>Basic Data</h2>
                        <div className="img_change">
                            <span>Change your avatar</span>
                            <div>
                                <img src={imageupload ? URL.createObjectURL(imageupload) : accountInfo.profile_picture || avatar} />
                                <label htmlFor="input">
                                    <span>Tap to Change</span>
                                </label>
                                <input type="file" id="input" onChange={(e) => setImgupload(e.target.files[0])}/>
                            </div>
                        </div>
                        <form onSubmit={(e) => handleSubmit(e)}>
                            {Inputs.map((val,idx) => (
                                <Input key={idx} type="text" name={val.name} 
                                label={val.label} placeholder={val.value} handleChange={handleChange}
                                />
                            ))}
                            <div className="complete_base" style={{position: "fixed"}}>
                                {!loading ? <input type="submit" value="Update Profile"></input>
                                  : 
                                  <div className="loading">
                                    <Loading />
                                  </div>
                                }
                            </div>
                        </form>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default AccountSettings;