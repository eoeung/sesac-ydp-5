import React from 'react';

export default function RefTraining() {
  // 전체
  const [board, setBoard] = useState([]);
  // 검색 결과값
  const [searchBoard, setSearchBoard] = useState(board);
  // 작성자
  const [author, setAuthor] = useState('');
  // 제목
  const [title, setTitle] = useState('');
  // 작성자 선택값
  const [selectedAuthor, setSelectedAuthor] = useState('');
  // 검색어
  const [searchValue, setSearchValue] = useState('');

  // 작성
  const add = () => {
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

  // 검색
  const search = () => {
    setSearchBoard(
      board.filter((val) => {
        val.author.indexOf(selectedAuthor) > -1 &&
          val.title.indexOf(searchValue) > -1;
      })
    );
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
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        />
        &nbsp; 제목 : &nbsp;
        <input
          type="text"
          value={title}
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
      <select
        onChange={(e) => {
          setSelectedAuthor(e.target.value);
        }}
      >
        <option>작성자</option>
        {board.map((val) => {
          return (
            <option key={val.id} value={val.author}>
              {val.author}
            </option>
          );
        })}
      </select>
      &nbsp;
      <input type="text" placeholder="검색어" /> &nbsp;
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
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {board.map((val) => {
            return (
              <tr>
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
