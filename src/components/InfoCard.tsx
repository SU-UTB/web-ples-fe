interface InfoCardProps {
  headline: string;
  children: React.ReactNode;
}

const InfoCard: React.FC<InfoCardProps> = ({ headline, children }) => {
  return (
    <article className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
      <h2 className="border-b-2 border-gray-200 pb-2 mb-4 text-xl font-semibold">
        {headline}
      </h2>
      <div className="text-gray-800 text-base">{children}</div>
    </article>
  );
};

export default InfoCard;
