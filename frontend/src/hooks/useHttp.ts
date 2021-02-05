import { useState } from 'react';
import axios from 'axios';

type methodsTypes = 'get' | 'post' | 'put' | 'patch' | 'delete';

type requestTypes = (
  url: string,
  method?: methodsTypes,
  body?: null | Record<string, unknown>,
  headers?: Record<string, unknown>,
) => void;

export const useHttp = () => {
  const [errors, setErrors] = useState(null);

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
      console.log(err.response.data.message);
      setErrors(err.response.data.message);
    }
  };

  const clearErrors = () => setErrors(null);

  return { request, errors, clearErrors };
};
