import { createSlice, createSelector } from '@reduxjs/toolkit';
import { useSelector} from "react-redux"
import { nanoid } from 'nanoid';
import { fetchContacts } from './contactsOps';
import { addContact } from './contactsOps';
import { deleteContact } from './contactsOps';
import initialContacts from '../../contacts.json';
import {selectFilter} from "./filtersSlice"

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
      .addCase(fetchContacts.rejected, (state) => {
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

export const selectIsLoaded =(state) => state.contacts.loading;
export const selectIsError =(state) => state.contacts.error;
export const selectContacts =(state) => state.contacts.items;


export const selectFilteredContacts = createSelector([selectContacts, selectFilter], (contactList, selectNameFilter)=>{
  console.log(contactList,selectNameFilter );
  
  return  contactList.filter((item) =>
    item.name.toLowerCase().includes(selectNameFilter.toLowerCase())
  );
})


// export const  selectFilteredContacts=(state) =>{
  
//   const contactList = selectContacts(state);
//   const selectNameFilter = selectFilter(state);
//   console.log(contactList);

// return   contactList.filter((item) =>
//     item.name.toLowerCase().includes(selectNameFilter.toLowerCase())
//   );
// }


// const contactList = useSelector((state) => state.contacts.items);


export default slice.reducer;
