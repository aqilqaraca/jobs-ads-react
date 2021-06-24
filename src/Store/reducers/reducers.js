import { ADD_JOB,DELETE_JOB,EDIT_JOB } from "../actions/actions";
const initialValue = {
    jobs : [
        {id:1, title : "Front end developer", company : "Pasa Bank",salary : "1500",category : "it" , time : new Date().toLocaleDateString()},
        {id:2,title : "Back end developer" , company : "Blue Planet",salary : "2000",category : "it",time : new Date().toLocaleDateString()},
        {id : 3,title : "Designer",company : "Baku Design Academy",salary : "700",category : "Design",time : new Date().toLocaleDateString()},
        {id : 4,title : "Designer",company : "Baku Design Academy",salary : "700",category : "Design",time : new Date().toLocaleDateString()},
        {id : 5,title : "Designer",company : "Baku Design Academy",salary : "700",category : "Design",time : new Date().toLocaleDateString()},
        {id : 6,title : "Designer",company : "Baku Design Academy",salary : "700",category : "Design",time : new Date().toLocaleDateString()}
    ]
}
export const jobsReducer = (state = initialValue,{type,payload}) =>{
   switch (type) {
       case ADD_JOB:
            return {jobs : state.jobs.concat(payload)}
        case DELETE_JOB:
            const deletedJobs = state.jobs.filter(n=>n.id !== payload)
            return {jobs : deletedJobs}
        case EDIT_JOB:
            const newJobs = [...state.jobs]
            const job = newJobs.filter(job=>job.id === parseInt(payload.id))
            job[0].title = payload.title
            job[0].company = payload.company
            job[0].salary = payload.salary
            job[0].category = payload.category
            return {
                ...state,
                jobs : newJobs
            } 
       default:
           return state
   }
}