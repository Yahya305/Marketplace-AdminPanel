import React from "react";
import { BsPlusLg } from "react-icons/bs";
import { Outlet, useNavigate } from "react-router-dom";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar"
import "./index.css";

export default function index() {
  const navigate = useNavigate();

  return (
    <>
    <Navbar />
      <Outlet />
      <div id="create-blog" onClick={() => navigate("/create-blog")}>
        <BsPlusLg size={35} />
      </div>
    </>
  );
}
