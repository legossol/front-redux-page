import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import boardService from "../service/Board.service";

// 페이지네이션을 위한 AsyncThunk
export const getBoradList = createAsyncThunk("getBoardListWithPagination", async (page = 1) => {
  const response = await boardService.getBoardList(page);
  return response.data; // 페이지별 데이터 반환
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    loading: 'idle',
    users: [],  // 사용자 리스트 데이터
    pageResult: {
      dtoList: [],  // 실제 리스트
      page: 1,
      pageList: [],  // 페이지네이션
      start: 1,
      end: 1,
      prev: false,
      next: false,
    },
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBoradList.fulfilled, (state, { payload }) => {
        state.users = payload.dtoList; // 페이지에 맞는 데이터 저장
        state.pageResult = payload.pageResult; // 페이지네이션 정보 저장
        state.loading = 'idle';
      })
      .addCase(getBoradList.pending, (state) => {
        state.loading = 'loading'; // 로딩 중 상태
      })
      .addCase(getBoradList.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
