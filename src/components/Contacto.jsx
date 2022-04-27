import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Contacto = () => {
  const [success, setSuccess] = useState();

  useEffect(() => {
    console.log("HE CARGAAO");
  }, [success]);

  async function Mortadela() {
    let about = document.querySelector("#about");
    console.log(about.value)
    let name = document.querySelector("#name");
    console.log(name.value)
    let email = document.querySelector("#email");
    console.log(email.value);
    let promise = await fetch('http://localhost:4000/enviarmensaje', {
      method: "POST",
      body: JSON.stringify({name: name.value, email: email.value, message: about.value}),
      headers: {"Content-Type": "application/json"}
    });
  }

  return (
    <React.Fragment>
      <header>
        <form>
          <div>
            <label htmlFor="name">Nombre </label>
            <input name="name" id="name" type="text" />

            <label htmlFor="email">Correo electrónico </label>
            <input name="email" id="email" type="email" />

            <label htmlFor="about">Escribe tu consulta </label>
            <textarea id="about" name="about" />

            <button onClick={() => Mortadela()}>
              Enviar mensaje
            </button>
            <span></span>
            <span> {success} </span>
          </div>
        </form>
      </header>
      <aside>
        <img src="assets/img/Wikipedia-logo.svg" alt="wikipedia logo" />
        <h2>Flora de Uruguay</h2>
        <h3>
          Lista de especies florales que se pueden encontrar en Uruguay y que
          son nativas de la región.
        </h3>
        <form
          action="https://es.wikipedia.org/wiki/Anexo:Especies_de_la_flora_nativa_de_Uruguay"
          id="info"
        >
          <button>Aprender más</button>
        </form>
      </aside>
      <nav>
        <div>
          <Link to="/"> Home</Link>
          <Link to="/about"> About</Link>
          <Link to="/contacto"> Contacto</Link>
          <Link to="/form"> Form</Link>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://senpaiacademy.com/uy/"
          >
            Senpai Academy
          </a>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Contacto;
