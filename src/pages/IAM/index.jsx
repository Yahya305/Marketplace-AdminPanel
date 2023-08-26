import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { BsArrowRight } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import Dropdown from "react-bootstrap/Dropdown";
import "./index.css";
import { updatePolicy } from "../../store/slices/PolicySlice";

export const iamObjects = [
  {
    uid: 122132,
    name: "John Doe",
    email: "asadsadasbc@gmail.com",
    contact: "+923313129346",
    userRole: "Manager",
    grpPolicy: "---",
    createdDate: Date.now(),
    lastLoginDate: Date.now(),
    status: "Reviewing",
  },
  {
    uid: 126832,
    name: "John Doe",
    email: "abc@gmail.com",
    contact: "+923313129346",
    userRole: "Manager",
    grpPolicy: "---",
    createdDate: Date.now(),
    lastLoginDate: Date.now(),
    status: "Approved",
  },
  {
    uid: 126672,
    name: "John Doe",
    email: "abc@gmail.com",
    contact: "+923313129346",
    userRole: "Manager",
    grpPolicy: "---",
    createdDate: Date.now(),
    lastLoginDate: Date.now(),
    status: "Reviewing",
  },
  {
    uid: 122998,
    name: "John Doe",
    email: "abc@gmail.com",
    contact: "+923313129346",
    userRole: "Manager",
    grpPolicy: "---",
    createdDate: Date.now(),
    lastLoginDate: Date.now(),
    status: "Suspended",
  },
  {
    uid: 122132,
    name: "John Doe",
    email: "abc@gmail.com",
    contact: "+923313129346",
    userRole: "Manager",
    grpPolicy: "---",
    createdDate: Date.now(),
    lastLoginDate: Date.now(),
    status: "Reviewing",
  },
  {
    uid: 134132,
    name: "John Doe",
    email: "abc@gmail.com",
    contact: "+923313129346",
    userRole: "Manager",
    grpPolicy: "---",
    createdDate: Date.now(),
    lastLoginDate: Date.now(),
    status: "Rejected",
  },
  {
    uid: 156132,
    name: "John Doe",
    email: "abc@gmail.com",
    contact: "+923313129346",
    userRole: "Manager",
    grpPolicy: "---",
    createdDate: Date.now(),
    lastLoginDate: Date.now(),
    status: "Reviewing",
  },
  {
    uid: 156132,
    name: "John Doe",
    email: "abc@gmail.com",
    contact: "+923313129346",
    userRole: "Manager",
    grpPolicy: "---",
    createdDate: Date.now(),
    lastLoginDate: Date.now(),
    status: "Reviewing",
  },
  {
    uid: 156132,
    name: "John Doe",
    email: "abc@gmail.com",
    contact: "+923313129346",
    userRole: "Manager",
    grpPolicy: "---",
    createdDate: Date.now(),
    lastLoginDate: Date.now(),
    status: "Approved",
  },
  {
    uid: 156132,
    name: "John Doe",
    email: "abc@gmail.com",
    contact: "+923313129346",
    userRole: "Manager",
    grpPolicy: "---",
    createdDate: Date.now(),
    lastLoginDate: Date.now(),
    status: "Reviewing",
  },
  {
    uid: 156132,
    name: "John Doe",
    email: "abc@gmail.com",
    contact: "+923313129346",
    userRole: "Manager",
    grpPolicy: "---",
    createdDate: Date.now(),
    lastLoginDate: Date.now(),
    status: "Reviewing",
  },
  {
    uid: 156132,
    name: "John Doe",
    email: "abc@gmail.com",
    contact: "+923313129346",
    userRole: "Manager",
    grpPolicy: "---",
    createdDate: Date.now(),
    lastLoginDate: Date.now(),
    status: "Reviewing",
  },
];
export default function index() {
  const [searchVal, setSearchVal] = useState("");
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);

  const policies = useSelector((state) => {
    return state.policySlice;
  });

  const dispatch= useDispatch();

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

  const  handlePolicySelect=(id,policy)=>{
    // dispatch(updatePolicy({id,grpPolicy:policy}))
  }

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
      <div id="main-iam">
        <div id="iam-container">
          <div className="table-item table-header">User ID</div>
          <div className="table-item table-header">User Name</div>
          <div className="table-item table-header">User Email</div>
          <div className="table-item table-header">Contact</div>
          <div className="table-item table-header">User Role</div>
          <div className="table-item table-header">Group Policy</div>
          <div className="table-item table-header">Created Date</div>
          <div className="table-item table-header">Last Login Date</div>
          <div className="table-item table-header">Status</div>
          <div className="table-item table-header">Action</div>
          {iamObjects.map((item, key) => {
            return (
              <React.Fragment key={key}>
                <div className="table-item">{item.uid}</div>
                <div className="table-item">{item.name}</div>
                <div className="table-item ellipsis">
                  <span>{item.email}</span>
                </div>
                <div className="table-item">{item.contact}</div>
                <div className="table-item">{item.userRole}</div>
                <div className="table-item">
                  <Dropdown>
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                      Select Policy
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      {policies.map((policy,menuKey)=>{
                        return(
                          <Dropdown.Item key={menuKey} onClick={()=>handlePolicySelect(key, policy)}>{policy.role}</Dropdown.Item>
                          )
                      })}
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <div className="table-item">
                  {new Date(item.createdDate).toLocaleString()}
                </div>
                <div className="table-item">
                  {new Date(item.lastLoginDate).toLocaleString()}
                </div>
                <div className="table-item">{item.status}</div>
                <div className="table-item">{setAction(item.status)}</div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
}
