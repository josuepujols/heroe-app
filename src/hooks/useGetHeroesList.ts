import { useState, useEffect } from "react";
import axios from "axios";
import { Heroe } from "../interfaces/heroe";

const useGetHeroesList = () => {
  const [heroes, setHeroes] = useState<Heroe[]>([]);
  const URL = "http://localhost:3000/heroes";

  useEffect(() => {
    GetHeroes();
  }, []);

  async function GetHeroes() {
    try {
      axios.get<Heroe[]>(URL).then((response) => {
        setHeroes(response.data);
      });
    } catch (err) {
      alert(`An error ocurred while fething the data: ${err}`);
    }
  }

  return { heroes, GetHeroes };
};

export default useGetHeroesList;
