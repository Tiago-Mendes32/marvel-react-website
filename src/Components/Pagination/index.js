import "./Pagination.css";

const Pagination = (props) => {
  const maxPage = props.paginationData.maxPage;
  const currentIndex = props.currentIndex;
  const range = 2; // Define quantos botões aparecem antes e depois da página atual.

  // Calcula o intervalo de páginas
  const startPage = Math.max(currentIndex - range, 1);
  const endPage = Math.min(currentIndex + range, maxPage);

  // Se a página atual for menor que 5, mostramos as primeiras 5 páginas
  const showFirstPages = currentIndex < 5;

  // Gera os botões de páginas dinâmicos
  const pageButtons = [];
  if (showFirstPages) {
    // Exibe as primeiras 5 páginas
    for (let i = 1; i <= 5 && i <= maxPage; i++) {
      pageButtons.push(
        <button
          key={i}
          onClick={() => props.specificFunction(i - 1)} // Subtraia 1 para alinhar ao índice
          className={currentIndex === i - 1 ? "active" : ""}
        >
          {i}
        </button>
      );
    }
  } else {
    // Caso contrário, exibe páginas dentro do intervalo
    for (let i = startPage; i <= endPage; i++) {
      pageButtons.push(
        <button
          key={i}
          onClick={() => props.specificFunction(i - 1)} // Subtraia 1 para alinhar ao índice
          className={currentIndex === i - 1 ? "active" : ""}
        >
          {i}
        </button>
      );
    }
  }

  return (
    <div className="pagination">
      <button
        onClick={props.previousFunction}
        disabled={currentIndex === 0} // Desabilita se estiver na primeira página
      >
        PREVIOUS
      </button>
      {currentIndex >= 5 || startPage > 1 ? (
        <button onClick={() => props.specificFunction(0)}>1</button>
      ) : null}
      {currentIndex >= 5 || startPage > 2 ? <span>...</span> : null}{" "}
      {/* Reticências antes */}
      {pageButtons}
      {endPage < maxPage - 1 ? <span>...</span> : null}{" "}
      {/* Reticências depois */}
      {endPage < maxPage && (
        <button onClick={() => props.specificFunction(maxPage - 1)}>
          {maxPage}
        </button>
      )}
      <button
        onClick={props.nextFunction}
        disabled={currentIndex === maxPage - 1} // Desabilita se estiver na última página
      >
        NEXT
      </button>
    </div>
  );
};

export default Pagination;
