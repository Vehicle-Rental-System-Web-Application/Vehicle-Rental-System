const AdminLogin = () => {
    const navigate = useNavigate();
    const [FormData, setFormData] = useState({
email: '',
password: ''
    });
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        if(error[name]) {
            setError(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const newError = {};
        if(!FormData.email) {
            newError.email = 'Email is required';
        } else if(!/\S+@\S+\.\S+/.test(FormData.email)) {
            newError.email = 'Email is invalid';
        }
        if(!FormData.password) {
            newError.password = 'Password is required';
        }
        setError(newError);
        return Object.keys(newError).length === 0;
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!validateForm()) return;

        setLoading(true);

    try {
      const result = userService.login(formData.email, formData.password, 'admin');
      
      if (result.success) {
        localStorage.setItem('token', result.token);
        localStorage.setItem('user', JSON.stringify(result.user));
        toast.success('Admin login successful!');
        navigate('/admin/dashboard');
        window.location.reload();
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };
    return (
    <Container className="py-4">
      <Row className="justify-content-center">
        <Col md={5}>
          <div className="form-container">
            <Card>
              <Card.Header className="text-center">
                <h3>Admin Login</h3>
                <p className="text-muted">Access the admin dashboard</p>
              </Card.Header>
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      isInvalid={!!errors.email}
                      placeholder="Enter admin email"
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.email}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      isInvalid={!!errors.password}
                      placeholder="Enter admin password"
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.password}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Button 
                    type="submit" 
                    variant="primary" 
                    className="w-100 mb-3"
                    disabled={loading}
                  >
                    {loading ? 'Logging in...' : 'Login as Admin'}
                  </Button>
                </Form>

                <div className="text-center">
                  <small className="text-muted">
                    Demo Admin: admin@rentwheels.com / admin123
                  </small>
                </div>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminLogin;