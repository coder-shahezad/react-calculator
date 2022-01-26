const CalButton = ({ label }) => {
  return (
    <button
      type="button"
      className="w-36 py-3 px-5 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      {label}
    </button>
  );
};
export default CalButton;
