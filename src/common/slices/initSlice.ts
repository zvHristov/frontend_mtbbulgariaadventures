import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitState {
    locale: string;
}

const initialState: InitState = {
    locale: '',
};

const initSlice = createSlice({
    name: 'init',
    initialState,
    reducers: {
        setLocale: (state, action: PayloadAction<string>) => {
            state = {
                 locale: action.payload,
               };
               return state;
        },
    },
});

export const { setLocale } = initSlice.actions;
export default initSlice.reducer;
