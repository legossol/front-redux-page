import axios from 'axios';

const headers = {
  'Content-type': 'application/json; charset=UTF-8',
  'Accept': '*/*',
  'Access-Control-Allow-Origin': '*',
};

// 페이지네이션을 위한 사용자 목록 가져오기
const getBoardList = (page) => {
  return axios.get(`http://umestory.jhssol.kro.kr:3088/management/board/list?page=${page}`);
};

export default { getBoardList };
