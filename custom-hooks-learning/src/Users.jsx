import useFetch from "./hooks/useFetch";

const URL = "https://jsonplaceholder.typicode.com/users";
function Users() {
  const { data, isPending, error } = useFetch(URL);
  if (isPending) {
    return <h2>Loading ...</h2>;
  }
  if (error) {
    return <h2>{error}</h2>;
  }
  return (
    <>
      {data &&
        data.map((user) => {
          return <h2 key={user.id}>{user.name}</h2>;
        })}
    </>
  );
}

export default Users;
