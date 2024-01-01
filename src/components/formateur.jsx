import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Button, Table, Container } from "react-bootstrap";

export const Formateur = () => {
  const [utilisateurs, setUtilisateurs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3000/utilisateurs").then((res) => setUtilisateurs(res.data));
  }, []);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Etes vous sûr de vouloir supprimer cet utilisateur ?");
    if (confirmDelete) {
      axios
        .delete(`http://localhost:3000/utilisateurs/${id}`)
        .then((res) => {
          alert("Utilisateur supprimé");
          setUtilisateurs(utilisateurs.filter((user) => user.id !== id));
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <Container>
      <h2 className="my-3">Liste des utilisateurs</h2>
      <Link to="/ajouter" className="btn btn-success my-3">
        Ajouter
      </Link>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>NOM</th>
            <th>ROLE</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {utilisateurs.map((utilisateur) => (
            <tr key={utilisateur.id}>
              <td>{utilisateur.id}</td>
              <td>{utilisateur.nom}</td>
              <td>{utilisateur.role}</td>
              <td>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleDelete(utilisateur.id)}
                >
                  Supprimer
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

