import { useState } from 'react';
import axios from 'axios';

type methodsTypes = 'get' | 'post' | 'put' | 'patch' | 'delete';

type requestTypes = (
  url: string,
  method?: methodsTypes,
  body?: string | null | Record<string, unknown>,
  headers?: Record<string, unknown>,
) => void;

export const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request: requestTypes = async (
    url,
    method = 'get',
    body = null,
    headers = {},
  ) => {
    try {
      const data = await axios({
        method,
        url,
        data: body,
        headers,
      });

      console.log(data);
    } catch (err) {
      setError(err);
      console.log(err);
    }
  };

  return request;
};
