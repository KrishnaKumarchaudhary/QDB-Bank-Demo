import { useState, useEffect } from "react";

export const useFetch = (url: RequestInfo | URL, data1: any) => {
  
  const [status, setStatus] = useState("free");
  const [data, setData] = useState(data1);

  useEffect(() => {
    if (!url) return;
    const fetchData = async () => {
      setStatus("fetching");
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      setStatus("fetched");
    };

    fetchData();
  }, [url]);

  return { status, data };
};
