import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles/Card.css";

const Card = (props) => {
    const { icon, title, body } = props;
  return (
    <div className="card">
      <div className="card-constainer">
        <div className="card-header">
          <div className="card-icon">
            <FontAwesomeIcon icon={props.icon} />
          </div>
          <div className="card-title">{title}</div>
        </div>
        <div className="card-body">
          <div className="card-text">{body}</div>
        </div>
      </div>
    </div>
  );
};
export default Card;
