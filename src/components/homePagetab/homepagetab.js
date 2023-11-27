import "./homepagetab.css";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

// Home Page Option Cards
function Homepagetab() {
  return (
    <>
      <div className="option-cards">
        <Row xs={1} md={3} className="g-3 ">
          {Array.from({ length: 1 }).map((_, idx) => (
            <Col key={idx}>
              <Link to="/spage" className="tab-text">
                <Card>
                  <Card.Img
                    variant="top"
                    src="./imgpage/HomePage/orderonline.png"
                    alt="oderonline"
                  />
                  <Card.Body>
                    <Card.Title> Order Online</Card.Title>
                    <Card.Text>Stay home and order to your doorstep</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}

          {Array.from({ length: 1 }).map((_, idx) => (
            <Col key={idx}>
              <Link to="/spage" className="tab-text">
                <Card>
                  <Card.Img
                    variant="top"
                    src="./imgpage/Homepage/dinig.png"
                    alt="dining image"
                  />
                  <Card.Body>
                    <Card.Title>Dining</Card.Title>
                    <Card.Text>
                      View the city's favourite dining venues
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}

          {Array.from({ length: 1 }).map((_, idx) => (
            <Col key={idx}>
              <Link to="/night" className="tab-text">
                <Card>
                  <Card.Img
                    variant="top"
                    src="./imgpage/HomePage/nightlifeandclubs.png"
                    alt="nightlife"
                  />
                  <Card.Body>
                    <Card.Title>Nightlife and Clubs</Card.Title>
                    <Card.Text>
                      Explore the city's top nightlfe outlets
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}

export default Homepagetab;
