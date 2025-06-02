import NoFoundContent from "../components/NoFoundContent";
import { useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();
  return (
    <NoFoundContent>
      {error?.response?.data?.message ||
        error?.message ||
        "Something Went Wrong!!"}
    </NoFoundContent>
  );
}

export default Error;
