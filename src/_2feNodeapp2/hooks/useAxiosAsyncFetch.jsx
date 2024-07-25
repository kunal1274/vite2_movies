import { useEffect, useState } from "react";
import axios from "axios";
import flattenObject from "../utils/flattenObjectUtils";

function useAsyncAxiosAll({
  url,
  method,
  body = {},
  headers = {},
  params = {},
  timeout = 0,
}) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const makeRequest = async () => {
    const config = {
      url,
      method,
      body,
      headers,
      params,
      timeout,
    };

    try {
      const response = await axios(config);
      if (!(method === "GET" && response.status === 200)) {
        // if (!response.ok) {
        return response.json().then((errorInfo) => {
          throw new Error(
            `HTTP URL Not Found Issue : ${response.status} and ${JSON.stringify(
              errorInfo
            )}`
          );
        });
      }
      const resultData = await response.data;
      setData(resultData);
      setLoading(false);
    } catch (error) {
      const errorDetails = {
        message: error.message,
        name: error.name,
        stack: error.stack,
        config: error.config || null,
        request: error.request || null,
        response: error.response || null,
      };
      setError(flattenObject(errorDetails));
      // setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    makeRequest();
  }, []);

  return { data, loading, error };
}

export { useAsyncAxiosAll };
