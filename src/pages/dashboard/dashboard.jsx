import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import DeleteEmployee from "./deleteEmployee";

const Dashboard = () => {
  const [employees, setEmployees] = useState([]);
  // Dashboard.jsx

  const handleDeleteSuccess = (deletedId) => {
    console.log("inside function:" + deletedId);
    // Filter out the deleted employee from the list
    setEmployees((prevEmployees) =>
      prevEmployees.filter((employee) => employee.id !== deletedId)
    );
  };

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await fetch(
          "https://amusing-victory-production.up.railway.app/api/employees"
        );
        const data = await response.json();
        setEmployees(data);
      } catch (error) {
        console.log("Error fetching employees:", error.message);
      }
    };
    fetchEmployee();
  }, []);

  return (
    <>
      <Container className="mt-5">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>Employee Name</th>
              <th>Phone Number</th>
              <th>Email Address</th>
              <th>Department</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.phone}</td>
                <td>{employee.email}</td>
                <td>{employee.department}</td>
                <td>
                  <Button variant="outline-secondary">Edit</Button>{" "}
                  <DeleteEmployee
                    id={employee.id}
                    onDeleteSuccess={handleDeleteSuccess}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default Dashboard;
