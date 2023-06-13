const PageNavigation = (props) => {
    const {pages, currentPage, noOfPages, setCurrentPage} = {...props};
    return (<span className="Page-navigation">
    <p
      style={{ cursor: "pointer" }}
      onClick={() => {
        if (currentPage !== 1) {
          setCurrentPage(currentPage - 1);
        }
      }}
    >
      Prev
    </p>
    {pages.map((page) => (
      <>
        <span
          key={page}
          className={page === currentPage ? "active" : ""}
          style={{ cursor: "pointer" }}
          onClick={() => setCurrentPage(page)}
        >{` ${page} `}</span>
        <span>|</span>
      </>
    ))}
    <p
      style={{ cursor: "pointer" }}
      onClick={() => {
        if (currentPage !== noOfPages) {
          setCurrentPage(currentPage + 1);
        }
      }}
    >
      Next
    </p>
  </span>);
}

export default PageNavigation;