import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBoradList } from './../reducer/Board.reducer'; // reducer.js에서 작성한 액션 임포트

const BoardList = () => {
  const dispatch = useDispatch();
  const { users, pageResult, loading, error } = useSelector((state) => state.user); // redux 상태 가져오기

  useEffect(() => {
    dispatch(getBoradList(1)); // 페이지 1을 처음 로딩
  }, [dispatch]);

  // 페이지네이션 버튼 클릭 시
  const handlePageChange = (page) => {
    dispatch(getBoradList(page));
  };

  // 로딩 및 에러 상태 처리
  if (loading === 'loading') {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  const userList = users || [];
  const currentPageResult = pageResult || { prev: false, next: false, pageList: [], page: 1 };
  console.log('gjgj');
  console.log(currentPageResult);
  return (
    <div>
         {currentPageResult.pageList.length === 0 ? (
        <div>작성된 내역이 없습니다.</div> 
      ) : (
        <>
      <table>
        <thead>
          <tr>
            <th>순번</th>
            <th>제목</th>
            <th>작성자</th>
            <th>작성일</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user, index) => (
            <tr key={user.id}>
              <td>{(currentPageResult.page - 1) * 10 + index + 1}</td> {/* 순번 계산 */}
              <td>{user.title}</td>
              <td>{user.author}</td>
              <td>{user.createdDate}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 페이지네이션 */}
      <div>
        <button
          onClick={() => handlePageChange(pageResult.page - 1)}
          disabled={!currentPageResult.prev}
        >
          이전
        </button>
        {currentPageResult.pageList.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            disabled={pageResult.page === pageNumber}
          >
            {pageNumber}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(pageResult.page + 1)}
          disabled={!currentPageResult.next}
        >
          다음
        </button>
        
      
      </div>
      </>
      )}
      </div>
  );
};

export default BoardList;
