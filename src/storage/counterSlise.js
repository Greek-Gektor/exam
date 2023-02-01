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
                  throw new Error('Can\'t add officer. Server error.');
              }

            const data = await response.json();
            dispatch(responsibleEmployeesAdded(data));
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
    value: 0,
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
    status: null,
    error: null,
}

export const bicyclesSlice = createSlice({
        name: 'bicycles',
        initialState,
        reducers: {
            responsibleEmployeesAdded(state, action) {
                state.responsibleEmployees.push(action.payload)
            },
        },
        extraReducers: {
            [regNewOfficer.pending]: (state) => {
                state.status = 'loading';
                state.error = null;
            },
            [regNewOfficer.fulfilled]: (state, action) => {
                state.status = 'resolved';
                state.todos = action.payload;
            },
            [regNewOfficer.rejected]: setError,

        }
    }
)

// Action creators are generated for each case reducer function
export const {responsibleEmployeesAdded} = bicyclesSlice.actions

export default bicyclesSlice.reducer