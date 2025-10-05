import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
const AddEmployee = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await fetch(
        "https://amusing-victory-production.up.railway.app/api/employee",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();
      console.log("Employee created:", data);
      navigate("/");
    } catch (error) {
      console.log("Error creating employee", error.message);
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center flex-column min-vh-100 ">
        <div className="shadow p-5 rounded bg-white">
          <h1> ADD EMPLOYEE</h1>
          <Form style={{ width: "400px" }} onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicName">
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter name"
                value={formData.name}
                onChange={handleInputChange}
              ></Form.Control>
            </Form.Group>
            <br></br>
            <Form.Group controlId="formBasicName">
              <Form.Control
                type="text"
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleInputChange}
              ></Form.Control>
            </Form.Group>
            <br></br>

            <Form.Group controlId="formBasicName">
              <Form.Control
                type="text"
                name="phone"
                placeholder="Enter phone"
                value={formData.phone}
                onChange={handleInputChange}
              ></Form.Control>
            </Form.Group>
            <br></br>

            <Form.Group controlId="formBasicName">
              <Form.Control
                type="text"
                name="department"
                placeholder="Enter department"
                value={formData.department}
                onChange={handleInputChange}
              ></Form.Control>
            </Form.Group>
            <br></br>

            <Button variant="primary" type="submit">
              {"    Submit"}
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default AddEmployee;
