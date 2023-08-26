import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { BsGear } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import "./index.css"
import { useNavigate } from "react-router-dom";

function index({ onHide }) {

  const navigate= useNavigate();

  const mockNotif = {
    0: {
      from: "User 1",
      message: "New post on your timelineour timelineour timelineour timelineour timelineour timeline",
      time: "Just now",
      type: "post",
      link: "/listing/62353",
      isRead: false,
      id: Math.random(),
    },
    1: {
      from: "User 2",
      message: "New post on your timeline",
      time: "Just now",
      type: "post",
      link: "/listing/12353",
      isRead: true,
      id: Math.random(),
    },
    2: {
      from: "User 3",
      message: "User 3 commented on your Listing",
      time: "Just now",
      type: "comment",
      link: "/listing/343251",
      isRead: false,
      id: Math.random(),
    },3: {
      from: "User 3",
      message: "User 3 commented on your Listing",
      time: "Just now",
      type: "comment",
      link: "/listing/343251",
      isRead: false,
      id: Math.random(),
    },4: {
      from: "User 3",
      message: "User 3 commented on your Listing",
      time: "Just now",
      type: "comment",
      link: "/listing/343251",
      isRead: false,
      id: Math.random(),
    },5: {
      from: "User 3",
      message: "User 3 commented on your Listing",
      time: "Just now",
      type: "comment",
      link: "/listing/343251",
      isRead: false,
      id: Math.random(),
    },6: {
      from: "User 3",
      message: "User 3 commented on your Listing",
      time: "Just now",
      type: "comment",
      link: "/listing/343251",
      isRead: false,
      id: Math.random(),
    },7: {
      from: "User 3",
      message: "User 3 commented on your Listing",
      time: "Just now",
      type: "comment",
      link: "/listing/343251",
      isRead: false,
      id: Math.random(),
    },8: {
      from: "User 3",
      message: "User 3 commented on your Listing",
      time: "Just now",
      type: "comment",
      link: "/listing/343251",
      isRead: false,
      id: Math.random(),
    },9: {
      from: "User 3",
      message: "User 3 commented on your Listing",
      time: "Just now",
      type: "comment",
      link: "/listing/343251",
      isRead: false,
      id: Math.random(),
    },10: {
      from: "User 3",
      message: "User 3 commented on your Listing",
      time: "Just now",
      type: "comment",
      link: "/listing/343251",
      isRead: false,
      id: Math.random(),
    },11: {
      from: "User 3",
      message: "User 3 commented on your Listing",
      time: "Just now",
      type: "comment",
      link: "/listing/343251",
      isRead: false,
      id: Math.random(),
    },12: {
      from: "User 3",
      message: "User 3 commented on your Listing",
      time: "Just now",
      type: "comment",
      link: "/listing/343251",
      isRead: false,
      id: Math.random(),
    },13: {
      from: "User 3",
      message: "User 3 commented on your Listing",
      time: "Just now",
      type: "comment",
      link: "/listing/343251",
      isRead: false,
      id: Math.random(),
    },14: {
      from: "User 3",
      message: "User 3 commented on your Listing",
      time: "Just now",
      type: "comment",
      link: "/listing/343251",
      isRead: false,
      id: Math.random(),
    },
  };

  const handleNotifClick=(e,link)=>{
    // Make an API call 
    console.log("Made an API call in which isRead is set to true");
    navigate(link);
    e.target.classList.add("text-secondary")
    onHide();
  }
  return (
    <>
        <Offcanvas.Body style={{padding:"0px", overflowY:"auto"}}>
          <div className="d-flex justify-content-start align-items-center gap-3  p-3">
            <div className="fs-4">Notifications</div>
            <BsGear role="button" className="text-secondary" size={20} onClick={()=>navigate("/profile/user-notifications/buyer-seller-calls")} />
            <AiOutlineClose
              role="button"
              className="ms-auto"
              size={25}
              onClick={() => onHide()}
            />
          </div>
          {Object.keys(mockNotif).length === 0 ? (
          <div
            className="d-flex flex-column gap-3 justify-content-center align-items-center"
            style={{ width: "100%", height: "90%" }}
          >
            <AiOutlineExclamationCircle className="text-secondary" size={80} />
            <div className="fw-semibold fs-5">You have no notifications</div>
            <small className="text-secondary">
              Feeling left out? It doesn't have to be that way.
            </small>
          </div>
          ) : (
            <ul id="notif-list" className="p-0 m-0" style={{height:"90%"}}>
              {Object.values(mockNotif).map((notification) => {
                return (
                <li className="notif-list-item" key={notification.id} onClick={(e)=>handleNotifClick(e,notification.link)}>
                  <BiUserCircle className="text-secondary" size={30} />
                  <div className={`d-flex flex-column ${notification.isRead?"text-secondary":""}`} >
                  <div className="elipses-text">{notification.message}</div>
                  <small>Just Now</small>
                  </div>
                </li>
                )
              })}
            </ul>
          )}
        </Offcanvas.Body>
      
    </>
  );
}

export default index;
