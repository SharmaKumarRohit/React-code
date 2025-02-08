import useLocalStorage from "./hooks/useLocalStorage";

function BasicForm() {
  const [firstname, setFirstname] = useLocalStorage("firstname", "");
  const [lastname, setLastname] = useLocalStorage("lastname", "");
  return (
    <>
      <form>
        <label htmlFor="firstname">Firstname</label>
        <input
          type="text"
          name="firstname"
          id="firstname"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
        <h1>firstName: {firstname}</h1>
        <label htmlFor="lastname">Lastname</label>
        <input
          type="text"
          name="lastname"
          id="lastname"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
        <h1>lastName: {lastname}</h1>
      </form>
    </>
  );
}

export default BasicForm;
