import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { BsArrowRight } from "react-icons/bs";
import { iamObjects } from "../IAM";
import "./index.css";

export default function index() {
  const [searchVal, setSearchVal] = useState("");
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);

  const setAction = (status) => {
    switch (status) {
      case "Reviewing":
        return (
          <div
            className="btn d-flex align-items-center gap-1 text-white"
            style={{ backgroundColor: "rgb(255 167 36)" }}
          >
            <div>View Listing</div>
            <BsArrowRight size={20} />
          </div>
        );
      case "Approved":
        return <div className="btn btn-danger">Suspend</div>;
      case "Rejected":
        return <div>---</div>;
      case "Suspended":
        return <div>---</div>;
      default:
        break;
    }
  };

  return (
    <>
      <Navbar
        searchBar={true}
        value={searchVal}
        onChange={(e) => setSearchVal(e.target.value)}
        fromDate={fromDate}
        setFromDate={setFromDate}
        toDate={toDate}
        setToDate={setToDate}
      />
      <div id="main-deals">
        <div id="deals-container">
          <div className="table-item table-header">Deal ID</div>
          <div className="table-item table-header">Project Name</div>
          <div className="table-item table-header">Buyer Name</div>
          <div className="table-item table-header">Seller Name</div>
          <div className="table-item table-header">Deal Value</div>
          <div className="table-item table-header">Created On</div>
          {iamObjects.map((item, key) => {
            return (
              <React.Fragment key={key}>
                <div className="table-item">{item.uid}</div>
                <div className="table-item">{item.name}</div>
                <div className="table-item">{item.name}</div>
                <div className="table-item">{item.name}</div>
                <div className="table-item">{item.contact}</div>
                <div className="table-item">
                  {new Date(item.createdDate).toLocaleString()}
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
}
