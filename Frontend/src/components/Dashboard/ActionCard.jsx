const ACTION_COLOR = {
  blue: "bg-blue-600",
  green: "bg-green-600",
  purple: "bg-purple-600",
};

const ActionCard = ({ title, subtitle, icon: Icon, color = "blue", onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`rounded-xl p-6 text-white ${ACTION_COLOR[color]} hover:opacity-90 transition cursor-pointer`}
    >
      <Icon className="mb-3" />
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm opacity-90">{subtitle}</p>
    </div>
  );
};

export default ActionCard;
