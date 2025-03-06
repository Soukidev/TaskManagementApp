import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();

  return (
    <section className="py-6 dark:bg-gray-900 bg-white dark:text-white-900 ">
      <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48">
        <h1 className="text-5xl font-bold leading-none text-center">
          Sign up now
        </h1>
        <p className="text-xl font-medium text-center">
          At a assumenda quas cum earum ut itaque commodi saepe rem aspernatur
          quam natus quis nihil quod, hic explicabo doloribus magnam neque,
          exercitationem eius sunt!
        </p>
        <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-8">
          <button
            onClick={() => navigate("/register")}
            className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-600 dark:text-gray-50"
          >
            Get ur account
          </button>
          <button
            className="px-8 py-3 text-lg font-normal border rounded dark:bg-gray-800 dark:text-gray-50 dark:border-gray-700"
            onClick={() => navigate("/login")}
          >
            Learn more login
          </button>
        </div>
      </div>
    </section>
  );
}
