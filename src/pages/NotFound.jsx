import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="mt-52 text-3xl font-extrabold text-primary lg:text-5xl xl:text-6xl">
        Page not found!
      </p>
      <Link
        to="/"
        className="text-2xl text-secondary mt-10 mb-44 underline xl:text-3xl"
      >
        Go back to homepage
      </Link>
    </div>
  );
};

export default NotFound;
