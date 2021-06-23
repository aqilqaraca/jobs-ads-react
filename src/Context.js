import React, { createContext, useState } from 'react'

export const editJob = createContext()

export default function Context({children}) {
    const [edit,setEdit] = useState(false)
    return (
        <div>
            <editJob.Provider value = {{edit,setEdit}}>
                {children}
            </editJob.Provider>
        </div>
    )
}
