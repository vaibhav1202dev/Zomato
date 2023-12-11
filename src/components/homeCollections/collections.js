import "./collections.css";
import { FaCaretRight } from "react-icons/fa";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

// Home Collections Cards
function Collections() {
  return (
    <>
      <div className="collection">
        <h1>Collections</h1>
      </div>
      <div className="coll-paragraph">
        <p>
          Explore curated lists of top restaurants, cafes, pubs, and bars in
          Pune, based on trends
        </p>
      </div>
      <div className="collection-img">
        <Row xs={2} md={4} className="g-5">
          {Array.from({ length: 1 }).map((_, idx) => (
            <Col key={idx}>
              <div className="bgimg1">
                <div className="collection-text">
                  13 Newly Opened Restaura 6 Places <FaCaretRight />
                </div>
              </div>
            </Col>
          ))}

          {Array.from({ length: 1 }).map((_, idx) => (
            <Col key={idx}>
              <div className="bgimg2">
                <div className="collection-text">
                  15 Work-friendly Places <br /> 15 Places <FaCaretRight />
                </div>
              </div>
            </Col>
          ))}

          {Array.from({ length: 1 }).map((_, idx) => (
            <Col key={idx}>
              <div className="bgimg3">
                <div className="collection-text">
                  7 Pure Veg Places <br /> 7 Places <FaCaretRight />
                </div>
              </div>
            </Col>
          ))}

          {Array.from({ length: 1 }).map((_, idx) => (
            <Col key={idx}>
              <div className="bgimg4">
                <div className="collection-text">
                  12 Romantic Dinig Places <br /> 13 Places <FaCaretRight />
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}

export default Collections;
