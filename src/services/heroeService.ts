import axios from "axios";
import { Heroe } from "../interfaces/heroe";

export class HeroeService {
  private url: string = "http://localhost:3000/heroes";

  public getHeroeById = async (id: number): Promise<Heroe> =>
    await axios
      .get(this.url + `/${id}`)
      .then((response) => response.data)
      .catch((err) => err);

  public createHeroe = async (heroe: Heroe): Promise<Heroe> =>
    await axios
      .post(this.url, heroe)
      .then((response) => response.data)
      .catch((err) => err);

  public updateHeroe = async (id: number, heroe: Heroe): Promise<Heroe> =>
    await axios
      .put(this.url + `/${id}`, heroe)
      .then((response) => response.data)
      .catch((err) => err);

  public deleteHeroe = async (id: number): Promise<Heroe> =>
    await axios
      .delete(this.url + `/${id}`)
      .then((response) => response.data)
      .catch((err) => err);
}
