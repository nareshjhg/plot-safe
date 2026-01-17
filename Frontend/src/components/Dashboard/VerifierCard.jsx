import { Star } from "lucide-react";

const VerifierCard = ({ name, id, rating, completed, assigned }) => {
  return (
    <div className="border rounded-lg p-4 flex justify-between items-center">
      <div>
        <h4 className="font-semibold">{name}</h4>
        <p className="text-sm text-gray-500">{id}</p>
        <p className="text-sm text-gray-600">
          Currently assigned: {assigned}
        </p>
      </div>

      <div className="text-right">
        <p className="flex items-center gap-1 justify-end">
          <Star size={16} className="text-yellow-500" />
          <span className="font-semibold">{rating}</span>
        </p>
        <p className="text-sm text-gray-600">{completed} completed</p>
      </div>
    </div>
  );
};

export default VerifierCard;
