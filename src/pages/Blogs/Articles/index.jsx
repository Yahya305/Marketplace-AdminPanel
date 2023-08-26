import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useParams } from "react-router-dom";
import "./index.css"

export default function index() {
    const mockCard=[
        {
            title:'How to Verify Your ID',
            desc: "Verifying your identity is an important part of buying and selling on the Empire Flippers marketplace. A big reason why we're trusted by our customers is the protection that we provide. This allows us to […]",
            url:"verify-id"
          },{
              title:'FAQ on Verified Listings and Reviews',
              desc: "The frequently asked question (FAQ) section of your listing page allows you to give more specific information about your business in your own words. After all, no one knows more about your business than you. […]",
              url:"faqs",
          },{
              title:'How to Verify Your Funds',
              desc: "Verifying your funds is the final step to becoming a verified buyer on our marketplace. Verified buyers are trusted by sellers and are able to unlock listings without hesitation. Asking buyers to verify their funds […]",
              url:"verify-funds",
          },{
              title:'How to Relax After Selling a Business',
              desc: "You've done it. You've sold your business, you've gone through the migration process, and now you've been paid out. If you're like the average seller in our marketplace, you were paid over six-figures for the […]",
              url:"relaxation",
          },{
              title:'What is the Repricing Process?',
              desc: "Why Is Your Business Repriced After 30 Days? A lot can happen in 30 days, so we re-evaluate your revenue and expenses each month, to ensure that you’re adequately compensated for your business when it […]",
              url:"repricing-process",
          }
      ]
  return (
    <div className="article">
        <div className="article-content">
        <div>
              <h1
                className="fw-semibold text-center"
                style={{ fontSize: "3.5rem" }}
              >
                Operations
              </h1>
              {/* <div className="article-back-btn" onClick={() => navigate(-1)}>
                <AiOutlineLeft size={20} />
                <div className="fs-5">Back To How It Works</div>
              </div> */}
              <div id="operation-cards">
                {mockCard.map((card,key)=>{
                    return(
                        <div key={key} className="opcard">
                  <img
                    src="https://img.freepik.com/premium-photo/magnifying-glass-passport-with-money-vintage-world-map-view-from_182345-865.jpg"
                    alt="User Guide"
                  />
                  <div className="my-3 px-3 pt-4 mb-0">
                    <h5 className="fw-semibold text-center">
                      {card.title}
                    </h5>
                    <p>
                      {card.desc}
                    </p>
                  </div>
                  <hr style={{ width: "100%" }} />
                  <div className="card-footer">
                    <div
                      role="button"
                      onClick={() => navigate(`/articles/${card.url}`)}
                    >
                      Read More
                    </div>
                    <AiOutlineRight />
                  </div>
                </div>
                    )
                })}
              </div>
            </div>
        </div>
      </div>
  )
}
