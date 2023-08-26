import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Dashboard from '../pages/Dashboard'
import GroupPolicy from '../pages/GroupPolicy'
import Buyers from '../pages/Buyers'
import Sellers from '../pages/Sellers'
import Listings from '../pages/Listings'
import Meetings from '../pages/Meetings'
import Deals from '../pages/Deals'
import Blogs from '../pages/Blogs'
import Articles from '../pages/Blogs/Articles'
import Changelog from '../pages/Blogs/Changelog'
import CreateBlog from '../pages/Blogs/CreateBlog'
import IAM from '../pages/IAM'


function index() {
  return (
    <Routes>
        <Route path="/dashboard" element={<Sidebar><Dashboard /></Sidebar>} />
        <Route path="/iam" element={<Sidebar><IAM /></Sidebar>} />
        <Route path="/group-policy" element={<Sidebar><GroupPolicy /></Sidebar>} />
        <Route path="/buyers" element={<Sidebar><Buyers /></Sidebar>} />
        <Route path="/sellers" element={<Sidebar><Sellers /></Sidebar>} />
        <Route path="/listings" element={<Sidebar><Listings /></Sidebar>} />
        <Route path="/meetings" element={<Sidebar><Meetings /></Sidebar>} />
        <Route path="/deals" element={<Sidebar><Deals /></Sidebar>} />
        <Route path="/blogs" element={<Sidebar><Blogs /></Sidebar>} >
          <Route path='articles' element={<Articles />} />
          <Route path='changelog' element={<Changelog />} />
        </Route>
        <Route path="/create-blog" element={<Sidebar><CreateBlog /></Sidebar>} />
    </Routes>
  )
}

export default index
