const STATUS_MAP = {
  completed: "bg-black text-white",
  "in-progress": "bg-gray-200 text-gray-800",
  pending: "bg-gray-100 text-gray-700",
};

const VerificationItem = ({ title, user, status }) => {
  return (
    <div className="flex justify-between items-center py-3 px-4 rounded-lg hover:bg-gray-50">
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-sm text-gray-500">{user}</p>
      </div>

      <span
        className={`text-xs px-3 py-1 rounded-full capitalize ${STATUS_MAP[status]}`}
      >
        {status}
      </span>
    </div>
  );
};

export default VerificationItem;
