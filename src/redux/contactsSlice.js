import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import initialContacts from "../../contacts.json";

const slice = createSlice({
  name: "contacts",
  initialState: { items: initialContacts },
  reducers: {
    deleteContact(state, action) {
      return {
        items: state.items.filter((item) => item.id !== action.payload),
      };
    },

    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(value) {
        return {
          payload: { id: nanoid(5), ...value },
        };
      },
    },
  },
});

export const { deleteContact, addContact } = slice.actions;
export default slice.reducer;
