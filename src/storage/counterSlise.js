import {createSlice} from '@reduxjs/toolkit'



const initialState = {
    value: 0,
    responsibleEmployees: [
        {
            id:1,
            email: 'email',
            firstName: 'Олег',
            lastName: 'lastName',
            password: 'password',
            clientId: 'clientId',
            approved: true
        },
        {
            id:2,
            email: 'email',
            firstName: 'Не Олег',
            lastName: 'lastName',
            password: 'password',
            clientId: 'clientId',
            approved: true
        },
    ],
    theftReports: [
        {
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
        }
    ]
}

export const counterSlice = createSlice({
        name: 'counter',
        initialState,
        reducers: {
            postAdded(state, action) {
                state.responsibleEmployees.push(action.payload)
            },
        }
    }
)

// Action creators are generated for each case reducer function
export const { postAdded } = counterSlice.actions

export default counterSlice.reducer