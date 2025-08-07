let accessToken: string | null = null;

export const getAccessToken = (): string | null => {
  return accessToken;
};

export const setAccessToken = (token: string | null) => {
  accessToken = token;
};

export const fetchWithApi = async (url: string, options: RequestInit = {}) => {
  const headers = {
    ...options.headers,
    Authorization: accessToken ? `Bearer ${accessToken}` : "",
  };
  return fetch(url, { ...options, headers });
};
