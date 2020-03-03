import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { VariablePayload } from './actions';

const uuidInEditorReducerSlice = createSlice({
  name: 'uuidInEditor',
  initialState: null,
  reducers: {
    changeToEditorEditMode: (state, action: PayloadAction<VariablePayload>) => {
      return action.payload.name;
    },
    changeToEditorListMode: (state, action: PayloadAction<undefined>) => {
      return null;
    },
  },
});

export const uuidInEditorReducer = uuidInEditorReducerSlice.reducer;

export const { changeToEditorListMode, changeToEditorEditMode } = uuidInEditorReducerSlice.actions;
