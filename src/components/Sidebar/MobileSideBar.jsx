import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { BiGridAlt, BiLogOut } from "react-icons/bi";
import { BiDollarCircle } from "react-icons/bi";
import { BiMessageSquareDetail } from "react-icons/bi";
import { BiWalletAlt } from "react-icons/bi";
import { BiUserCircle } from "react-icons/bi";
import { BiExit } from "react-icons/bi";
import { HiSpeakerphone } from "react-icons/hi";
import { MdGroups, MdNotifications } from "react-icons/md";
import Notifications from "./Notifications";
import { RxDashboard } from "react-icons/rx";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { CiViewList } from "react-icons/ci";

export default function MobileSideBar() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [showNotif, setShowNotif] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleNavigate = (path) => {
    navigate(path);
    setShow(false);
  };
  return (
    <>
      <div className="mx-3">logo</div>
      <div
        className="ms-auto mx-3"
        onClick={() => {
          handleShow();
          setShowNotif(true);
        }}
      >
        <MdNotifications className="notif-icon" />
      </div>
      <div className="mx-3" onClick={handleShow}>
        <GiHamburgerMenu size={25} />
      </div>

      <Offcanvas
        className="bg-dark small-sidebar text-white"
        show={show}
        onHide={handleClose}
      >
        {/* <Offcanvas.Body> */}
        <div className="d-flex justify-content-between  align-items-center  bg-dark p-2 text-white">
          <img
            role="button"
            onClick={() => handleNavigate("/")}
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANIAAABuCAMAAABlT71+AAABs1BMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////3rB/////////////2pyH2pCH2qxz////////2piL////1piL1pSP2qSD1qB/3pSL////1nSX1piH1qiH1piH2qST2pR31pR/1rBzypCLzoyL1pSP1niP3nx/2liT5hyD1qSHyniH5uR/6sif7qiT0tyX6pxr1vC/3oxvwxST0lyj5wRjstx3////1piL1pyL0piT1oSL1qiL3pCPzpibzoyb0sSQ48sNiAAAAh3RSTlMAHT4t+vOuZ01WRlkmn3YjDcqNAvzTbmo8MwsHv7uiMBMF3drotatxW0oR75eBfXoV9e23s4ZDGAji0KWJYTk35cyog11TKsOwkWtkQDUoIdeaT8fBHxqU9188LOrfjuYInJmATNCzrHdsF/36xb2hcmZXIO7fl1RHHJovJBEO92EzFtfLTiuJpJKZAAAL+ElEQVR42tzWy27CMBAF0PsP/TsWSSSUAEp4NLwCTQt9SXdsp/DJpaQqESlSskGxz9Ze2NLcmcG9TCdwTE8xhVMCn9xt4JIVSXGq9D5jnpgRnPGyMPyR5HBFxJIKH+CGR+Gv2IMT5gn/qB5c8MEKP4D9+qzSU1jvtRBWqTUsU2tp77yyeIZd8m2GqpXhtQhVvWnXO0aQHMf9p8uDDWsO+0sznE2oOr/6rQyFk/1buTb4rJNiXh6mUVKIjtB1acETtRhkATDQ/M8YQLb1zzf1EF2XxyyZ5XDIG/qjkCLWDN9QeCak5i1i1ez1FFuQ7kcJSA9s4WuG7purVl+yIEpAyObEhigBnmFjegAbrI9s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"
          ></img>
          <div onClick={() => setShowNotif(true)}>
            <MdNotifications className="notif-icon" />
          </div>
        </div>
        <hr style={{ color: "white" }}></hr>
        <div className="bg-dark p-2 px-3 mb-3">
          <ul className="nav nav-pills flex-column mt-4 gap-2">
            <li
              role="button"
              className="nav-item d-flex align-items-center flex-row "
              onClick={() => handleNavigate("/dashboard")}
            >
              <RxDashboard className="sidebar-icn" size={30} />
              <div className="px-2 sidebar-btn py-2 rounded fs-5">
                Dashboard
              </div>
            </li>
            <li
              role="button"
              className="nav-item d-flex align-items-center flex-row "
              onClick={() => handleNavigate("/iam")}
            >
              <RxDashboard className="sidebar-icn" size={30} />
              <div className="px-2 sidebar-btn py-2 rounded fs-5">IAM</div>
            </li>
            <li
              role="button"
              className="nav-item d-flex align-items-center flex-row "
              onClick={() => handleNavigate("/group-policy")}
            >
              <MdGroups className="sidebar-icn" size={30} />
              <div className="px-2 sidebar-btn py-2 rounded fs-5">
                Group Policy
              </div>
            </li>
            <li
              role="button"
              className="nav-item d-flex align-items-center flex-row "
              onClick={() => handleNavigate("/buyers")}
            >
              <BiWalletAlt className="sidebar-icn" size={30} />
              <div className="px-2 sidebar-btn py-2 rounded fs-5">Buyers</div>
            </li>
            <li
              role="button"
              className="nav-item d-flex align-items-center flex-row "
              onClick={() => handleNavigate("/sellers")}
            >
              <AiOutlineDollarCircle className="sidebar-icn" size={30} />
              <div className="px-2 sidebar-btn py-2 rounded fs-5">Seller</div>
            </li>
            <li
              role="button"
              className="nav-item d-flex align-items-center flex-row "
              onClick={() => handleNavigate("/listings")}
            >
              <CiViewList className="sidebar-icn" size={30} />
              <div className="px-2 sidebar-btn py-2 rounded fs-5">Listings</div>
            </li>
            <li
              role="button"
              className="nav-item d-flex align-items-center flex-row "
              onClick={() => handleNavigate("/meetings")}
            >
              <BiWalletAlt className="sidebar-icn" size={30} />
              <div className="px-2 sidebar-btn py-2 rounded fs-5">Meetings</div>
            </li>
            <li
              role="button"
              className="nav-item d-flex align-items-center flex-row "
              onClick={() => handleNavigate("/deals")}
            >
              <BiMessageSquareDetail className="sidebar-icn" size={30} />
              <div className="px-2 sidebar-btn py-2 rounded fs-5">Deals</div>
            </li>
            <li
              role="button"
              className="nav-item d-flex align-items-center flex-row "
              onClick={() => handleNavigate("/blogs/articles")}
            >
              <BiMessageSquareDetail className="sidebar-icn" size={30} />
              <div className="px-2 sidebar-btn py-2 rounded fs-5">Blogs</div>
            </li>
            <li
              role="button"
              className="nav-item d-flex align-items-center flex-row "
              onClick={() => handleNavigate("/logout")}
            >
              <BiLogOut className="sidebar-icn" size={30} />
              <div className="px-2 sidebar-btn py-2 rounded fs-5">Logout</div>
            </li>
          </ul>
        </div>
        <Offcanvas show={showNotif} onHide={() => setShowNotif(false)}>
          <Notifications onHide={() => setShowNotif(false)} />
        </Offcanvas>
      </Offcanvas>
    </>
  );
}
