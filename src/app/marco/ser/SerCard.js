import Card from 'react-bootstrap/Card';

function SerCard({data}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={data.image} />
      <Card.Body>
         <Card.Title>{data.title}</Card.Title>
        <Card.Text>
          {data.text}
        </Card.Text> 
      </Card.Body>
    </Card>
  );
}

export default SerCard;