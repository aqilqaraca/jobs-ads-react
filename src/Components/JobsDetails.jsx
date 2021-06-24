import React from 'react'
import { useParams } from 'react-router'
import { useSelector } from 'react-redux'

export default function JobsDetails() {
    const { jobs } = useSelector(state => state.jobs)
    const { id } = useParams()
    return (
        <div>
            {
                jobs.map(job => {
                    if (job.id === parseInt(id)) {
                        return (
                            <div className="card text-center">
                                <div className="card-header">
                                    {job.title}
                                </div>
                                <div className="card-body">
                                    <h5 class="card-title">{job.company}</h5>
                                    <p class="card-text">{job.salary + ' : AZN'}</p>
                                    <p class="card-text text-uppercase">{job.category}</p>
                                </div>
                                <div class="card-footer text-muted">
                                    {job.time}
                                </div>
                            </div>
                        )
                    }
                })
            }
        </div>
    )
}
