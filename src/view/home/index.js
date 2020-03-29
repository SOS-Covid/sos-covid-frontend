import React, { useEffect, useState } from "react";

import { Accordion, Container, Col, Row, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import OngService from "../../services/OngService";

export default function Home(props) {
  const [ongs, setOngs] = useState([]);
  const [error, setError] = useState(false);

  const getOngs = () => {
    OngService.getOngs()
      .then(response => {
        setOngs(response.data);
      })
      .catch(error => {
        setError(true);
      });
  };

  useEffect(() => {
    getOngs();
  }, []);

  return (
    <section className="home">
      <header className="text-center">
        <img src="https://fakeimg.pl/350x200/?text=Logo" alt="logo" />
      </header>
      <section className="intro">
        <Container fluid>
          <Row>
            <Col>
              <h1>CONECTANDO DOADORES AOS QUE MAIS PRECISAM</h1>
              <p>
                Olá doador, que bom que você está aqui! <br />
                <br />
                Muitas pessoas e famílias inteiras estão passando por
                dificuldades com as restrições impostas pela pandemia do
                COVID-19. O isolamento social é necessário, mas com isso os
                empregos e atividades autônomas e informais são afetados,
                fazendo com que muitas pessoas sejam impossibilitadas de ganhar
                o próprio sustento. Isso restringe seu acesso ao que há de mais
                básico, alimentação e itens higiene. <br />
                <br />
                Neste local organizamos as iniciativas que estão ocorrendo para
                ajudá-lo a doar para quem mais necessita.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="donate">
        <h3>Lista de entidades para ajudar</h3>
        <Accordion defaultActiveKey="0">
          {error && <h3>Erro ao buscar entidades</h3>}
          {ongs.map((ong, index) => {
            return (
              <Card key={index}>
                <Card.Header>
                  <Row>
                    <Col>
                      <h5>{ong.name_organization}</h5>
                      <br /> {ong.address[0].city} - {ong.address[0].district}{" "}
                    </Col>
                    <Col>
                      <Accordion.Toggle
                        as={Button}
                        variant="link"
                        eventKey={index}
                      >
                        >
                      </Accordion.Toggle>
                    </Col>
                  </Row>
                </Card.Header>
                <Accordion.Collapse eventKey={index}>
                  <Card.Body>
                    {ong.description[0]} <br /> Telefone: {ong.phone1}
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            );
          })}
        </Accordion>
      </section>
    </section>
  );
}
