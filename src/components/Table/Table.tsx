import { useNavigate } from "react-router-dom";
import { Heroe } from "../../interfaces/heroe";

interface Props {
  heroes: Heroe[];
  onClickDelete: (id: number) => void;
}

const Table = ({ heroes, onClickDelete }: Props) => {
  const router = useNavigate();

  const handleCLickDelete = (id: number) => {
    onClickDelete(id);
  };

  return (
    <>
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th scope="col">Number</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Company</th>
            <th scope="col">Has Animated Series?</th>
            <th scope="col">Release Date</th>
            <th scope="col">Interaction</th>
          </tr>
        </thead>
        <tbody>
          {heroes.map((hero) => (
            <tr key={hero.id}>
              <th scope="row">{hero.id}</th>
              <td>{hero.name}</td>
              <td>{hero.age}</td>
              <td>{hero.company}</td>
              {hero.hasAnimationSeries ? <td>Si</td> : <td>No</td>}
              <td>{hero.releaseDate.toString()}</td>
              <td className="button-cotainer">
                <button
                  className="btn btn-success"
                  onClick={() => router(`/update/${hero.id}`)}
                >
                  Editar
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleCLickDelete(hero.id)}
                >
                  Borrar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
