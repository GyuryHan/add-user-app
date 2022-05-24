import styles from "./AddUser.module.css";
const UserListComp = (props) => {
  console.log(props.data);
  return (
    <div className={styles.container}>
      {props.data.map((user) => (
        <div className={styles.inputWrap}>
          <input
            key={user.id}
            type="text"
            defaultValue={`${user.name} (${user.age} 세)`}
          />
        </div>
      ))}
    </div>
  );
};

export default UserListComp;
