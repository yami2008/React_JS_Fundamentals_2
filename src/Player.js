import React from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Player = ({ name, team, nationality, jerseyNumber, age, image }) => {
    return (
        <Card style={{ width: '18rem', margin: '1rem', padding: '1rem', textAlign: 'center' }}>
            <Card.Img variant="top" src={image} alt={name} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{team}</Card.Subtitle>
                <Card.Text>
                    <strong>Nationality:</strong> {nationality} <br />
                    <strong>Jersey Number:</strong> {jerseyNumber} <br />
                    <strong>Age:</strong> {age}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

Player.defaultProps = {
    name: "Unknown Player",
    team: "Unknown Team",
    nationality: "Unknown",
    jerseyNumber: "N/A",
    age: "N/A",
    image: "https://via.placeholder.com/150?text=No+Image"
};

export default Player;
