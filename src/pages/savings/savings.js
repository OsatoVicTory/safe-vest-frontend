import React, { useState, useEffect } from 'react';
import "./savings.css";
import { Routes, Route, Link } from 'react-router-dom';
import SavingsHome from "./savingshome/savingshome";
import Target from './targets/target';
import Piggybank from './piggybank/piggybank';
import FlexNaira from './flexnaira/flexnaira';
import Safelock from './safelock/safelock';

const Savings = () => {


    return ( 
        <div className='savings'>
            <Routes>
                <Route path="/*" element={<SavingsHome />}/>
                <Route path="/target/*" element={<Target />} />
                <Route path="/piggybank/*" element={<Piggybank />} />
                <Route path="/safelock/*" element={<Safelock />} />
                <Route path="/flexnaira/*" element={<FlexNaira />} />
            </Routes>
            
        </div>
    )
}

export default Savings;