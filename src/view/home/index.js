import React, { useEffect, useState } from "react"
import 'bootstrap/dist/css/bootstrap.css'
import { Accordion, Container, Col, Row, Card, Button,  } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight, faNetworkWired, faGlobeAmericas, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import './home.css'

import OngService from "../../services/OngService"

export default function Home(props) {

  const [ongs, setOngs] = useState([])
  const [error, setError] = useState(false)
  const [card, setCard] = useState()

  const getOngs = () => {
    OngService.getOngs()
      .then(response => {
        setOngs(response.data)
      })
      .catch(error => {
        setError(true)
      })
  };

  useEffect(() => {
    getOngs()
  }, [])

  const showCard = (key) => {

    key !== card ? setCard(key) : setCard()

  }
  return (
    <div className="wrapper">
      <header className="text-center">

        {/* <img src="https://fakeimg.pl/350x200/?text=Logo" alt="logo" /> */}
        <div className="title gray">
          <FontAwesomeIcon className="gray-new" icon={faGlobeAmericas} />
        &nbsp;COOPERAÇÃO SOLIDÁRIA</div>
      </header>

      <div className="intro">
        <Container fluid>
          <Row>
            <div className="header">
              <FontAwesomeIcon className="gray-new" icon={faNetworkWired} size="lg" />
            &nbsp;
              CONECTANDO DOADORES AOS QUE MAIS PRECISAM
            </div>
            <div className="row-text">
              <span className="row-text title">Olá doador, que bom que você está aqui! </span>
              <br />
                Muitas pessoas e famílias inteiras estão passando por
                dificuldades com as restrições impostas pela pandemia do
                <span className="bold"> COVID-19</span>. O isolamento social é necessário, mas com isso os
                empregos e atividades autônomas e informais são afetados,
                fazendo com que muitas pessoas sejam impossibilitadas de ganhar
                o próprio sustento. Isso restringe seu acesso ao que há de mais
                básico, alimentação e itens higiene.
               <p/>
                Neste local organizamos as iniciativas que estão ocorrendo para
                ajudá-lo a doar para quem mais necessita.
              </div>

          </Row>
        </Container>
      </div>

      <div className="row-text">
        <span className="row-text title">Lista de entidades para ajudar</span>
        <Accordion defaultActiveKey="0">
          {error && <h3>Erro ao buscar entidades</h3>}
          {ongs.map((ong, index) => {
            return (
              <Card key={index} style={{ marginTop: 10 }}>
                <Card.Header>
                  <Row>
                    <Col>
                      <h5 className="gray-new">{ong.name_organization}</h5>
                       {ong.address[0].city} - {ong.address[0].district}{" "}
                    </Col>
                    <Col>
                      <Accordion.Toggle
                        as={Button}
                        variant="link"
                        eventKey={index}
                        style={{ boxShadow: '0px 3px 21px 0px rgba(0, 0, 0, 0.1)'}}
                      >
                        {
                          card === index
                            ?
                            <FontAwesomeIcon
                              onClick={() => showCard(index)}
                              key={index}
                              className="blue"
                              icon={faAngleDoubleRight}
                              rotation={90}
                              size="lg" />
                            :
                            <FontAwesomeIcon 
                            onClick={() => showCard(index)} 
                            key={index} 
                            className="gray-new" 
                            icon={faAngleDoubleRight} 
                            size="lg" />
                        }


                      </Accordion.Toggle>
                    </Col>
                  </Row>
                </Card.Header>
                <Accordion.Collapse eventKey={index}>
                  <Card.Body>
                    {ong.description[0]} <br />
                    <FontAwesomeIcon className="gray-new" icon={faPhoneAlt}  /> <span className="gray-new">{ong.phone1}</span>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            );
          })}
        </Accordion>
      </div>
      <div className="rodape">

      </div>
    </div>
  );
}
