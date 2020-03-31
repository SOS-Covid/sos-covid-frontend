import React, { useEffect, useState } from "react";

import OngService from "../../services/OngService";

export default function Donate() {
  const [ongs, setOngs] = useState([]);
  const [error, setError] = useState(false);

  const getOngs = () => {
    OngService.getOngs()
      .then((response) => {
        setOngs(response.data);
      })
      .catch(() => {
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
          {error && <h3>Erro ao buscar entidades</h3>}
          {ongs.map((ong) => (
            <tr key={ong.name_organization}>
              <td>{ong.name_organization}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
