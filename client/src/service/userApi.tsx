import axios from "axios";

type dataType = {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

type formUserLogin = {
  email: string;
  password: string;
};

export const postUser = async (data: dataType) => {
  const { data: user } = await axios.post(
    "https://news-with-mern.vercel.app/api/v1/users/signup",
    data,
    {
      withCredentials: true,
    }
  );
  return user;
};

export const loginUser = async (data: formUserLogin) => {
  const { data: user } = await axios.post(
    "https://news-with-mern.vercel.app/api/v1/users/login",
    data,
    {
      withCredentials: true,
    }
  );
  return user;
};

export const logoutUser = async () => {
  await axios.get("https://news-with-mern.vercel.app/api/v1/users/logout", {
    withCredentials: true,
  });
};
