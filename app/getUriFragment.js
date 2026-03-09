export const getUriFragment = (uri) => {
  return uri.split("/").pop();
};
