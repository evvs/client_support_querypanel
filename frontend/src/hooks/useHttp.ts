import { useState } from 'react';
import axios from 'axios';

type methodsTypes = 'get' | 'post' | 'put' | 'patch' | 'delete';

type useHttpTypes = (
  url: string,
  method?: methodsTypes,
  body?: string | null,
  headers?: Record<string, unknown>,
) => void;

export const useHttp: useHttpTypes = (
  url,
  method = 'get',
  body = null,
  headers = {},
) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = async () => {
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
};
