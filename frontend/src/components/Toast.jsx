const Toast = ({ message, status, onClose }) => {
  const bgColor =
    status === "success" ? "bg-green-500" : status === "error" ? "bg-red-500" : "bg-gray-500";

  return (
    <div
      className={`fixed top-4 right-4 max-w-xs w-full p-4 text-white rounded-lg shadow-lg ${bgColor} animate-fadeInOut`}
    >
      <div className="flex justify-between items-center">
        <div>
          <h4 className="text-lg font-bold">{status === "success" ? "Success" : "Error"}</h4>
          <p className="text-sm">{message}</p>
        </div>
        <button
          className="ml-4 text-xl leading-none"
          onClick={onClose}
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Toast;