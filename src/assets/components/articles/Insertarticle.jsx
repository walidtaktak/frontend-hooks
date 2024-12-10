import axios from "axios";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Insertarticle = () => {
  let navigate = useNavigate();
  const [reference, setReference] = useState("");
  const [marque, setMarque] = useState("");
  const [designation, setDesignation] = useState("");
  const [prix, setPrix] = useState(0);
  const [qtestock, setQtestock] = useState(0);
  const [imageart, setImageart] = useState("");
  const [scategorieID, setScategorieID] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3001/api/articles", article);
    navigate("/articles");
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h4 align="center">Ajout Article</h4>
          <div className="form mt-3">
            <Form className="border p-3">
              <Row className="mb-2">
                <Form.Group as={Col} md="6">
                  <Form.Label>Référence *</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Référence"
                    value={reference}
                    onChange={(e) => setReference(e.target.value)}
                  />
                </Form.Group>
                <Form.Group as={Col} md="6">
                  <Form.Label>Désignation *</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Désignation"
                    value={designation}
                    onChange={(e) => setDesignation(e.target.value)}
                  />
                </Form.Group>
              </Row>
              <Row className="mb-2">
                <Form.Group className="col-md-6">
                  <Form.Label>Marque *</Form.Label>
                  <Form.Control
                    type="text"
                    required
                    placeholder="Marque"
                    value={marque}
                    onChange={(e) => setMarque(e.target.value)}
                  />
                </Form.Group>
                <Form.Group as={Col} md="6">
                  <Form.Label>Prix</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Prix"
                    value={prix}
                    onChange={(e) => setPrix(e.target.value)}
                  />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group className="col-md-6 ">
                  <Form.Label>
                    Qté stock<span className="req-tag">*</span>
                  </Form.Label>
                  <Form.Control
                    required
                    type="number"
                    value={qtestock}
                    onChange={(e) => setQtestock(e.target.value)}
                    placeholder="Qté stock"
                  />
                </Form.Group>
                <Form.Group as={Col} md="6">
                  15
                  <Form.Label>Image</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Image"
                    value={imageart}
                    onChange={(e) => setImageart(e.target.value)}
                  />
                </Form.Group>
                <Form.Group as={Col} md="12">
                  <Form.Label>Catégorie</Form.Label>
                  <Form.Control
                    as="select"
                    type="select"
                    value={scategorieID}
                    onChange={(e) => setScategorieID(e.target.value)}
                  >
                    <option></option>
                  </Form.Control>
                </Form.Group>
              </Row>
              <button type="submit" className="btn btn-outline-primary">
                Submit
              </button>
              <Link className="btn btn-outline-danger mx-2" to="/articles">
                Cancel
              </Link>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Insertarticle;
