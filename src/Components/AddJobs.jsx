import React,{ useState } from 'react'
import { useDispatch } from 'react-redux'
import { jobsAction } from '../Store/actions/actions';
import { toast } from 'react-toastify';



export default function AddJobs() {
    const [title, setTitle] = useState("")
    const [company, setCompany] = useState("")
    const [salary, setSalary] = useState("")
    const [category, setCategory] = useState("")
    const dispatch = useDispatch()
    
    const send = (e) => {
        e.preventDefault();
        if (!title && !company && !salary && !category) {
            toast.error("fill in all the fields")
            return
        }
        
            dispatch(jobsAction({ title, company, salary, id: Date.now(), category, time: new Date().toLocaleDateString() }))
            setTitle("")
            setCompany("")
            setSalary("")
            setCategory("")
            toast.success("Job added successfully")
        
        

    }
    
    
    return (
        <div className="add-job_block">
            <form className="add-job_form">
                <label>Job title</label>
                <input className="form-control" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                <label>Job Company</label>
                <input className="form-control"  type="text" value={company} onChange={(e) => setCompany(e.target.value)} />
                <label>Job Salary</label>
                <input className="form-control"  type="text" value={salary} onChange={(e) => setSalary(e.target.value)} />
                <label>Job Category</label>
                <input className="form-control"  type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
                <button onClick={send} className="add-btn btn btn-primary">Add</button>
                
            </form>
        </div>
    )
}
