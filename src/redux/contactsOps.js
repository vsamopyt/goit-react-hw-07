import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL ="https://66a7134d53c13f22a3ce6759.mockapi.io";

// HTTP GET request

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI)=>{
    try { 
        const response = await axios.get("/contacts"); 
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    } 
})

// HTTP POST request

export const addContact = createAsyncThunk("contacts/addContact", async (newContact, thunkAPI)=>{
   try {
    const response = await axios.post("/contacts", newContact);
    return response.data;
    
   } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
   }
})

//  HTTP DELETE request
export const deleteContact =  createAsyncThunk("contacts/deleteContact", async (deletedId, thunkAPI)=>{
    try {
        const response = await axios.delete(`/contacts/${deletedId}`);
        return response.data
        
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }

})