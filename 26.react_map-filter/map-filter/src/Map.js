import React, { useState, useRef } from 'react';

export default function Map() {
  // 전체
  const [board, setBoard] = useState([]);
  // 검색 결과값
  const [searchBoard, setSearchBoard] = useState(board);
  // 작성자
  const [author, setAuthor] = useState('');
  // 제목
  const [title, setTitle] = useState('');
  // 작성자 선택값
  const [selectedSearchValue, setSelectedSearchValue] = useState('author');
  // 검색어
  const [searchValue, setSearchValue] = useState('');

  // ref 사용
  const authorRef = useRef();
  const titleRef = useRef();

  // 작성
  const add = () => {
    // ref 사용으로 포커스 주기
    if (!author) {
      authorRef.current.focus();
      return;
    }
    if (!title) {
      titleRef.current.focus();
      return;
    }

    setBoard(
      board.concat({
        id: board.length + 1,
        author: author,
        title: title,
      })
    );

    setAuthor('');
    setTitle('');
  };

  // 작성자 선택값
  const selectedSV = (e) => {
    setSelectedSearchValue(e.target.value);
  };

  // 검색
  const search = () => {
    let searchResult = board.filter((val) => {
      console.log(val[selectedSearchValue]);
      console.log(searchValue);
      return val[selectedSearchValue].indexOf(searchValue) > -1;
    });

    setSearchBoard(searchResult);
  };

  return (
    <div>
      <fieldset>
        {/* <legend></legend> */}
        작성자 : &nbsp;
        <input
          type="text"
          placeholder="작성자"
          value={author}
          ref={authorRef}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        />
        &nbsp; 제목 : &nbsp;
        <input
          type="text"
          value={title}
           ref={titleRef}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') add();
          }}
        />
        &nbsp;
        <button onClick={add}>작성</button>
      </fieldset>
      <br />
      <br />
      <select onChange={selectedSV}>
        <option value="author">작성자</option>
        <option value="title">제목</option>
      </select>
      &nbsp;
      <input
        type="text"
        placeholder="검색어"
        onChange={(e) => setSearchValue(e.target.value)}
      />
      &nbsp;
      <button onClick={search}>검색</button> &nbsp;
      <button
        onClick={() => {
          setSearchValue('');
          search();
        }}
      >
        전체
      </button>
      <br />
      <br />
      <h3>전체 목록</h3>
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {board.map((val, idx) => {
            return (
              <tr key={idx}>
                <td>{val.id}</td>
                <td>{val.title}</td>
                <td>{val.author}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <hr />
      <h3>검색 결과</h3>
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {searchBoard.map((val, idx) => {
            return (
              <tr key={idx}>
                <td>{val.id}</td>
                <td>{val.title}</td>
                <td>{val.author}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
