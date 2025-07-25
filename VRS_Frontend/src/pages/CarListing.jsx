// Import React and required hooks
import React, { useState, useEffect } from 'react';

// Import Bootstrap components for layout and UI
import { Container, Row, Col, Card, Button, Form, InputGroup } from 'react-bootstrap';

// Import router helper to link buttons
import { LinkContainer } from 'react-router-bootstrap';

// Import search icon
import { FaSearch } from 'react-icons/fa';

// Import car service to get car data
import { carService } from '../services/carService';

const CarListing = () => {
  // -------------------------- STATE SECTION ----------------------------

  // Holds the complete list of cars (usually from localStorage or a backend)
  const [cars, setCars] = useState([]);

  // Holds the filtered list based on user inputs
  const [filteredCars, setFilteredCars] = useState([]);

  // Tracks all filter input values (search, category, brand, maxPrice)
  const [filters, setFilters] = useState({
    search: '',
    category: '',
    brand: '',
    maxPrice: ''
  });

  // -------------------------- DATA FETCHING ----------------------------

  // useEffect runs once on component mount to fetch all cars
  useEffect(() => {
    const allCars = carService.getAllCars(); // Get cars from service
    setCars(allCars); // Store in state
  }, []);

  // useEffect re-runs when either 'cars' or 'filters' change
  useEffect(() => {
    let result = [...cars]; // Make a copy of all cars

    // --- Apply Search Filter ---
    if (filters.search) {
      const query = filters.search.toLowerCase();
      result = result.filter(car =>
        car.name.toLowerCase().includes(query) ||   // Search by name
        car.brand.toLowerCase().includes(query)     // or brand
      );
    }

    // --- Apply Category Filter ---
    if (filters.category) {
      result = result.filter(car => car.category === filters.category);
    }

    // --- Apply Brand Filter ---
    if (filters.brand) {
      result = result.filter(car => car.brand === filters.brand);
    }

    // --- Apply Max Price Filter ---
    if (filters.maxPrice) {
      result = result.filter(car => car.price <= parseInt(filters.maxPrice));
    }

    // Update filtered list
    setFilteredCars(result);
  }, [cars, filters]);

  // -------------------------- FILTER HANDLER ----------------------------

  // Called whenever a filter input changes
  const handleFilterChange = (field, value) => {
    setFilters(prev => ({
      ...prev,        // Spread old values
      [field]: value  // Update only the changed field
    }));
  };

  // Predefined category and brand options
  const categories = ['Hatchback', 'Sedan', 'SUV', 'Luxury'];
  const brands = ['Toyota', 'Honda', 'BMW', 'Mercedes', 'Audi', 'Ford'];

  // -------------------------- RENDER UI ----------------------------

  return (
    <Container className="py-4">
      
      {/* --- PAGE TITLE SECTION --- */}
      <Row className="mb-3">
        <Col>
          <h2>Available Cars</h2>
          <p className="text-muted">Find your perfect rental car</p>
        </Col>
      </Row>

      {/* --- FILTERS SECTION --- */}
      <Row className="mb-4">
        <Col>
          <Card className="p-3">
            <Row className="g-2">

              {/* Search Bar */}
              <Col md={3}>
                <InputGroup>
                  <InputGroup.Text><FaSearch /></InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="Search cars..."
                    value={filters.search}
                    onChange={(e) => handleFilterChange('search', e.target.value)}
                  />
                </InputGroup>
              </Col>

              {/* Category Dropdown */}
              <Col md={2}>
                <Form.Select
                  value={filters.category}
                  onChange={(e) => handleFilterChange('category', e.target.value)}
                >
                  <option value="">All Categories</option>
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </Form.Select>
              </Col>

              {/* Brand Dropdown */}
              <Col md={2}>
                <Form.Select
                  value={filters.brand}
                  onChange={(e) => handleFilterChange('brand', e.target.value)}
                >
                  <option value="">All Brands</option>
                  {brands.map(brand => (
                    <option key={brand} value={brand}>{brand}</option>
                  ))}
                </Form.Select>
              </Col>

              {/* Max Price Input */}
              <Col md={2}>
                <Form.Control
                  type="number"
                  placeholder="Max Price/day"
                  value={filters.maxPrice}
                  onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
                />
              </Col>

              {/* Clear Filter Button */}
              <Col md={3}>
                <Button
                  variant="outline-secondary"
                  onClick={() =>
                    setFilters({ search: '', category: '', brand: '', maxPrice: '' })
                  }
                  className="w-100"
                >
                  Clear Filters
                </Button>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      {/* --- CAR LIST SECTION --- */}
      <Row>
        {filteredCars.length > 0 ? (
          filteredCars.map(car => (
            <Col md={4} key={car.id} className="mb-4">
              <Card className="h-100">
                {/* Car Image */}
                <Card.Img
                  variant="top"
                  src={car.image}
                  style={{ height: '200px', objectFit: 'cover' }}
                />

                {/* Car Details */}
                <Card.Body>
                  <Card.Title>{car.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {car.brand} • {car.category}
                  </Card.Subtitle>

                  {/* Price */}
                  <h5 className="text-primary">${car.price}/day</h5>

                  {/* Features as badges */}
                  <div className="mb-2">
                    {car.features.map((feature, idx) => (
                      <span key={idx} className="badge bg-light text-dark me-1">
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Availability badge */}
                  <p className="text-muted">
                    Status:{" "}
                    <span className={`badge ${car.available ? 'bg-success' : 'bg-danger'}`}>
                      {car.available ? 'Available' : 'Booked'}
                    </span>
                  </p>

                  {/* Book Now Button */}
                  {car.available ? (
                    <LinkContainer to={`/booking/${car.id}`}>
                      <Button variant="primary" className="w-100">Book Now</Button>
                    </LinkContainer>
                  ) : (
                    <Button variant="secondary" className="w-100" disabled>
                      Not Available
                    </Button>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          // If no car matches the filters
          <Col>
            <div className="text-center py-5">
              <h4>No cars found</h4>
              <p className="text-muted">Try adjusting your filters</p>
            </div>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default CarListing;
