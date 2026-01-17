const Card = ({ title, children }) => {
  return (
    <div className="bg-white rounded-xl shadow p-6 space-y-4">
      {title && <h2 className="text-lg font-semibold">{title}</h2>}
      {children}
    </div>
  );
};

export default Card;
