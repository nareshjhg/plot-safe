import ColonyMap from '../components/ColonyMap';

const ColonyStatusPage = () => (
  <div className="p-4 max-w-6xl mx-auto">
    <h1 className="text-3xl font-bold mb-4 text-blue-700">Colony Approval Map</h1>
    <p className="mb-6 text-gray-600">Click on any marker to check colony status.</p>
    <ColonyMap />
  </div>
);

export default ColonyStatusPage;
