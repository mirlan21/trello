import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const intitialState = {
  userData: [],
  user: null,
  error: null,
};

export const sendingUserdata = createAsyncThunk(
  'UserData/sentUserdata',
  async function (formData) {
    const user = await fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' +
        'AIzaSyBI4sLD0jBR4yJJqmUiiz-PFxhaNjnTsxU',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      }
    );
    if (!user.ok) {
      user.json().then((formData) => {
        alert(formData.error.message);
        return;
      });
    }
    localStorage.setItem('token', user.idToken);
    return user.json();
  }
);

////                         ////               Here I'm getting a data of users from firebase....
// export const getingUserdata = createAsyncThunk(
//   'UserData/get-users',
//   async function (_, { dispatch }) {
//     try {
//       const res = await fetch(
//         'https://form-project-837f7-default-rtdb.firebaseio.com/form.json'
//       );
//       const users = await res.json();
//       dispatch(getData(users));
//       return users;
//     } catch (e) {
//       console.log(e);
//     }
//   }
// );

export const loginRequest = createAsyncThunk(
  'UserData/login',
  async function (formData) {
    try {
      const user = await fetch(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' +
          'AIzaSyBI4sLD0jBR4yJJqmUiiz-PFxhaNjnTsxU',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );
      

      if (!user.ok) {
        user.json().then((data) => {
          alert(data.error.message)
        } )

        return;
      }

      return user.json();
    } catch (error) {
      alert(error.message);
    }
  }
);



// export const getUsersData = createAsyncThunk();

const userSlice = createSlice({
  name: 'UserData',
  initialState: intitialState,
  extraReducers: {
    [sendingUserdata.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.status = 'success';
    },
    [loginRequest.fulfilled]: (state, action) => {

      state.user = action.payload;
      state.status = 'success';
    },

  },

  reducers: {
    setData(state, action) {
      const formData = action.payload;
      state.userData.push(formData);
      // console.log(formData);
    },

    getData(state, action) {
      const users = action.payload;
      state.userData = users;
      // console.log(formData);
    },
  },
});

export default userSlice;
export const { setData, getData } = userSlice.actions;
