import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

window.localStorage.setItem('token', JSON.stringify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzY2ViY2MwYzNlZGY3YmNlZGFmNDk4MiIsImlhdCI6MTY4MTMxNTQzNiwiZXhwIjoxNjgxOTIwMjM2fQ.bfEhAIhjp-q8rdfQbbN17m3XAgE7cn2X6yGY51e4db4"))

export const regNewOfficer = createAsyncThunk(
    'bicycles/regNewOfficer',
    async function ({officer}, {rejectWithValue, dispatch}) {
        try {
            const newOfficer = {
                email: officer.email,
                password: officer.password,
                clientId: officer.clientId,
                firstName: officer.firstName,
                lastName: officer.lastName,
                approved: "",
            };

            const response = await fetch('https://sf-final-project-be.herokuapp.com/api/auth/sign_up', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newOfficer)
            });


            if (!response.ok) {
                throw new Error('Can\'t reg officer. Server error.');
            }

            const data = await response.json();
            await dispatch(responsibleEmployeesAdded(data));


        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const authOfficer = createAsyncThunk(
    'bicycles/authOfficer',
    async function ({authData}, {rejectWithValue, dispatch}) {
        try {
            const authOfficer = {
                email: authData.email,
                password: authData.password,

            };

            const response = await fetch('https://sf-final-project-be.herokuapp.com/api/auth/sign_in', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(authOfficer)
            });
            console.log(response)

            if (!response.ok) {
                throw new Error('Can\'t auth officer. Server error.');
            }

            const data = await response.json();
            await dispatch(authOfficerReducer(data));
            console.log(data)

        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const CreateCaseFromOfficer = createAsyncThunk(
    'bicycles/createCaseFromOfficer',
    async function ({theftCase}, {rejectWithValue, dispatch}) {
        try {
            const CaseFromOfficer = {
                ownerFullName: theftCase.ownerFullName,
                licenseNumber: theftCase.licenseNumber,
                type: theftCase.type,
                color: theftCase.color,
                date: theftCase.date,
                officerID: theftCase.officerID,
                description: theftCase.description

            };

            console.log(CaseFromOfficer)

            const token = JSON.parse(window.localStorage.getItem('token'))

            const response = await fetch('https://sf-final-project-be.herokuapp.com/api/cases/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token,

                },
                body: JSON.stringify(CaseFromOfficer)
            });

            if (!response.ok) {
                throw new Error('Can\'t create case. Server error.');
            }

            const data = await response.json();
            console.log(data)


        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const CreateCaseFromClient = createAsyncThunk(
    'bicycles/createCaseFromOfficer',
    async function ({theftCase}, {rejectWithValue, dispatch}) {
        try {
            const CaseFromClient = {
                ownerFullName: theftCase.ownerFullName,
                licenseNumber: theftCase.licenseNumber,
                type: theftCase.type,
                clientID: theftCase.clientID,
                color: theftCase.color,
                date: theftCase.date,
                description: theftCase.description
            };


            const response = await fetch('https://sf-final-project-be.herokuapp.com/api/public/report', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(CaseFromClient)
            });
            console.log(response)

            if (!response.ok) {
                throw new Error('Can\'t create case. Server error.');
            }

            const data = await response.json();
            console.log(data)


        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const fetchListOfThefts = createAsyncThunk(
    'bicycles/fetchListOfThefts',
    async function(_, {rejectWithValue}) {
        try {

            const token = JSON.parse(window.localStorage.getItem('token'))

            const response = await fetch('https://sf-final-project-be.herokuapp.com/api/cases/', {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + token,
                }
            });

            if (!response.ok) {
                throw new Error('Server Error!');
            }

            const data = await response.json();
            console.log(data)

            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const getSingleTheft = createAsyncThunk(
    'bicycles/getSingleTheft',
    async function ({_Id,setTheftItem}, {rejectWithValue, dispatch}) {
        try {
            const id = _Id
            const token = JSON.parse(window.localStorage.getItem('token'))


            const response = await fetch(`https://sf-final-project-be.herokuapp.com/api/cases/${id}`, {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + token,
                }
            });


            if (!response.ok) {
                throw new Error('Can\'t get case. Server error.');
            }

            const data = await response.json();
            console.log(data)
            setTheftItem(data.data)
            return data;


        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const deleteTheft = createAsyncThunk(
    'bicycles/deleteTheft',
    async function ({_id}, {rejectWithValue}) {
        try {
            const id = _id

            const token = JSON.parse(window.localStorage.getItem('token'))

            const response = await fetch(`https://sf-final-project-be.herokuapp.com/api/cases/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': 'Bearer ' + token,
                }
            });

            if (!response.ok) {
                throw new Error('Can\'t delete case. Server error.');
            }

            const data = await response.json();
            console.log(data)


        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const editTheft = createAsyncThunk(
    'bicycles/editTheft',
    async function ({theftItem}, {rejectWithValue}) {
        try {
            const theftCase = {
                licenseNumber: theftItem.licenseNumber,
            };

            const id = theftItem._id

            const token = JSON.parse(window.localStorage.getItem('token'))

            const response = await fetch(`https://sf-final-project-be.herokuapp.com/api/cases/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token,
                },
                body: JSON.stringify(theftCase)
            });

            if (!response.ok) {
                throw new Error('Can\'t delete case. Server error.');
            }

            const data = await response.json();
            console.log(data)


        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);


const setError = (state, action) => {
    state.status = 'rejected';
    state.error = action.payload;
}



const initialState = {
    
    status: null,
    error: null,
    value: 0,
    token:'',
    authStatus: true,
    authOfficerNow: '',
    responsibleEmployees: [],
    theftReports: [],
    singleTheftReport:{}

}

export const bicyclesSlice = createSlice({
        name: 'bicycles',
        initialState,
        reducers: {
            responsibleEmployeesAdded(state, action) {
                state.responsibleEmployees.push(action.payload)
            },
            authOfficerReducer(state, action) {
                state.authStatus = true
                state.authOfficerNow = action.payload.data.user.email
                console.log(state.authOfficerNow)
                console.log(action.payload)
                console.log(state.authStatus)
            },
            exitAuthOfficerReducer(state) {
                state.authStatus = false
                state.authOfficerNow = ""
                state.token = window.localStorage.setItem('token', JSON.stringify(""))
                console.log(state.authStatus)
                console.log(state.authOfficerNow)
            }

        },
        extraReducers: {
            [regNewOfficer.pending]: (state) => {
                state.status = 'loading';
                state.error = null;
            },
            [regNewOfficer.fulfilled]: (state) => {
                state.status = 'resolved';
            },
            [regNewOfficer.rejected]: setError,
            [fetchListOfThefts.pending]: (state) => {
                state.status = 'loading';
                state.error = null;
            },
            [fetchListOfThefts.fulfilled]: (state,action) => {
                state.status = 'resolved';
                state.theftReports = action.payload.data;
            },
            [fetchListOfThefts.rejected]: setError,
            [getSingleTheft.pending]: (state) => {
                state.status = 'loading';
                state.error = null;
            },
            [getSingleTheft.fulfilled]: (state,action) => {
                state.status = 'resolved';
                state.singleTheftReport = action.payload.data;
            },
            [getSingleTheft.rejected]: setError,
            [deleteTheft.pending]: (state) => {
                state.status = 'loading';
                state.error = null;
            },
            [deleteTheft.fulfilled]: (state,action,) => {
                state.status = 'resolved';
                state.theftReports = state.theftReports.filter(theft => theft.id !== action.payload);
                console.log(state.theftReports)
            },
            [deleteTheft.rejected]: setError,


        }
    }
)

// Action creators are generated for each case reducer function
export const {responsibleEmployeesAdded, authOfficerReducer, exitAuthOfficerReducer} = bicyclesSlice.actions

export default bicyclesSlice.reducer

/*
export const selectTheftById = (state, theftId) =>
    state.bicycles.theftReports.find((theft) => theft._id === theftId)*/
