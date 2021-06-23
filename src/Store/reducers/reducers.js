import { ADD_JOB,DELETE_JOB } from "../actions/actions";
const initialValue = {
    jobs : [
        {id:1, title : "Front end developer", company : "Pasa Bank",salary : "1500",category : "it" , time : new Date().toLocaleDateString()},
        {id:2,title : "Back end developer" , company : "Blue Planet",salary : "2000",category : "it",time : new Date().toLocaleDateString()},
        {id : 3,title : "Designer",company : "Baku Design Academy",salary : "700",category : "Design",time : new Date().toLocaleDateString()}
    ]
}
export const jobsReducer = (state = initialValue,{type,payload}) =>{
   switch (type) {
       case ADD_JOB:
            return {jobs : state.jobs.concat(payload)}
        case DELETE_JOB:
            const deletedJobs = state.jobs.filter(n=>n.id !== payload)
            return {jobs : deletedJobs}    
       default:
           return state
   }
}