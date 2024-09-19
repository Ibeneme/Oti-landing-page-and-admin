type Props = {
  message?: string;
};

const Loader = ({ message }: Props) => {
  return (
    <div className="flex items-center justify-center w-screen h-screen fixed top-0 left-0 bg-black/90 z-50">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        <p className="text-white font-medium">{message || "Loading..."}</p>
      </div>
    </div>
  );
};

export default Loader;
