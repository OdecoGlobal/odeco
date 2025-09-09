import { cn } from '@/lib/utils';
import Marquee from 'react-fast-marquee';

type SkillInfoType = {
  skill: string;
  dotColor: string;
};
export const skillsData1: SkillInfoType[] = [
  {
    dotColor: 'bg-red-500',
    skill: 'HTML',
  },
  {
    dotColor: 'bg-green-500',
    skill: 'CSS',
  },
  {
    dotColor: 'bg-amber-500',
    skill: 'JavaScript',
  },
  {
    dotColor: 'bg-blue-600',
    skill: 'TypeScript',
  },
  {
    dotColor: 'bg-sky-500',
    skill: 'React',
  },
  {
    dotColor: 'bg-slate-700',
    skill: 'Next.js',
  },
  {
    dotColor: 'bg-lime-500',
    skill: 'Node.js',
  },
];

export const skillsData2: SkillInfoType[] = [
  {
    dotColor: 'bg-cyan-600',
    skill: 'Express.js',
  },
  {
    dotColor: 'bg-fuchsia-500',
    skill: 'Tailwind CSS',
  },
  {
    dotColor: 'bg-emerald-600',
    skill: 'MongoDB',
  },
  {
    dotColor: 'bg-teal-600',
    skill: 'Mongoose',
  },
  {
    dotColor: 'bg-pink-600',
    skill: 'Prisma',
  },
  {
    dotColor: 'bg-rose-600',
    skill: 'shadcn/ui',
  },
  {
    dotColor: 'bg-violet-600',
    skill: 'PostgreSQL',
  },
];

const SkillsComponent = () => {
  const renderSkillBadge = (data: SkillInfoType) => (
    <div
      key={data.skill}
      className="py-2 px-4 rounded-full flex items-center justify-center w-fit gap-2 border-2 mx-2"
    >
      <div className={cn(data.dotColor, 'w-3 h-3 rounded-full')} />
      <span className="text-xs font-semibold">{data.skill}</span>
    </div>
  );
  return (
    <section id="#skills" className="space-y-4">
      <Marquee>{skillsData1.map(renderSkillBadge)}</Marquee>
      <Marquee direction="right">{skillsData2.map(renderSkillBadge)}</Marquee>
    </section>
  );
};

export default SkillsComponent;
