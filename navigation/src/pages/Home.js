import { Link, useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  function navigationHandler() {
    navigate("/products");
  }

  return (
    <>
      <h1>Home Page</h1>
      <p>
        Go to <Link to="/products">the list of products.</Link>
      </p>
      <button onClick={navigationHandler}>Products</button>
    </>
  );
}

export default HomePage;
