import React, { createContext, useState } from "react";
import Loader from "../../Loader";

type Props = {
  children: React.ReactNode;
};

export const LoaderContext = createContext<{
  load: (show?: boolean, message?: string) => void;
}>({
  load: () => {},
});

const LoaderProvider = ({ children }: Props) => {
  const [loaderVisible, setLoaderVisible] = useState(false);
  const [loaderMessage, setLoaderMessage] = useState("");
  const load = (show = true, message = "") => {
    setLoaderVisible(show);
    setLoaderMessage(message);
  };
  return (
    <LoaderContext.Provider value={{ load }}>
      {children}
      {loaderVisible && <Loader message={loaderMessage} />}
    </LoaderContext.Provider>
  );
};

export default LoaderProvider;
