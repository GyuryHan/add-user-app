import { useState } from "react";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";

const App = () => {
  const [user, setUser] = useState([]);

  const saveUserInfo = (userInfo) => {
    console.log(userInfo);
    const { name, age } = userInfo;
    setUser((prevState) => {
      return [...prevState, { name, age, id: Math.random().toString() }];
    });
  };
  return (
    <>
      <AddUser onAddUser={saveUserInfo} />
      <UserList data={user} />;
    </>
  );
};

export default App;
