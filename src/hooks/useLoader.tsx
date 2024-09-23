import { useContext, useEffect } from "react";
import { LoaderContext } from "../components/dashboard/providers/LoaderProvider";
import { toast } from "react-toastify";

const formatError = (message = "") => {
  const errMessage = message.toLowerCase();
  if (errMessage.includes("server error")) {
    return "We're unable to process your request at the moment, try again shortly";
  }
  if (errMessage.includes("JSON")) {
    return "An error occured while handling your request, try again shortly";
  }

  return message;
};

export default function useLoader(
  loading: boolean | { loading: boolean; message?: string },
  err: any
) {
  const loader = useContext(LoaderContext);

  useEffect(() => {
    if (typeof loading === "boolean") {
      loader.load(loading);
    } else {
      if (loading?.message) {
        loader.load(loading?.loading, loading?.message);
      }
    }
  }, [loading]);

  useEffect(() => {
    if (err) {
      const message = typeof err === "string" ? err : err?.toString();

      toast.error(formatError(message));
    }
  }, [err]);

  return loader;
}
