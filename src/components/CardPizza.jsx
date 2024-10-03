import React from 'react';
import { Card, Button } from 'react-bootstrap';

const CardPizza = ({ name, price, ingredients, img }) => {
    return (
        <Card style={{ width: '18rem', margin: '1rem' }}>
            <Card.Img variant="top" src={img} alt={name} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    <strong>Precio:</strong> ${price.toLocaleString()}
                </Card.Text>
                <Card.Text>
                    <strong>Ingredientes:</strong> {ingredients.join(', ')}
                </Card.Text>
                <Button variant="primary">Ver más 👀</Button>
                <Button variant="dark">Añadir 🛒</Button>

            </Card.Body>
        </Card>
    );
};

export default CardPizza;
