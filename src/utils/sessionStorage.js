const saveAuth = (key, data) => {
  let auth = {
    isAuth: true,
    token: data,
  };
  sessionStorage.setItem(key, JSON.stringify(auth));
};
const loadAuth = (key) => {
  try {
    return JSON.parse(sessionStorage.getItem(key));
  } catch (err) {
    return undefined;
  }
};
export {saveAuth,loadAuth}
