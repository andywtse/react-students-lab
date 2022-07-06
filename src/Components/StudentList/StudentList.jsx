import { Card,ListGroup } from "react-bootstrap";
import Score from "../Score/Score";

const StudentList = (props) => {
  return (
    <>
      {props.studentList.map(student=>
        <Card className="Card" border="primary" style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{student.name}</Card.Title>
            <Card.Text>
              {student.bio}
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <Score scores={student.scores}/>
          </ListGroup>
        </Card>
      )}
    </>
  );
}

export default StudentList;