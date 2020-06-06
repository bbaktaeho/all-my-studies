import { useState, useCallback, useReducer } from 'react';

const initialState = {
    username: '',
    email: '',
};

function reducer(state, action) {
    switch (action.type) {
        case 'CHANGE':
            return { ...state, [action.name]: action.value };
        case 'RESET':
            return {
                ...state,
                username: '',
                email: '',
            };
        default:
            return state;
    }
}

function useInputs(initialForm) {
    const [form, dispatch] = useReducer(reducer, initialForm);
    const onChange = useCallback((e) => {
        const { name, value } = e.target;
        dispatch({ type: 'CHANGE', name, value });
    }, []);
    const reset = useCallback(() => {
        dispatch({ type: 'RESET' });
    }, []);
    // const [form, setForm] = useState(initialForm);
    // const onChange = useCallback((e) => {
    //     const { name, value } = e.target;
    //     setForm((form) => ({ ...form, [name]: value }));
    // }, []);
    // const reset = useCallback(() => setForm(initialForm), [initialForm]);

    return [form, onChange, reset];
}

export default useInputs;
