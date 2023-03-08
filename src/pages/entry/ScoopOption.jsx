const ScoopOption = ({ name, imagePath }) => {
  return (
    <div>
      <img src={`http://localhost:3030/${imagePath}`} alt={name} />
    </div>
  );
};
export default ScoopOption;
