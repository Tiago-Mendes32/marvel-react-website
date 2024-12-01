import "./NavPages.css";

const NavPages = (props) => {
  function nextPage() {
    props.indiceModify(props.indice + 1);
  }
  return <button onClick={nextPage()}>props.text</button>;
};

export default NavPages;
