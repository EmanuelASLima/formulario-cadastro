import "./style.css";
import Lixo from "../../assets/delete-icon.svg";
import Input from "../../components/Input/Input";

import { useState } from "react"

function Home() {
  const [cliente, setCliente] = useState({});
  const [error, setError] = useState(false)

  console.log(cliente)

  const users = [
    {
      id: "000001",
      name: "Manel",
      socialSec: "12345678901",
      age: "29",
      tel: "85987654321",
      job: "Professor",
      email: "emanuel@gmail.com",
    },
    {
      id: "000002",
      name: "Sara",
      socialSec: "12345678902",
      age: "32",
      tel: "85987654320",
      job: "Professora",
      email: "sara@gmail.com",
    },
  ];

  const validateValue = (valueRaw) => {
    if(valueRaw.length < 3) {
      setError(true)
    } else {
      // setCliente((prev) => {
      //   return {
      //     name: valueRaw,
      //     id: prev.id,
      //     socialSec: prev.socialSec,
      //     age: prev.age,
      //     tel: prev.tel,
      //     job: prev.job,
      //     email: prev.email,
      //   }})
        
      setCliente((prev) => ({
        ...prev,
        name: valueRaw,
      }))
      setError(false)
    }
  }

  const setCPF = (value) => {
    setCliente((prev) => ({
      ...prev,
      socialSec: value,
    }))
  }

  const setIdade = (value) => {
    setCliente((prev) => ({
      ...prev,
      age: value,
    }))
  }

  const setTelefone = (value) => {
    setCliente((prev) => ({
      ...prev,
      tel: value,
    }))
  }

  const setJob = (value) => {
    setCliente((prev) => ({
      ...prev,
      job: value,
    }))
  }

  const setEmail = (value) => {
    setCliente((prev) => ({
      ...prev,
      email: value,
    }))
  }


  return (
    <div className="container">
      <form>
        <h1>Cadastro de Clientes</h1>
        <Input placeholder="Nome" name="nome completo / razão social" type="text" onValueChange={(valueRaw) => validateValue(valueRaw)} />
        {error && <span style={{color: '#F00'}}>Erro, o valor deve ter no mínimo 3 caracteres</span>}
        <Input placeholder="CPF/CNPJ" name="CPF/CNPJ" type="number" onValueChange={setCPF} />
        <Input placeholder="Idade" name="idade" type="number" onValueChange={setIdade} />
        <Input placeholder="Telefone" name="Telefone" type="number" onValueChange={setTelefone} />
        <Input placeholder="Área de atuação" name="Area de atuação" type="text" onValueChange={setJob} />
        <Input placeholder="exemple@email.com.br" name="E-mail" type="email" onValueChange={setEmail} />
        <button type="button">Cadastrar</button>
      </form>

      {users.map((user) => (
        <div key={user.id} className="card">
          <div>
            <p>
              Nome: <span>{user.name}</span>
            </p>
            <p>
              CPF/CNPJ: <span>{user.socialSec}</span>
            </p>
            <p>
              Idade: <span>{user.age}</span>
            </p>
            <p>
              Telefone: <span>{user.tel}</span>
            </p>
            <p>
              Área: <span>{user.job}</span>
            </p>
            <p>
              E-mail: <span>{user.email}</span>
            </p>
          </div>
          <button>
            <img src={Lixo} />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
