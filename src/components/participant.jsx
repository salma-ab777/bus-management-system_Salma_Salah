import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card, Col, Row, Table } from "react-bootstrap";

export const Participant = () => {
  const [formations, setFormations] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/formations").then((res) => setFormations(res.data));
  }, []);

  const handleButtonClick = (id) => {
    setFormations((formations) =>
      formations.map((formation) =>
        formation.id === id ? { ...formation, clicked: !formation.clicked } : formation
      )
    );
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Titre</th>
          <th>Domaine</th>
          <th>Niveau</th>
          <th>Description</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {formations.map((formation) => (
          <tr key={formation.id}>
            <td>{formation.titre}</td>
            <td>{formation.domaine}</td>
            <td>{formation.niveau}</td>
            <td>{formation.description}</td>
            <td>
              <Button
                variant={formation.clicked ? "danger" : "primary"}
                onClick={() => handleButtonClick(formation.id)}
              >
                {formation.clicked ? "Quitter" : "Inscription"}
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
