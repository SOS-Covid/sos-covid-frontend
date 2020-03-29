import React from "react";

export default function Home(props) {
  return (
    <section className="home">
      <header>
        <img src="https://fakeimg.pl/350x200/?text=Logo" alt="logo" />
        <a href="/">Indicar uma ONG</a>
      </header>
      <section className="intro">
        <h1>Propósito de estarmos aqui é este em 3 linhas mobile</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <button>Quero doar</button>
      </section>
      <section className="donate">
        <img src="https://fakeimg.pl/350x350/" alt="donate" />
        <h3>Somos apoiado por </h3>
        <img src="https://fakeimg.pl/200x200/" alt="donate" />
        <img src="https://fakeimg.pl/200x200/" alt="donate" />
        <img src="https://fakeimg.pl/200x200/" alt="donate" />
      </section>
      <section className="help">
        <h3>Ajude quem mais precisa</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <img src="https://fakeimg.pl/350x350/" alt="help" />
      </section>
      <section className="join">
        <h3>Faça parte de algo maior</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <img src="https://fakeimg.pl/350x350/" alt="help" />
      </section>
      <section className="what">
        <h3>O que é a onda solidária</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </section>
      <section className="contact">
        <ul>
          <li>email</li>
          <li>Whatsapp</li>
        </ul>
      </section>
      <section className="donation">
        <h3>Queremos ajudar o próximo</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>

        <button>Quero fazer uma doação</button>
      </section>
    </section>
  );
}
