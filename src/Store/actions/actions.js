export const ADD_JOB = "ADD_JOB"
export const DELETE_JOB = "DELETE_JOB"
export const EDIT_JOB = "EDIT_JOB"

export const jobsAction = (payload)=>{
    return {
        type : ADD_JOB,
        payload
    }
}
export const jobDeleteAction = (payload)=>{
    return {
        type : DELETE_JOB,
        payload
    }
}
export const jobEditAction = (payload)=>{
    return{
        type : EDIT_JOB,
        payload
    }
}