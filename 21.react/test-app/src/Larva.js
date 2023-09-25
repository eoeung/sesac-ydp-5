import './larva.css';
import grass from './grass.png';

function Larva() {
  return (
    <div>
      <div className="body body1">
        <div className="eye-white">
          <div className="eye-black"></div>
        </div>
      </div>
      <div className="body body2"></div>
      <div className="body body3"></div>
      <div className="body body4"></div>
      <div className="body body5"></div>

      <img className="grass" src={grass} alt="잔디"></img>
    </div>
  );
}

export default Larva;
