interface Props {
  children: string;
  onClick: () => void;
}

const ButtonForm = ({ children, onClick }: Props) => {
  return (
    <>
      <button type="button" className="btn btn-primary" onClick={onClick}>
        {children}
      </button>
    </>
  );
};

export default ButtonForm;
