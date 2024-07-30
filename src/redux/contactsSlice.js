import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { fetchContacts } from './contactsOps';
import { addContact } from './contactsOps';
import { deleteContact } from './contactsOps';
import initialContacts from '../../contacts.json';

// const slice = createSlice({
//   name: "contacts",
//   initialState: { items: initialContacts },
//   reducers: {
//     deleteContact(state, action) {
//       return {
//         items: state.items.filter((item) => item.id !== action.payload),
//       };
//     },

//     addContact: {
//       reducer(state, action) {
//         state.items.push(action.payload);
//       },
//       prepare(value) {
//         return {
//           payload: { id: nanoid(5), ...value },
//         };
//       },
//     },
//   },
// });

const slice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
        // return { items: action.payload };
      })
      .addCase(addContact.pending, state => {
        state.loading = true;
        state.error = false;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.loading = false;
      })
      .addCase(addContact.rejected, state => {
        state.error = true;
        state.loading = false;
      })
      .addCase(deleteContact.pending, state => {
        state.loading = true;
        state.error = false;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload.id);
        state.loading = false;
      })
      .addCase(deleteContact.rejected, (state)=>{
        state.error = true;
        state.loading = false;
      })
  },

  // reducers: {
  //   deleteContact(state, action) {
  //     return {
  //       items: state.items.filter(item => item.id !== action.payload),
  //     };
  //   },

  //   addContact: {
  //     reducer(state, action) {
  //       state.items.push(action.payload);
  //     },
  //     prepare(value) {
  //       return {
  //         payload: { id: nanoid(5), ...value },
  //       };
  //     },
  //   },
  // },
});

// export const { deleteContact, addContact } = slice.actions;
export default slice.reducer;
