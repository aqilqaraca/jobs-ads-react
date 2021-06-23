import React, { useEffect }  from 'react'
import Header from './Components/Header'
import Home from './Components/Home'
import Jobs from './Components/Jobs'
import AddJobs from './Components/AddJobs'
import {Route} from 'react-router-dom'
import JobsDetails from './Components/JobsDetails'
import { ToastContainer} from 'react-toastify';
import EditJobs from './Components/EditJobs'


export default function App() {
  return (
    <div>
      <ToastContainer position="bottom-left"/>
      <Header/>
      <div className="content">
      <Route exact path = "/" component = {Home} />
      <Route path = "/jobs" component = {Jobs} />
      <Route path = "/jobs-add" component = {AddJobs} />
      <Route path = "/jobsdetails/:id" component = {JobsDetails} />
      <Route path = "/jobs-edit/:id" component = {EditJobs} />
      </div>
    </div>
  )
}
