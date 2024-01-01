import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { Container, Form, Button } from "react-bootstrap";

export const Home = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [role, setRole] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3000/utilisateurs").then((res) => setUsers(res.data));
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (name === "" || name === null || role === "" || role === null || role === "select") {
      alert("Veuillez sélectionner votre nom et votre rôle");
    } else {
      const loggedInUser = users.find((user) => user.nom === name && user.role === role);
      if (loggedInUser) {
        navigate(loggedInUser.role === "Participant" ? "/participant" : "/formateur");
      } else {
        alert("Aucun utilisateur correspondant trouvé.");
      }
    }
  };

  return (
    <Container className="d-flex align-items-center justify-content-center min-vh-100">
      <Form className="bg-light p-5 rounded shadow-lg" onSubmit={handleLogin}>
        <Form.Label className="h3 mb-4">Ofppt Inscription</Form.Label>
        <Form.Group controlId="formName" className="mb-4">
          <Form.Control
            type="text"
            placeholder="Enter Your FullName"
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formRole" className="mb-4">
          <Form.Label>Rôle :</Form.Label>
          <Form.Select onChange={(e) => setRole(e.target.value)}>
            <option value="select">Sélectionnez</option>
            <option value="Participant">Participant</option>
            <option value="Formateur">Formateur</option>
          </Form.Select>
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100">
          Login
        </Button>
      </Form>
    </Container>
  );
};
