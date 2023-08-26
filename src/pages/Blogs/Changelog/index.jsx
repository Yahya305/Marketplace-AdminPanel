import React from "react";
import Modal from 'react-bootstrap/Modal';
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineLeft } from "react-icons/ai";
import "./index.css";

export default function index() {
    const [imgModalShow, setImgModalShow] = React.useState(false);
  const [imgsPreview, setImgsPreview] = React.useState([]);
  const [index, setIndex] = React.useState(0);

  const mockUpdates=[
    {
      type:"Feature Update",
      title:"Messaging Page Redesign [3/4]",
      desc:"We continue the updates to messaging page which will allow users to handle all communication inside their Empire Flippers account. This will make it easier for buyers and sellers to stay on top of their messages. Here's a summary of the updates in this latest release:",
      features:[
        "The layout of the list has been improved",
        "A pending message icon will appear when there's a message from a new user",
        "The last person to have replied to you will now be shown .",
        "Clearly shows what the status of the ticket is; open, closed, or new",
        "Tickets can be created directly through your account"
      ],
      imgs:[
        "https://d1u4v6449fgzem.cloudfront.net/wp-content/uploads/2022/12/31020828/messages-ux-updates1.png",
        "https://d1u4v6449fgzem.cloudfront.net/wp-content/uploads/2022/12/31020832/messages-ux-updates2.png"
      ]
    },{
      type:"Feature Update",
      title:"The improved saved filters feature",
      desc:"New “Create Filter” flow on the marketplace. Saved filters in the sidebar have a new design.",
      features:[
        "The layout of the list has been improved",
        "A pending message icon will appear when there's a message from a new user",
        "The last person to have replied to you will now be shown .",
        "Clearly shows what the status of the ticket is; open, closed, or new",
        "Tickets can be created directly through your account"
      ],
      imgs:[
        "https://d1u4v6449fgzem.cloudfront.net/wp-content/uploads/2022/12/31020828/messages-ux-updates1.png",
      ]
    },
  ]

  return (
    <>
      <div id="changelog-main">
        <div className="year">
          <h1>Empire Flippers Marketplace Changelog 2023</h1>
          <p id="main1">
            Head over to the<a href="+"> Empire Flipper marketplace</a> to
            explore all of our extensive features. Haven't registered yet?
            <a href="+">Click here to do so now</a>— it's quick and easy!
          </p>
          <ul className="btn-year">
            <li>
              <button>
                <a href="+">2023</a>
              </button>
            </li>
            <li>
              <button>
                <a href="+">2022</a>
              </button>
            </li>
            <li>
              <button>
                <a href="+">2021</a>
              </button>
            </li>
            <li>
              <button>
                <a href="+">2020</a>
              </button>
            </li>
          </ul>
        </div>
        <div className="feature1a">
          <h3>November 2022</h3>
          {
            mockUpdates.map((featureItm,key)=>{
              return(
                <div className="carda" key={key}>
            <h2 style={{ fontSize: "0.90rem" }}>{featureItm.type}</h2>
            <h4 style={{ fontSize: "1.1rem" }}>
              {featureItm.title}
            </h4>
            <p id="a1" style={{ fontSize: "1rem" }}>
             {featureItm.desc}
            </p>
            {
              featureItm.features.length>0 &&

            <ul className="dashed">
              {featureItm.features.map((feature,key)=>{
                return(
                  <li key={key}>{feature}</li>
                )
              })}
            </ul>
            }
            <p />
            {
              featureItm.imgs.length>0 &&
            <div className="imagethumbbox">
              {featureItm.imgs.map((imageURL,key)=>{
                return(

                  <img
                  key={key}
                  src={imageURL}
                  className="thumbnailimage"
                  onClick={()=>{
                    setImgModalShow(true)
                    setImgsPreview(featureItm.imgs)
                  }}
                  />
                  )
              })}
              <br />
            </div>

            }
          </div>
              )
            })
          }
          
        </div>
      </div>
      
      <Modal
      show={imgModalShow}
      onHide={() => setImgModalShow(false)}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Preview Feature Update
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="preview-changelog-modal">
        
        <AiOutlineLeft role="button" size={30} onClick={()=>setIndex(index-1)} />
        <img className="preview-changelog-ss" src={imgsPreview[index]} alt="abx" />
        <AiOutlineRight role="button" size={30} onClick={()=>setIndex(index+1)} />
      </Modal.Body>
    </Modal>
    </>
  )
}
