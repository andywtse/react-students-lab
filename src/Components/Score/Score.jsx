import { ListGroupItem } from "react-bootstrap";

const Score = (props) => {
  return (
    <>
      {props.scores.map(score=>
        <ListGroupItem>
          <p>Date: {score.date}</p>
          <p>Score: {score.score}</p>
        </ListGroupItem>
      )}
    </>
  );
}

export default Score;