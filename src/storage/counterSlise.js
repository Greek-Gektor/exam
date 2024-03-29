import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

/*const uniId = "682f42d6-8751-11ed-a1eb-0242ac120002"*/

window.localStorage.setItem('token', JSON.stringify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzY2ViY2MwYzNlZGY3YmNlZGFmNDk4MiIsImlhdCI6MTY4NTY0OTcxMywiZXhwIjoxNjg2MjU0NTEzfQ.2WDvZh2RB0nEDwJDuBhn5r1r9-JB2moxjliApQ58rLM"))


function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
}

export function formatDate(date) {
    return [
        date.getFullYear(),
        padTo2Digits(date.getMonth() + 1),
        padTo2Digits(date.getDate()),
    ].join('-');
}





/*export const regNewOfficer = createAsyncThunk(
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
);*/

export const regNewOfficer = createAsyncThunk(
    'bicycles/regNewOfficer',
    async function ({data}, {rejectWithValue}) {

        const officerData = data

        try {
            const newOfficer = {
                email: officerData.email,
                password: officerData.password,
                clientId: officerData.clientId,
                firstName: officerData.firstName,
                lastName: officerData.lastName,
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
            console.log(data)

        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const authOfficer = createAsyncThunk(
    'bicycles/authOfficer',
    async function ({data}, {rejectWithValue, dispatch}) {

        const authData = data;
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

/*export const CreateCaseFromOfficer = createAsyncThunk(
    'bicycles/createCaseFromOfficer',
    async function ({theftCase}, {rejectWithValue, dispatch}) {
        try {

            const CaseFromOfficer = {
                ownerFullName: theftCase.ownerFullName,
                licenseNumber: theftCase.licenseNumber,
                type: theftCase.type,
                color: theftCase.color,
                date: theftCase.date,
                description: theftCase.description

            };

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
            console.log(data.data.date)



        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);*/

export const CreateCaseFromOfficerClone = createAsyncThunk(
    'bicycles/CreateCaseFromOfficerClone',
    async function ({data}, {rejectWithValue}) {

        const dataTheft = data

        try {
            const CaseFromOfficer = {
                ownerFullName: dataTheft.ownerFullName,
                licenseNumber: dataTheft.licenseNumber,
                type: dataTheft.type,
                color: dataTheft.color,
                date: dataTheft.date,
                description: dataTheft.description

            };

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
            console.log(data.data.date)



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
    async function (_, {rejectWithValue}) {
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

/*export const getSingleTheft = createAsyncThunk(
    'bicycles/getSingleTheft',
    async function ({_Id, setTheftItem}, {rejectWithValue, dispatch}) {
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
);*/

export const getSingleTheft = createAsyncThunk(
    'bicycles/getSingleTheft',
    async function ({_Id, setTheftItem,reset}, {rejectWithValue, dispatch}) {
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
            reset({date:formatDate(new Date(data.data.date))})
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

export const editTheftClone = createAsyncThunk(
    'bicycles/editTheftClone',
    async function ({data, id}, {rejectWithValue}) {
        try {

            const update ={
                ownerFullName: data.ownerFullName,
                licenseNumber: data.licenseNumber,
                color:data.color,
                status:data.status,
                type:data.type,
                description:data.description,
                date:data.date
            }

            const token = JSON.parse(window.localStorage.getItem('token'))

            const response = await fetch(`https://sf-final-project-be.herokuapp.com/api/cases/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token,
                },
                body: JSON.stringify(update)
            });

            if (!response.ok) {
                throw new Error('Can\'t edit case. Server error.');
            }

            /*const data = await response.json();*/
            console.log(response)



        } catch (error) {
            console.log(error)
            return rejectWithValue(error.message);
        }
    }
);

export const fetchListOfOfficers = createAsyncThunk(
    'bicycles/fetchListOfOfficers',
    async function (_, {rejectWithValue}) {
        try {

            const token = JSON.parse(window.localStorage.getItem('token'))

            const response = await fetch('https://sf-final-project-be.herokuapp.com/api/officers/', {
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

            return data.officers;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);
export const createOfficer = createAsyncThunk(
    'bicycles/createOfficer',
    async function ({data}, {rejectWithValue}) {

        const dataOfficer = data

        try {
            const officer = {
                email: dataOfficer.email,
                password: dataOfficer.password,
                firstName: dataOfficer.firstName,
                lastName: dataOfficer.lastName,
                approved: dataOfficer.approved,

            };

            const token = JSON.parse(window.localStorage.getItem('token'))

            const response = await fetch('https://sf-final-project-be.herokuapp.com/api/officers', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token,

                },
                body: JSON.stringify(officer)
            });

            if (!response.ok) {
                throw new Error('Can\'t create officer. Server error.');
            }

            const data = await response.json();
            console.log(data)

        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const getSingleOfficer = createAsyncThunk(
    'bicycles/getSingleOfficer',
    async function ({_Id, setOfficerItem,setOfficerItemClone,reset}, {rejectWithValue, dispatch}) {
        try {
            const id = _Id
            const token = JSON.parse(window.localStorage.getItem('token'))


            const response = await fetch(`https://sf-final-project-be.herokuapp.com/api/officers/${id}`, {
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

            setOfficerItem(data.data)

            reset({
                approved: data.data.approved,
            })

            return data
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const editOfficer = createAsyncThunk(
    'bicycles/editOfficer',
    async function ({data, id}, {rejectWithValue}) {
        try {

            const update ={
                firstName: data.firstName,
                lastName: data.lastName,
                approved: data.approved
            }
            console.log(update)

            const token = JSON.parse(window.localStorage.getItem('token'))

            const response = await fetch(`https://sf-final-project-be.herokuapp.com/api/officers/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token,
                },
                body: JSON.stringify(update)
            });

            if (!response.ok) {
                throw new Error('Can\'t edit officer. Server error.');
            }

            /*const data = await response.json();*/
            console.log(response)



        } catch (error) {
            console.log(error)
            return rejectWithValue(error.message);
        }
    }
);

export const deleteOfficer = createAsyncThunk(
    'bicycles/deleteOfficer',
    async function ({_id}, {rejectWithValue}) {
        try {
            const id = _id

            const token = JSON.parse(window.localStorage.getItem('token'))

            const response = await fetch(`https://sf-final-project-be.herokuapp.com/api/officers/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': 'Bearer ' + token,
                }
            });

            if (!response.ok) {
                throw new Error('Can\'t delete officer. Server error.');
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
    token: '',
    authStatus: true,
    authOfficerNow: '',
    responsibleOfficers: [],
    theftReports: [],
    singleTheftReport: {},
    defaultValueOfDate:{}

}

export const bicyclesSlice = createSlice({
        name: 'bicycles',
        initialState,
        reducers: {
            /*responsibleEmployeesAdded(state, action) {
                state.responsibleEmployees.push(action.payload)
            },*/
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
            [CreateCaseFromOfficerClone.pending]: (state) => {
                state.status = 'loading';
                state.error = null;
            },
            [CreateCaseFromOfficerClone.fulfilled]: (state) => {
                state.status = 'resolved';
            },
            [CreateCaseFromOfficerClone.rejected]: setError,
            [fetchListOfThefts.pending]: (state) => {
                state.status = 'loading';
                state.error = null;
            },
            [fetchListOfThefts.fulfilled]: (state, action) => {
                state.status = 'resolved';
                state.theftReports = action.payload.data;
                console.log(action.payload.data)
            },
            [fetchListOfThefts.rejected]: setError,
            [getSingleTheft.pending]: (state,action) => {
                state.status = 'loading';
                state.error = null;
            },
            [getSingleTheft.fulfilled]: (state, action) => {
                state.status = 'resolved';
                state.singleTheftReport = action.payload.data;
                state.defaultValueOfDate = formatDate(new Date(action.payload.data.date))


            },
            [getSingleTheft.rejected]: setError,
            [deleteTheft.pending]: (state) => {
                state.status = 'loading';
                state.error = null;
            },
            [deleteTheft.fulfilled]: (state, action,) => {
                state.status = 'resolved';
                state.theftReports = state.theftReports.filter(theft => theft.id !== action.payload);
                console.log(state.theftReports)
            },
            [deleteTheft.rejected]: setError,
            [editTheftClone.pending]: (state) => {
                state.status = 'loading';
                state.error = null;
            },
            [editTheftClone.fulfilled]: (state) => {
                state.status = 'resolved';
            },
            [editTheftClone.rejected]: setError,
            [fetchListOfOfficers.pending]: (state) => {
                state.status = 'loading';
                state.error = null;
            },
            [fetchListOfOfficers.fulfilled]: (state, action) => {
                state.status = 'resolved';
                state.responsibleOfficers = action.payload;
                console.log(action.payload)
                console.log(state.responsibleOfficers)

            },
            [fetchListOfOfficers.rejected]: setError,


        }
    }
)

// Action creators are generated for each case reducer function
export const {responsibleEmployeesAdded, authOfficerReducer, exitAuthOfficerReducer} = bicyclesSlice.actions

export default bicyclesSlice.reducer

/*
export const selectTheftById = (state, theftId) =>
    state.bicycles.theftReports.find((theft) => theft._id === theftId)*/
