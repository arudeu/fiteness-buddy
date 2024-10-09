import { Card } from "react-bootstrap";

export default function WorkoutCard({ title, text, imgSrc }) {
  return (
    <Card className="acrylic-card">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
}
