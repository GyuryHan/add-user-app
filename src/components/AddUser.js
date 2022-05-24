import React, { useState } from "react";
import styles from "./AddUser.module.css";
import ErrorModal from "./UI/ErrorModal";

const AddUserComp = (props) => {
  const [user, setUser] = useState([]);
  const [error, setError] = useState();

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const clickHandler = (e) => {
    e.preventDefault();
    if (user.age === undefined || user.name === undefined) {
      setError({
        title: "Invalid input",
        message: "이름 또는 나이를 입력해주세요.",
      });
      return;
    }
    // if (+user.age === 0 || user.name === undefined) {
    //   setError({
    //     title: "Invalid input",
    //     message: "이름 또는 나이를 입력해주세요.",
    //   });
    //   return;
    // }
    if (+user.age <= 0) {
      console.log(+user.age);
      setError({
        title: "Invalid age",
        message: "0 이하의 나이는 입력될 수 없습니다",
      });
      return;
    }
    props.onAddUser(user);
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <div className={styles.container}>
        <div>
          <p>사용자이름</p>
          <div className={styles.inputWrap}>
            <input
              type="text"
              defaultValue={user.name ? user.name : ""}
              name="name"
              onChange={changeHandler}
            />
          </div>
        </div>
        <p>나이</p>
        <input
          type="number"
          defaultValue={user.age ? user.age : ""}
          name="age"
          onChange={changeHandler}
        />
        <button className={styles.button} onClick={clickHandler}>
          Add User
        </button>
      </div>
    </>
  );
};

export default AddUserComp;
