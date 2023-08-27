import { useNavigate } from "react-router-dom";

interface Props {
  route: string;
  children: string;
  heading: string;
}

const Header = ({ route, children, heading }: Props) => {
  const router = useNavigate();
  return (
    <>
      <div className="d-flex d-flex justify-content-between">
        <button className="btn btn-dark" onClick={() => router(route)}>
          {children}
        </button>
        <h1>{heading}</h1>
        <div></div>
      </div>
    </>
  );
};

export default Header;
