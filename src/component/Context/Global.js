import React,{createContext,useReducer} from 'react'
import AppReducer from './AppReducer'

// Initial State
const initialState = { 
    users:[
        {id:3, name: 'Asif Hasan',homeTown:'Jashore',occupation:'job seeker'},
        {id:2, name: 'Sabbir Hossain',homeTown:'Jashore',occupation:'job seeker'},
        {id:1, name: 'Faysal',homeTown:'Jashore',occupation:'job seeker'},
    ]
};

// create Context
export const GlobalContext = createContext(initialState);

//Provider Component
export const GlobalProvider = ({children})=>{
    const [state, dispatch] = useReducer(AppReducer, initialState);


    //Actions
    const removeUser = (id)=>{
        dispatch({
            type: "REMOVE_USER",
            payload:id,
        })
    }

    const addUser = (user)=>{
        dispatch({
            type: "ADD_USER",
            payload:user,
        })
    }
    const editUser = (user)=>{
        dispatch({
            type:'EDIT_USER',
            payload:user
        })
    }

    return(
        <GlobalContext.Provider value={{
            users: state.users,
            removeUser,
            addUser,
            editUser,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

