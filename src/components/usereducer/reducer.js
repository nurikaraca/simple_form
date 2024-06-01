
const initialFormState = {
    name: "",
    surname: "",
    username: "",
    email: "",
    gender: "",
}
const formReducer = (state, action) => {
    switch (action.type) {
        case "SET_FORM_DATA":
                return { ...state, ...action.payload };
        default:
            throw new Error(`Unknown action type: ${action.type}`);


    }
}


export { formReducer, initialFormState };