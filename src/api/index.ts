import axios, { AxiosError, AxiosInstance } from 'axios';

export const url = 'https://ples.utb.cz/';

export function api(): AxiosInstance {
  const headers: { [key: string]: string } = {
    'Content-Type': 'application/json',
  };

  // if (state.account.token) {
  //   headers.Authorization = `Bearer ${state.account.token}`;
  // }

  const instance = axios.create({
    baseURL: url,
    headers,
  });

  instance.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      const { response } = error || { response: null, config: {} };
      const { status } = response || { status: null };

      console.error('error:', { error, response });

      if (status === 401) {
        // store.dispatch(logout());
      }

      return Promise.reject(error);
    },
  );
  instance.interceptors.request.use((request) => {
    return request;
  });

  return instance;
}
