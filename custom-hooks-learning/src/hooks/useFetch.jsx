import { useEffect, useState } from "react";
function useFetch(url) {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (!url) {
      setData(null);
      setIsPending(false);
      setError(null);
      return;
    }
    const controller = new AbortController();
    let isCurrent = true;
    setIsPending(true);
    async function fetchData() {
      try {
        const res = await fetch(url, { signal: controller.signal });
        if (!res.ok) {
          throw Error("Something Went Wrong");
        }
        const resData = await res.json();
        if (isCurrent) {
          setData(resData);
          setError(null);
        }
      } catch (error) {
        if (isCurrent && error.name !== "AbortError") {
          setError(error.message);
        }
      } finally {
        if (isCurrent) {
          setIsPending(false);
        }
      }
    }
    fetchData();
    return () => {
      isCurrent = false;
      controller.abort();
    };
  }, []);
  return { data, isPending, error };
}

export default useFetch;
