import { ReactNode } from 'react';

type Props = {
  headline: string;
  children: ReactNode;
}

export const InfoCard = ({ headline, children }: Props) => {
  return (
    <article className="max-w-[600px] p-6 mx-auto bg-white rounded-lg shadow-md space-y-6">
      <h2 className="text-3xl font-semibold uppercase font-numbers">{headline}</h2>
      <div className="text-lg">{children}</div>
    </article>
  )
}
