import "./style.css";
import Lixo from "../../assets/delete-icon.svg";

function Home() {
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

  return (
    <div className="container">
      <form>
        <h1>Cadastro de Clientes</h1>
        <input
          placeholder="Nome"
          name="nome completo / razão social"
          type="text"
        />
        <input placeholder="CPF/CNPJ" name="CPF/CNPJ" type="number" />
        <input placeholder="Idade" name="idade" type="number" />
        <input placeholder="Telefone" name="Telefone" type="number" />
        <input
          placeholder="Área de atuação"
          name="Area de atuação"
          type="text"
        />
        <input placeholder="exemple@email.com.br" name="E-mail" type="email" />
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
