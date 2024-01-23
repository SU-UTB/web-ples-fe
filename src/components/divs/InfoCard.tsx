import { ReactNode } from 'react';

type Props = {
  headline: string;
  children: ReactNode;
}

export const InfoCard = ({ headline, children }: Props) => {
  return (
    <article className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
      <h2 className="uppercase pb-2 mb-4 text-4xl font-semibold font-numbers">{headline}</h2>
      <div className="text-gray-800 text-base">{children}</div>
    </article>
  )
}
