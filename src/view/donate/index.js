import React, { useEffect, useState } from "react";

import OngService from "../../services/OngService";

export default function Donate(props) {
  const [ongs, setOngs] = useState([]);
  const [error, setError] = useState(false);

  const getOngs = () => {
    OngService.getOngs()
      .then(response => {
        console.log("response", response);
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
    <section className="donate">
      <h1>Lista de entidades para ajudar</h1>
      <table>
        <tbody>
          {ongs.map((ong, index) => {
            return (
              <tr key={index}>
                <td>{ong.name_organization}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}
