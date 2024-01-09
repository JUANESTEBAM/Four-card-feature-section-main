import style from "./style.module.css";

const Card = ({ title, text, img, borderColor }) => {
  return (
      <div className={style.card} style={{borderTop:`5px solid ${borderColor}`}}>
        <div className="card-info">
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
        <img className="icon" src={img} alt="" />
      </div>

  );
};

export default Card;
