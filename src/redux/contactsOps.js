import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// import {
//     fetchingInProgress,
//     fetchingSuccess,
//     fetchingError,
//   } from "./tasksSlice";
  
  axios.defaults.baseURL = "https://661573deb8b8e32ffc7affc8.mockapi.io";
  
export const fetchContacts = createAsyncThunk("contacts/fetchAll",
async (_, thunkAPI) => {
  try {
    const response = await axios.get("/contacts");
    return response.data;
  } catch (error) {
        return thunkAPI.rejectWithValue(error);
       }
     }
   );
    





// нова логіка 
// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// axios.defaults.baseURL = "https://661573deb8b8e32ffc7affc8.mockapi.io";

// export const fetchContacts = createAsyncThunk(
//   "contacts/fetchAll",

// export const addContact == createAsyncThunk(
//     "contacts/addContact"

// export const deleteContact == createAsyncThunk(
//     "contacts/deleteContact"
//   // Використовуємо символ підкреслення як ім'я першого параметра,
//   // тому що в цій операції він нам не потрібен
//   async (_, thunkAPI) => {
//     try {
//       const response = await axios.get("/tasks");
//       // При успішному запиті повертаємо проміс із даними
//       return response.data;
//     } catch (e) {
//       // При помилці запиту повертаємо проміс
//       // який буде відхилений з текстом помилки
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );






// payloadCreator(arg, thunkAPI)