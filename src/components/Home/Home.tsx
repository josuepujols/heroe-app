import useGetHeroesList from "../../hooks/useGetHeroesList";
import { HeroeService } from "../../services/heroeService";
import Header from "../Header/Header";
import Table from "../Table/Table";
import "./Home.css";

const Home = () => {
  const { heroes, GetHeroes } = useGetHeroesList();

  const deleteHeroe = async (id: number) => {
    const confirmation = confirm("Are you sure you want to delete");
    const service = new HeroeService();
    if (confirmation) {
      const response = await service.deleteHeroe(id);
      if (typeof response === "object") {
        alert("Heroe elimado con exito");
        GetHeroes();
      } else {
        alert("Error al borrar el heroe");
      }
    }
  };

  return (
    <>
      <Header route="/add" heading="Super Heroes App">
        Add new heroe
      </Header>
      <Table onClickDelete={deleteHeroe} heroes={heroes}></Table>
    </>
  );
};

export default Home;
