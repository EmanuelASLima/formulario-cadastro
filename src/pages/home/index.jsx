import "./style.css";
import Lixo from "../../assets/delete-icon.svg";
import { useForm } from "react-hook-form";
import { useState } from "react";

const Home = () => {
  const [users, setUsers] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setUsers([...users, { id: Date.now(), ...data }]); // Adiciona um ID único
  };

  //   const users = [
  //     {
  //       id: "000001",
  //       name: "Manel",
  //       socialSec: "12345678901",
  //       age: "29",
  //       tel: "85987654321",
  //       job: "Professor",
  //       email: "emanuel@gmail.com",
  //     },
  //     {
  //       id: "000002",
  //       name: "Sara",
  //       socialSec: "12345678902",
  //       age: "32",
  //       tel: "85987654320",
  //       job: "Professora",
  //       email: "sara@gmail.com",
  //     },
  //   ];

  return (
    <div className="container">
      <div className="formulario">
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <h1>Cadastro de Clientes</h1>
          <div>
            <input
              {...register("nome", { required: "Nome é obrigatório" })}
              placeholder="Nome"
            />
            {errors.nome && <p>{errors.nome.message}</p>}
          </div>

          <div>
            <input
              {...register("cpfCnpj", {
                required: "CPF/CNPJ é obrigatório",
                pattern: {
                  value: /^\d{11}$|^\d{14}$/,
                  message: "CPF deve ter 11 dígitos ou CNPJ 14 dígitos",
                },
              })}
              placeholder="CPF/CNPJ"
            />
            {errors.cpfCnpj && <p>{errors.cpfCnpj.message}</p>}
          </div>

          <div>
            <input
              {...register("idade", {
                required: "Idade é obrigatória",
                min: {
                  value: 18,
                  message: "Você deve ter pelo menos 18 anos",
                },
                max: {
                  value: 100,
                  message: "Idade deve ser no máximo 100 anos",
                },
              })}
              type="number"
              placeholder="Idade"
            />
            {errors.idade && <p>{errors.idade.message}</p>}
          </div>

          <div>
            <input
              {...register("telefone", {
                required: "Telefone é obrigatório",
                pattern: {
                  value: /^\d{10,11}$/,
                  message: "Telefone deve ter 10 ou 11 dígitos",
                },
              })}
              placeholder="Telefone"
            />
            {errors.telefone && <p>{errors.telefone.message}</p>}
          </div>

          <div>
            <input
              {...register("profissao", {
                required: "Profissão é obrigatória",
              })}
              placeholder="Profissão"
            />
            {errors.profissao && <p>{errors.profissao.message}</p>}
          </div>

          <div>
            <input
              {...register("email", {
                required: "Email é obrigatório",
                pattern: { value: /\S+@\S+\.\S+/, message: "Email inválido" },
              })}
              placeholder="Email"
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>
          <button type="submit">Cadastrar</button>
        </form>
      </div>

      <div className="cards-container">
        {users.map((user) => (
          <div key={user.id} className="card">
            <div>
              <p>
                Nome: <span>{user.nome}</span>
              </p>
              <p>
                CPF/CNPJ: <span>{user.cpfCnpj}</span>
              </p>
              <p>
                Idade: <span>{user.idade}</span>
              </p>
              <p>
                Telefone: <span>{user.telefone}</span>
              </p>
              <p>
                Profissão: <span>{user.profissao}</span>
              </p>
              <p>
                Email: <span>{user.email}</span>
              </p>
            </div>
            <button
              onClick={() => setUsers(users.filter((u) => u.id !== user.id))}
            >
              <img src={Lixo} alt="Deletar" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
