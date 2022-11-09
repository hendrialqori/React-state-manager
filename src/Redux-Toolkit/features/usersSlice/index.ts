import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface UsersTypes {
    users: Array<{name: string}>
    loading: 'netral' | 'pending' | 'fullfield' | 'reject'
}

const initialState: UsersTypes = {
    users: [],
    loading: 'netral'
}

export const getUserFromAPI = createAsyncThunk(
    'users/getUserFromApi',
    async () => {
        const endpoint = "https://jsonplaceholder.typicode.com/users"
        const request = await fetch(endpoint)
        if(!request.ok) {
            throw new Error('Something went wrong!')
        }

        return (await request.json())
    }
)

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getUserFromAPI.pending, (state, _) => {
            state.loading = 'pending'
        })
        builder.addCase(getUserFromAPI.fulfilled, (state, action) => {
            return {
                ...state,
                loading: 'fullfield',
                users: action.payload
            }
        })
    },
})

export default usersSlice.reducer