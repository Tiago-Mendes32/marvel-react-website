import "./Pagination.css";

const Pagination = (props) => {
  const maxPage = props.paginationData.maxPage;
  const currentIndex = props.currentIndex;
  const range = 2;

  const startPage = Math.max(currentIndex - range, 1);
  const endPage = Math.min(currentIndex + range, maxPage);

  const showFirstPages = currentIndex < 4;

  const pageButtons = [];

  if (showFirstPages) {
    for (let i = 1; i <= 5 && i <= maxPage; i++) {
      pageButtons.push(
        <button
          key={i}
          onClick={() => props.specificFunction(i - 1)}
          className={currentIndex === i - 1 ? "active" : ""}
        >
          {i}
        </button>
      );
    }
  } else {
    for (let i = startPage + 1; i <= endPage + 1; i++) {
      pageButtons.push(
        <button
          key={i}
          onClick={() => props.specificFunction(i - 1)}
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
        disabled={currentIndex === 0}
        className="prev-next-buttons"
      >
        PREVIOUS
      </button>

      {currentIndex >= 4 || startPage > 1 ? (
        <button onClick={() => props.specificFunction(0)}>1</button>
      ) : null}

      {currentIndex >= 4 || startPage > 2 ? <span>...</span> : null}

      {pageButtons}

      {endPage < maxPage - 1 ? <span>...</span> : null}

      {endPage < maxPage && (
        <button onClick={() => props.specificFunction(maxPage - 1)}>
          {maxPage}
        </button>
      )}
      {console.log(`Index: ${currentIndex} Variavel: ${showFirstPages}`)}
      <button
        onClick={props.nextFunction}
        disabled={currentIndex === maxPage - 1}
        className="prev-next-buttons"
      >
        NEXT
      </button>
    </div>
  );
};

export default Pagination;
