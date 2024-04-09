
import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

import { fetchContacts } from "../contactsOps";






const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
   //     isLoading: false,
    // error: null,
  reducers: {
    addContact: {
      reducer: (state, { payload }) => {
        state.push(payload);
      //   {
      //     fetchingInProgress(state) {
      //       state.isLoading = true;
      //     },
      //     fetchingSuccess(state, action) {
      //       state.isLoading = false;
      //       state.error = null;
      //       state.items = action.payload;
      //     },
      //     fetchingError(state, action) {
      //       state.isLoading = false;
      //       state.error = action.payload;
      //     },
      //   },
      // });
      },
extraReucers:(builder)=>builder
.addCase(fetchContacts.pending, ()=>{})
.addCase(fetchContacts.fulfilled,()=>{})
.addCase(fetchContacts.rejected,()=>{}),



      prepare: data => {
        return {
          payload: {
            id: nanoid(),
            ...data,
          },
        };
      },
    },
    deleteContact: (state, { payload }) =>
      state.filter(item => item.id !== payload),
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;

// export const { fetchingInProgress, fetchingSuccess, fetchingError } =
//   tasksSlice.actions;






// нова логіка
// src/redux/tasksSlice.js

// import { createSlice } from "@reduxjs/toolkit";
// import { fetchTasks } from "./operations";

// const tasksSlice = createSlice({
//   name: "tasks",
//   initialState: {
//     items: [],
//     isLoading: false,
//     error: null,
//   },
//   extraReducers: builder => {
//     builder
//       .addCase(fetchTasks.pending, (state, action) => {
//         state.isLoading = true;
//       })
//       .addCase(fetchTasks.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         state.items = action.payload;
//       })
//       .addCase(fetchTasks.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export const tasksReducer = tasksSlice.reducer;







// дз конспект

// {
//   contacts: {
//     items: [],
//     loading: false,
//     error: null
//   },
//   filters: {
// 		name: ""
// 	}
// }