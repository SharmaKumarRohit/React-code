import { useRef, useEffect } from "react";
function UserForm() {
  const usernameRef = useRef();
  useEffect(() => {
    usernameRef.current.focus();
  }, []);
  return (
    <>
      <form>
        <input type="text" placeholder="Username" ref={usernameRef} />
      </form>
    </>
  );
}

export default UserForm;
