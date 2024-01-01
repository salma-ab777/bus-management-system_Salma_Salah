import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container, Col } from "react-bootstrap";

export const Ajouter = () => {
  const [inputData, setInputData] = useState({
    nom: "",
    role: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:3000/utilisateurs", inputData)
      .then((res) => {
        alert("Utilisateur ajouté");
        navigate("/formateur");
      })
      .catch((err) => console.log(err));
  };

  const handleRoleChange = (e) => {
    setInputData({ ...inputData, role: e.target.value });
  };

  return (
    <Container className="d-flex align-items-center justify-content-center min-vh-100">
      <Col xs={12} sm={8} md={6} lg={4}>
        <div className="p-4 rounded shadow-lg bg-light">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="nom">Nom :</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setInputData({ ...inputData, nom: e.target.value })}
              />
            </Form.Group>
            <Form.Select className="my-3" onChange={handleRoleChange}>
              <option value="select">Sélectionnez</option>
              <option value="Participant">Participant</option>
              <option value="Formateur">Formateur</option>
            </Form.Select>
            <Button variant="info" type="submit" className="w-100 mt-3">
              Ajouter
            </Button>
          </Form>
        </div>
      </Col>
    </Container>
  );
};
