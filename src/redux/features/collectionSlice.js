import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
 
const initialState = {
    items:JSON.parse(localStorage.getItem('collections')) || [],
}
const collectionSlice = createSlice({
    name: "collection",
    initialState,
    reducers: {
        addCollection: (state, action) => {
            const alreadyExists = state.items.find(item => item.id === action.payload.id);
            if (!alreadyExists) {
                state.items.push(action.payload);
                localStorage.setItem('collections', JSON.stringify(state.items));
            }
        },
        removeCollection: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
            localStorage.setItem('collections', JSON.stringify(state.items));
        },
        clearCollections: (state) => {
            state.items = [];
            localStorage.setItem('collections', JSON.stringify(state.items));
        },
        addedToast: () => {
            toast.success('Added to Collections',{
                position: 'top-center',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: 'dark',
                transition: 'slide',
            });
        },
        removeToast: () => {
            toast.success('Removed from Collections',{
                position: 'top-center',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: 'dark',
                transition: 'slide',
            });
        },

    },
});

export const { addCollection, removeCollection, clearCollections,addedToast, removeToast } = collectionSlice.actions;
export default collectionSlice.reducer;