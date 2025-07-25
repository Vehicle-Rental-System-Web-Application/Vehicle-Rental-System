import { LinkContainer } from "react-router-bootstrap";
import { Row, Col } from "react-bootstrap";




const Home = () => {
  return (
    <> {/*Hero Section*/}
        <section className="hero-section">
            <Row>
                <Col>
                    <h1>Find Your Perfect Ride Here</h1>
                    <p>Rent premium vehicles at affordable prices. Your journey starts here.</p>
                </Col>
                <LinkContainer to="/cars">
                    <button className="btn btn-primary">Browse Cars</button>
                </LinkContainer>
            </Row>
        </section>
      
    </>
  );
}



export default Home;