import { LinkContainer } from "react-router-bootstrap";
import { Row, Col, Button } from "react-bootstrap";





const Home = () => {
  return (
    <> {/*Hero Section*/}
        <section className="hero-section">
            <Row>
                <Col>
                    <h1>Find Your Perfect Ride Here</h1>
                    <p>Rent premium vehicles at affordable prices. Your journey starts here.</p>
                <LinkContainer to="/cars">
                    <Button variant="primary" size="lg">
                        Browse Cars Now
                    </Button>
                </LinkContainer>
                </Col>
            </Row>
        </section>
      
    </>
  );
}



export default Home;