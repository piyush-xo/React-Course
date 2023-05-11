import { useSelector } from "react-redux";

import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";

function App() {
  const isAuth = useSelector((state) => state.authSlice.authStatus);

  return (
    <>
      <Header />
      {isAuth ? <UserProfile /> : <Auth />}
      <Counter />
    </>
  );
}

export default App;
