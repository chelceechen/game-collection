import { useHistory } from "react-router-dom";
import "./card.css";
const Card = ({ gameTitle, gameContent, path }) => {
  const history = useHistory();
  return (
    <div className="card">
      <div className="title">{gameTitle}</div>
      <div className="content">{gameContent}</div>
      <div className="button">
        <button
          onClick={() => {
            history.push(`/${path}`);
          }}
        >
          TRY ME
        </button>
      </div>
    </div>
  );
};

export default Card;
