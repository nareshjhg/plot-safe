const StatCard = ({ title, value, growth, icon: Icon, color }) => {
  return (
    <div className="bg-white rounded-xl shadow p-5 flex justify-between">
      <div>
        <p className="text-gray-500 text-sm">{title}</p>
        <h2 className="text-2xl font-bold mt-1">{value}</h2>
        {growth && (
          <p className="text-green-600 text-xs mt-1">{growth}</p>
        )}
      </div>

      <div className={`p-3 rounded-lg ${color}`}>
        <Icon />
      </div>
    </div>
  );
};

export default StatCard;
