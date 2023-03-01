import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'


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


const setError = (state, action) => {
    state.status = 'rejected';
    state.error = action.payload;
}

const initialState = {
    status: null,
    error: null,
    value: 0,
    token:"",
    authStatus:false,
    authOfficerNow:"",
    responsibleEmployees: [],
    theftReports: [{
        status: 'status',
        licenseNumber: 'licenseNumber',
        type: 'sport',
        ownerFullName: 'ownerFullName',
        clientId: '1',
        createdAt: 'date',
        updatedAt: 'date',
        color: 'color',
        date: 'date',
        officer: 'officer',
        description: 'Че за кража',
        resolution: 'resolution',
    }],

}

export const bicyclesSlice = createSlice({
        name: 'bicycles',
        initialState,
        reducers: {
            responsibleEmployeesAdded(state, action) {
                state.responsibleEmployees.push(action.payload)
            },
            authOfficerReducer(state,action){
                state.token = window.localStorage.setItem('token', JSON.stringify(action.payload.data.token))
                state.authStatus = true
                state.authOfficerNow = action.payload.data.user.email
                console.log(state.authOfficerNow)
                console.log(action.payload)
                console.log(window.localStorage.getItem('token'))
                console.log(state.authStatus)
            },
            exitAuthOfficerReducer(state){
                state.authStatus = false
                state.authOfficerNow=""
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

        }
    }
)

// Action creators are generated for each case reducer function
export const {responsibleEmployeesAdded,authOfficerReducer,exitAuthOfficerReducer} = bicyclesSlice.actions

export default bicyclesSlice.reducer