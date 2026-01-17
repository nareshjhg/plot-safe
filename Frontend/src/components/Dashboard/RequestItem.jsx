const STATUS_STYLES = {
  pending: "bg-gray-100 text-gray-700",
  "in-progress": "bg-yellow-100 text-yellow-700",
  completed: "bg-green-100 text-green-700",
};

const RequestItem = ({
  name,
  buyer,
  verifier,
  status = "pending",
  actionLabel,
  onAction,
}) => {
  return (
    <div className="border rounded-lg p-4 flex justify-between items-center">
      <div>
        <h4 className="font-semibold">{name}</h4>
        <p className="text-sm text-gray-600">Buyer: {buyer}</p>
        <p className="text-sm text-gray-600">Verifier: {verifier}</p>
      </div>

      <div className="text-right space-y-2">
        <span
          className={`text-xs px-3 py-1 rounded-full capitalize ${STATUS_STYLES[status]}`}
        >
          {status}
        </span>

        {actionLabel && (
          <button
            onClick={onAction}
            className="block bg-black text-white text-xs px-3 py-1 rounded"
          >
            {actionLabel}
          </button>
        )}
      </div>
    </div>
  );
};

export default RequestItem;
