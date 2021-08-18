import { useReducer, useEffect } from 'react'
import { useAuth } from "../contexts/AuthContext"
import { database } from "../firebase"

const ACTIONS = {
    SELECT_PROFILE: "select_profile",
}

function reducer (state, { type, payload }) {
    switch (type) {
        case ACTIONS.SELECT_PROFILE:
            return {
                ... state,
                profile: payload.profile,
            }
        default:
            return state
    }
}

export function useProfile(profileId = null) {
    
    const [state, dispatch] = useReducer(reducer, {
        profileId,
        profile : [],
    })
    
    database.profiles
        .doc(profileId)
        .get()
        .then(doc => {
            dispatch({
                type: ACTIONS.SELECT_PROFILE,
                payload : {
                    profile : database.formatDoc(doc)
                },
            })  
        })
    
    console.log(state)
    return state
}
