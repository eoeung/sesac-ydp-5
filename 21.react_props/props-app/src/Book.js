import amond from './amond.jpg';
import './App.css';

const Book = (props) => {
  const { title, author, price, type } = props;


  return (
    <div className='backStyle'>
      <h2 className='titleStyle'>이번주 베스트셀러</h2>
      <img src={amond} alt="에러" className='imgStyle'></img>

      <h2>{title}</h2>
      <p className='descStyle'>
        저자: {author} <br/>
        판매가: {price} <br/>
        구분: {type}
      </p>
    </div>
  );
};

export default Book;
