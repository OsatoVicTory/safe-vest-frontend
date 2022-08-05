import React from "react";
import { Link } from "react-router-dom";
import "./Index.css";

const NoTransactions = ({ type }) => {

    const pathname = window.location.pathname;
    var len = pathname.length;
    if(pathname[len-1] == "*")

    return (
        <div className="notrans">
            <span>No transactions to display for now</span>
            <Link to ={`/dashboard/savings/${type}/transactions`} className="notrans_link" style={{textDecoration: "none"}}>View More Transactions</Link>
        </div>
    )
}

export default NoTransactions;