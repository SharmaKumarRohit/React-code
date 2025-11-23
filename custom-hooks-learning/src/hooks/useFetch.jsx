import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    async function fetchData() {
      setIsPending(true);
      setError(null);

      try {
        const res = await fetch(url, { signal });
        if (!res.ok) {
          throw new Error(`Error: ${res.status}`);
        }

        const data = await res.json();
        setData(data);
      } catch (error) {
        if (error.name !== "AbortError") {
          setError(error.message);
        }
      } finally {
        if (!signal.aborted) {
          setIsPending(false);
        }
      }
    }

    fetchData();

    return () => controller.abort();
  }, [url]);

  return { data, isPending, error };
}

export default useFetch;
