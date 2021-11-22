import React, { useReducer } from 'react'
const initialState = {
    age: "",
    noOfDoses: "",
    fatigue: "",
    fever: "",
    headache: "",
    stiffness: "",
    vomiting: "",
    daysofsymptom: "",
    limping: "",
    pain: "",
    symptomoptions: null

}

const actions = {
    SETAGE: 'SETAGE',
    SETDOSES: 'SETDOSES',
    SETFATIGUE: 'SETFATIGUE',
    SETFEVER: 'SETFEVER',
    SETHEADACHE: 'SETHEADACHE',
    SETSTIFFNESS: 'SETSTIFFNESS',
    SETVOMITING: 'SETVOMITING',
    SETDAYSOFSYMPTOMS: 'SETDAYSOFSYMPTOMS',
    SETLIMPING: 'SETLIMPING',
    SETPAIN: 'SETPAIN',
    SETSYMPTOMOPTIONS: 'SETSYMPTOMOPTIONS'
}

function reducer(state, action) {
    switch (action.type) {

        case actions.SETAGE:
            return {
                ...state,
                age: action.value
            }
        case actions.SETDAYSOFSYMPTOMS:
            return {
                ...state,
                daysofsymptom: action.value
            }
        case actions.SETDOSES:
            return {
                ...state,
                noOfDoses: action.value
            }
        case actions.SETFATIGUE:
            return {
                ...state,
                fatigue: action.value
            }
        case actions.SETHEADACHE:
            return {
                ...state,
                headache: action.value
            }
        case actions.SETLIMPING:
            return {
                ...state,
                limping: action.value
            }
        case actions.SETVOMITING:
            return {
                ...state,
                vomiting: action.value
            }
        case actions.SETSTIFFNESS:
            return {
                ...state,
                stiffness: action.value
            }
        case actions.SETHEADACHE:
            return {
                ...state,
                headache: action.value
            }
        case actions.SETPAIN:
            return {
                ...state,
                pain: action.value
            }
        case actions.SETSYMPTOMOPTIONS:
            return {
                ...state,
                symptomoptions: action.value
            }
        default:
            return state;
    }
}
export const PolioContext = React.createContext();
function Provider({ children }) {

    const [state, dispatch] = useReducer(reducer, initialState)
    const value = {
        age: state.age,
        symptomoptions: state.symptomoptions,
        noOfDoses: state.noOfDoses,
        fatigue: state.fatigue,
        fever: state.fever,
        headache: state.headache,
        stiffness: state.stiffness,
        vomiting: state.vomiting,
        daysofsymptom: state.daysofsymptom,
        limping: state.limping,
        pain: state.pain,
        getAge: (value) => { dispatch({ type: actions.SETAGE, value }) },
        getDoses: (value) => { dispatch({ type: actions.SETDOSES, value }) },
        getFatigue: (value) => { dispatch({ type: actions.SETFATIGUE, value }) },
        getFever: (value) => { dispatch({ type: actions.SETFEVER, value }) },
        getHeadache: (value) => { dispatch({ type: actions.SETHEADACHE, value }) },
        getStiffness: (value) => { dispatch({ type: actions.SETSTIFFNESS, value }) },
        getVomiting: (value) => { dispatch({ type: actions.SETVOMITING, value }) },
        getDaysofSymptms: (value) => { dispatch({ type: actions.SETDAYSOFSYMPTOMS, value }) },
        getLimping: (value) => { dispatch({ type: actions.SETLIMPING, value }) },
        getPain: (value) => { dispatch({ type: actions.SETPAIN, value }) },
        fillSymptoms: (value) => { dispatch({ type: actions.SETSYMPTOMOPTIONS, value }) },
    }
    return (
        <PolioContext.Provider value={value}>
            {children}
        </PolioContext.Provider>
    )
}

export default Provider