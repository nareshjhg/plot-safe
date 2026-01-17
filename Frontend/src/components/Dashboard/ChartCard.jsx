const ChartCard = ({ title, children }) => {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-lg font-semibold mb-4">{title}</h2>

      {children || (
        <div className="h-60 bg-gray-100 rounded flex items-center justify-center text-gray-500">
          Chart goes here
        </div>
      )}
    </div>
  );
};

export default ChartCard;
