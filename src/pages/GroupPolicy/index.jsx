import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BsPlusCircle } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
// import { addPolicy, removePolicy, renamePolicy } from "../../store/slices/PolicySlice";
import Navbar from "../../components/Navbar";
import "./index.css";

export default function index() {
  const [policyNames, setPolicyNames] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  let set =new Set()
  // let arrPol=[]


  // const dispatch = useDispatch();

  // const policies = useSelector((state) => {
  //   return state.policySlice;
  // });

  // let arrPol= new Array(policies.length)

  // const handleToggle=(e)=>{
  //   if (e.target.classList.contains("disabled")) {
  //       return
  //   }
  //   if (e.target.classList.contains("active")) {
  //     e.target.classList.remove("active")
  //   }else{
  //     e.target.classList.add("active")
  //   }
  // }

  // // const trackChange=(polNo)=>{
  // //   set.add(polNo)
  // //   console.log(set)
  // //   arrPol[polNo]=document.getElementById(`grp-pol-${polNo}`).value
  // // }
  // const trackChange=(polNo)=>{
  //   dispatch(renamePolicy({id:polNo,role:document.getElementById(`grp-pol-${polNo}`).value}))
  // }
  
  // const handleSave=()=>{
  //   console.log("before Pol", arrPol)
  //   set.forEach((pol)=>{
  //     dispatch(renamePolicy({id:pol,role:arrPol[pol]}))
  //   })
  //   console.log('Done Successfully!',policies)

  // }

  return (
    <>
      {/* <Navbar
        searchBar={true}
        value={searchVal}
        onChange={(e) => setSearchVal(e.target.value)}
        fromDate={fromDate}
        setFromDate={setFromDate}
        toDate={toDate}
        setToDate={setToDate}
      />
      <div id="main-grp-policy">
        <div id="grp-container">
          <div className="table-item table-header">Role</div>
          <div className="table-item table-header">Dashboard</div>
          <div className="table-item table-header">IAM</div>
          <div className="table-item table-header">Buyers</div>
          <div className="table-item table-header">Sellers</div>
          <div className="table-item table-header">Listings</div>
          <div className="table-item table-header">Meetings</div>
          <div className="table-item table-header">Deals</div>
          <div className="table-item table-header">Blogs</div>
          <div className="table-item table-header">Action</div>
          {policies.map((role, key) => {
            return (
              <React.Fragment key={key}>
                <div className="table-item">
                <input id={`grp-pol-${key}`} type="text" defaultValue={role.role} onChange={()=>trackChange(key,arrPol)} className="fw-semibold" style={{backgroundColor:"transparent", border:"none"}} />
                </div>
                <div className="table-item">
                  <div className="toggles">
                    <div className="toggle-wrapper">
                      <div
                        className={`slide-button ${role.dashboard===null && "disabled"} ${role.dashboard && "active"}`}
                        data-test="toggle-in-app-3"
                        onClick={(e) => handleToggle(e)}
                      />
                    </div>
                  </div>
                </div><div className="table-item">
                  <div className="toggles">
                    <div className="toggle-wrapper">
                      <div
                        className={`slide-button ${role.iam===null && "disabled"} ${role.iam && "active"}`}
                        data-test="toggle-in-app-3"
                        onClick={(e) => handleToggle(e)}
                      />
                    </div>
                  </div>
                </div><div className="table-item">
                  <div className="toggles">
                    <div className="toggle-wrapper">
                      <div
                        className={`slide-button ${role.buyers===null && "disabled"} ${role.buyers && "active"}`}
                        data-test="toggle-in-app-3"
                        onClick={(e) => handleToggle(e)}
                      />
                    </div>
                  </div>
                </div><div className="table-item">
                  <div className="toggles">
                    <div className="toggle-wrapper">
                      <div
                        className={`slide-button ${role.sellers===null && "disabled"} ${role.sellers && "active"}`}
                        data-test="toggle-in-app-3"
                        onClick={(e) => handleToggle(e)}
                      />
                    </div>
                  </div>
                </div><div className="table-item">
                  <div className="toggles">
                    <div className="toggle-wrapper">
                      <div
                        className={`slide-button ${role.listings===null && "disabled"} ${role.listings && "active"}`}
                        data-test="toggle-in-app-3"
                        onClick={(e) => handleToggle(e)}
                      />
                    </div>
                  </div>
                </div><div className="table-item">
                  <div className="toggles">
                    <div className="toggle-wrapper">
                      <div
                        className={`slide-button ${role.meetings===null && "disabled"} ${role.meetings && "active"}`}
                        data-test="toggle-in-app-3"
                        onClick={(e) => handleToggle(e)}
                      />
                    </div>
                  </div>
                </div><div className="table-item">
                  <div className="toggles">
                    <div className="toggle-wrapper">
                      <div
                        className={`slide-button ${role.deals===null && "disabled"} ${role.deals && "active"}`}
                        data-test="toggle-in-app-3"
                        onClick={(e) => handleToggle(e)}
                      />
                    </div>
                  </div>
                </div><div className="table-item">
                  <div className="toggles">
                    <div className="toggle-wrapper">
                      <div
                        className={`slide-button ${role.blogs===null && "disabled"} ${role.blogs && "active"}`}
                        data-test="toggle-in-app-3"
                        onClick={(e) => handleToggle(e)}
                      />
                    </div>
                  </div>
                </div>
                <div className="table-item d-flex gap-2">
                  <BsPlusCircle role="button" size={25} className="text-primary" onClick={()=>dispatch(addPolicy())}/>
                  <AiOutlineDelete role="button" size={25}  color="red" onClick={()=>dispatch(removePolicy({id:key}))} />
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div> */}
    </>
  );
}
