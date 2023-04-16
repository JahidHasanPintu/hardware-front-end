const baseUrl = "http://localhost:5000";

const version = "api/v1";

export const getApiUrl = () => {
  return `${baseUrl}/${version}`;
};
