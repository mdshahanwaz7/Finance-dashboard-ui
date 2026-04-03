import { Insights } from "../components/Insights/Insights";

export const InsightsPage = ({ transactions }) => {
  return (
    <div className="p-4">
      <h1 className="text-white text-2xl mb-4">Insights</h1>

      <Insights transactions={transactions} />
    </div>
  );
};