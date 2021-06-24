import React ,{useContext}from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { editJob } from '../Context'
import { jobDeleteAction } from '../Store/actions/actions'



export default function Home() {
    const { jobs } = useSelector(state => state.jobs)
    const dispatch = useDispatch()
    const {setEdit} = useContext(editJob)
    const deleteJob = (id)=>{
        dispatch(jobDeleteAction(id))
    }
    const edit = ()=>{
        setEdit(true)
    }
    return (
        <div>
            <div className="col-12">
                <div className="row">
                    {
                    jobs.slice(jobs.length-4,jobs.length).map(job => (
                        <div key={job.id} className="col-6">
                                    <div className="jobs-block">
                                        <div className="job-block-header">
                                            <h4>{job.title}</h4>
                                            <div className="crud">
                                                <Link to={`/jobsdetails/${job.id}`}>Info</Link>
                                                <Link onClick={edit} to={`/jobs-edit/${job.id}`}>Edit</Link>
                                                <Link onClick={()=>deleteJob(job.id)}>Delete</Link>
                                            </div>
                                        </div>
                                        <h3>{job.company}</h3>
                                        <i className="fa fa-clock-o"></i><span>{job.time}</span>
                                        <i className="fa fa-list-alt"></i><span style={{textTransform:"uppercase"}}>{job.category}</span>
                                    </div>
                                </div>
                        ))
                        
                    }

                </div>
            </div>
        </div>
    )
}
