import {createSlice} from '@reduxjs/toolkit'

export function getInvoice(array,id) {
    return array.find(
        (invoice) => invoice.id === id
    );
}


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
            id:30,
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
            increment: (state) => {
                // Redux Toolkit allows us to write "mutating" logic in reducers. It
                // doesn't actually mutate the state because it uses the immer library,
                // which detects changes to a "draft state" and produces a brand new
                // immutable state based off those changes
                state.value += 1
            },
            decrement: (state) => {
                state.value -= 1
            },
            incrementByAmount: (state, action) => {
                state.value += action.payload

            }
        }
    }
)

// Action creators are generated for each case reducer function


export default counterSlice.reducer