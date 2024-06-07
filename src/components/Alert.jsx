const Alert = ({ type, text }) => {
  return (
    <div className="fixed top-10 left-1/2 transform -translate-x-1/2">
      <div
        className={`p-2 ${
          type === "danger" ? "bg-red-800" : "bg-blue-800"
        } text-indigo-100 leading-none rounded-full flex items-center sm:min-w-full sm:px-4 md:max-w-md lg:max-w-xl`}
        role="alert"
      >
        <p
          className={`flex rounded-full ${
            type === "danger" ? "bg-red-500" : "bg-blue-500"
          } uppercase px-2 py-1 text-xs font-semibold mr-2`}
        >
          {type === "danger" ? "Failed" : "Success"}
        </p>
        <p className="text-left text-xs">{text}</p>
      </div>
    </div>
  );
};

export default Alert;
