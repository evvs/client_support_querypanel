import { useState } from 'react';
import axios from 'axios';

type methodsTypes = 'get' | 'post' | 'put' | 'patch' | 'delete'

type useHttpTypes = (
  url: string,
  method?: methodsTypes,
  body?: string | null,
  headers?: Record<string, unknown>,
) => void;

export const useHttp: useHttpTypes = async (
  url,
  method = 'get',
  body = null,
  headers = {},
) => {
  const data = await axios({
    method,
    url,
    data: body,
    headers,
  });

  console.log(data);
};
