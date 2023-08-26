import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiFilterAlt, BiUserCircle } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { MdNotifications } from "react-icons/md";
import DatePicker from "../DatePicker";
import "react-datepicker/dist/react-datepicker.css";
import "./index.css";

export default function index({searchBar,value,onChange, ...props}) {
  const [displayOptions, setDisplayOptions] = useState(false);
  const [showNotif, setShowNotif] = useState(false);
  const [displaySuggestions, setDisplaySuggestions] = useState(false);

  return (
    <div id="main-nav">
      {searchBar &&
        <div className="form-floating main-nav-searchbox" onClick={()=>setDisplaySuggestions(!displaySuggestions)}>
          <input
            type="text"
            className="form-control"
            value={value}
            placeholder="name@example.com"
            onChange={onChange}
            style={{height:"47px",minHeight:"0px"}}
          />
          <label htmlFor="floatingInput" style={{top:"-5px"}}>Search Here...</label>
          <div className="search-icn bg-primary text-white rounded"><BsSearch size={20} /></div>
          <div hidden={!displaySuggestions} className="suggestions">
            <div className="search-result">
              Search Result 1
            </div><div className="search-result">
              Search Result 2
            </div><div className="search-result">
              Search Result 3
            </div><div className="search-result">
              Search Result 4
            </div>
          </div>
        </div>
      }
      <div
        className="filter-btn"
        onClick={() => setDisplayOptions(!displayOptions)}
      >
        {displayOptions ? (
          <AiOutlineClose size={24} />
        ) : (
          <>
            <div className="filter-btn-text">Filter</div>
            <BiFilterAlt size={20} />
          </>
        )}
      </div>
      <div hidden={!displayOptions} className="filter-optns">
        <div className="d-flex align-items-center">
          <small>From:</small>
          <div>
            <DatePicker
              selected={props.fromDate}
              onChange={(date) => props.setFromDate(date)}
              maxDate={props.toDate === null ? 0 : props.toDate}
            />
          </div>
        </div>
        <div className="d-flex align-items-center">
          <small>To:</small>
          <div>
            <DatePicker
              selected={props.toDate}
              onChange={(date) => props.setToDate(date)}
              minDate={props.fromDate === null ? 0 : props.fromDate}
            />
          </div>
        </div>
      </div>
      <div className="ms-auto d-flex align-items-center" style={{minWidth:"141.8px"}}>
        <div onClick={() => setShowNotif(!showNotif)}>
          <MdNotifications className="notif-icon mx-2 cursor-pointer" />
        </div>
        <div className="nav-prof-icn">
          <div style={{ lineHeight: "0.75rem" }}>
            <div>John Doe</div>
            <small>UX Designer</small>
          </div>
          <BiUserCircle size={30} />
        </div>
      </div>
    </div>
  );
}
