import React,{useRef} from 'react'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { jobEditAction } from '../Store/actions/actions'

export default function EditJobs() {
    const title_ref = useRef()
    const company_ref = useRef()
    const salary_ref = useRef()
    const category_ref = useRef()
    const { jobs } = useSelector(state => state.jobs)
    const {id} = useParams()
    const dispatch = useDispatch()
    useEffect(()=>{
       const job = jobs.filter(job=>job.id === parseInt(id))
       title_ref.current.value = job[0].title
    company_ref.current.value = job[0].company
    salary_ref.current.value = job[0].salary
      category_ref.current.value = job[0].category
    })
    const edit = (e)=>{
        e.preventDefault()
        const title = title_ref.current.value
        const company = company_ref.current.value
        const salary = salary_ref.current.value
        const category =  category_ref.current.value
        dispatch(jobEditAction({id, title,company,category,salary}))
    }
    return (
        <div className="add-job_block">
            <form className="add-job_form">
                <label>Job title</label>
                <input className="form-control" ref={title_ref} type="text"/>
                <label>Job Company</label>
                <input className="form-control" ref={company_ref} type="text" />
                <label>Job Salary</label>
                <input className="form-control" ref={salary_ref} type="text" />
                <label>Job Category</label>
                <input className="form-control" ref={category_ref} type="text"  />
                <button onClick= {edit} className="add-btn btn btn-primary">Update</button>
                
            </form>
        </div>
    )
}
