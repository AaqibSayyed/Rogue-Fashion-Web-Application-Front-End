import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const userData = createAsyncThunk('user/login', async (input) => {
    let res = await fetch('/login', {
        method: 'POST',
        headers: {
            "content-type": "application/JSON"
        },
        body: JSON.stringify({
            user_email: input.eamil,
            user_password: input.password
        })
    }).catch((error)=>{return {error}})
    
    res= await res.json()

    if (res.error) {
        return alert(res.error)
    }
    return { name: res.data, token: res.token }
})




export const userLogout = createAsyncThunk('user/logout', async (token) => {
    let userLogout  = await fetch('http://localhost:5000/logout', {
        method:'PUT', 
        headers:{
            'Authorization': `Bearer ${token}` 
        }, 
        }).catch((error)=>{return {error}})

        userLogout= await userLogout.json()   

        if (userLogout.error) {
           return alert(userLogout.error)
        }
        
        return { userLogout }

})

const getLocalDataUser = () => {
    const UserLoggedIn = JSON.parse(localStorage.getItem('UserLoggedIn'))


    if (!UserLoggedIn || (UserLoggedIn && !UserLoggedIn[0].userLoggedIn)) {
        return {}
    }
    else {
        return { name: UserLoggedIn[1].name, token: UserLoggedIn[1].token }
    }
}

const getLocalDataStatus = () => {
    const UserLoggedIn = JSON.parse(localStorage.getItem('UserLoggedIn'))
    if (!UserLoggedIn || (UserLoggedIn && !UserLoggedIn[0].userLoggedIn)) {
        return false
    }
    else {
        return true
    }
}

const initialState = {
    isloading: false,
    user_login: getLocalDataStatus(),
    userDetails: getLocalDataUser(),
    isError: false
}

const user = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        postDetails: (state, action) => {
            return state
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(userData.pending, (state, action) => {
                state.isloading = true
            })
            .addCase(userData.fulfilled, (state, action) => {
                state.isloading = false
                if(action.payload && (action.payload.name || action.payload.token))
                {
                state.user_login = true
                state.userDetails.name = action.payload.name
                state.userDetails.token = action.payload.token
            }
            })
            .addCase(userData.rejected, (state, actions) => {
                state.isloading = false
                state.isError = true

            })
            .addCase(userLogout.pending, (state, action) => {
                state.isloading = true
            })
            .addCase(userLogout.fulfilled, (state, action) => {
                state.user_login = false
                state.userDetails = {}
                localStorage.setItem("UserLoggedIn", JSON.stringify(null))
            })
            .addCase(userLogout.rejected, (state, action) => {
                state.isloading = false
                state.isError = true
            })
    }
})


export default user.reducer





