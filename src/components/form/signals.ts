import { createStore } from "solid-js/store";

export const useForm = () => {
  const [data, setData] = createStore({} as any);

  const register = (name: any) => {
    return {
      value: data[name],
      onInput: (e: any) => {
        setData({ [name]: e.currentTarget.value });
      },
    };
  };

  return { register, data };
};
