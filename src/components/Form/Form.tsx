import { useEffect, useState } from "react";
import { Heroe } from "../../interfaces/heroe";
import "./Form.css";
import Header from "../Header/Header";
import ButtonForm from "../ButtonForm/ButtonForm";
import { useNavigate, useParams } from "react-router-dom";
import { HeroeService } from "../../services/heroeService";

const Form = () => {
  const { id } = useParams();
  const idParsed = parseInt(id as string);
  const router = useNavigate();
  const service = new HeroeService();
  const [heroe, setHeroe] = useState<Heroe>({
    id: 0,
    name: "",
    age: 0,
    company: "",
    hasAnimationSeries: false,
    releaseDate: new Date(),
  });

  useEffect(() => {
    if (idParsed > 0) {
      getHeroeById();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idParsed]);

  const getHeroeById = async () => {
    try {
      const heroeResponse = await service.getHeroeById(idParsed);
      setHeroe(heroeResponse);
    } catch (err) {
      alert("error getting heroe");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHeroe({ ...heroe, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHeroe({ ...heroe, [e.target.name]: e.target.checked });
  };

  const handleClickAdd = async () => {
    const heroeResponse = await service.createHeroe(heroe);
    if (heroeResponse !== undefined && heroeResponse !== null) {
      alert("Heroe creado con exito");
      router("/home");
    } else {
      alert(`Error al crear el heroe`);
    }
  };

  const handleClickUpdate = async () => {
    console.log(heroe);
    const heroeResponse = await service.updateHeroe(idParsed, heroe);
    if (heroeResponse !== undefined && heroeResponse !== null) {
      alert("Heroe actualizado con exito");
      router("/home");
    } else {
      alert(`Error al actualizar el heroe`);
    }
  };

  return (
    <>
      <Header route="/home" heading="Create new Hereo">
        Back
      </Header>
      <div>
        <form id="form" className="w-50 card">
          <div className="mb-3">
            <input
              disabled={idParsed > 0 && true}
              onChange={handleChange}
              name="id"
              type="number"
              className="form-control"
              value={heroe.id}
              id="id"
              placeholder="Enter your id"
            />
          </div>
          <div className="mb-3">
            <input
              onChange={handleChange}
              name="name"
              type="text"
              className="form-control"
              id="name"
              value={heroe.name}
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-3">
            <input
              onChange={handleChange}
              name="age"
              type="number"
              className="form-control"
              id="age"
              value={heroe.age}
              placeholder="Enter your age"
            />
          </div>
          <div className="mb-3">
            <input
              onChange={handleChange}
              name="company"
              type="text"
              className="form-control"
              id="company"
              value={heroe.company}
              placeholder="Enter your company"
            />
          </div>
          <div className="mb-3 cursor-pointer">
            <input
              className="cursor-pointer"
              type="checkbox"
              onChange={handleCheckboxChange}
              name="hasAnimationSeries"
              checked={heroe.hasAnimationSeries}
              id="hasAnimationSeries"
            />
            <label className="cursor-pointer" htmlFor="hasAnimationSeries">
              Has animated series?
            </label>
          </div>
          {id === undefined ? (
            <ButtonForm onClick={handleClickAdd}>Add</ButtonForm>
          ) : (
            <ButtonForm onClick={handleClickUpdate}>Update</ButtonForm>
          )}
        </form>
      </div>
    </>
  );
};

export default Form;
