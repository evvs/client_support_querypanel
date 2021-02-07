import { useState } from 'react';
import axios from 'axios';

type methodsTypes = 'get' | 'post' | 'put' | 'patch' | 'delete';

type requestTypes = (
  url: string,
  method?: methodsTypes,
  body?: null | Record<string, unknown>,
  headers?: Record<string, unknown>,
) => unknown;

export const useHttp = () => {
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);

  const request: requestTypes = async (
    url,
    method = 'get',
    body = null,
    headers = {},
  ) => {
    setLoading(true);
    try {
      const data = await axios({
        method,
        url,
        data: body,
        headers,
      });

      setLoading(false);
      return data;
    } catch (err) {
      setLoading(false);

      setErrors(err.response.data.message);
      throw err;
    }
  };

  const clearErrors = () => setErrors(null);

  return {
    request, errors, clearErrors, loading,
  };
};
