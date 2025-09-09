import { cn } from '@/lib/utils';
import Marquee from 'react-fast-marquee';

type SkillInfoType = {
  skill: string;
  dotColor: string;
};
export const skillsData1: SkillInfoType[] = [
  {
    dotColor: 'bg-red-300',
    skill: 'HTML',
  },
  {
    dotColor: 'bg-green-300',
    skill: 'CSS',
  },
  {
    dotColor: 'bg-amber-300',
    skill: 'JavaScript',
  },
  {
    dotColor: 'bg-blue-300',
    skill: 'TypeScript',
  },
  {
    dotColor: 'bg-sky-300',
    skill: 'React',
  },
  {
    dotColor: 'bg-slate-300',
    skill: 'Next.js',
  },
  {
    dotColor: 'bg-lime-300',
    skill: 'Node.js',
  },
  {
    dotColor: 'bg-cyan-300',
    skill: 'Express.js',
  },
];

export const skillsData2: SkillInfoType[] = [
  {
    dotColor: 'bg-purple-300',
    skill: 'Redis',
  },
  {
    dotColor: 'bg-fuchsia-300',
    skill: 'Tailwind CSS',
  },
  {
    dotColor: 'bg-emerald-300',
    skill: 'MongoDB',
  },
  {
    dotColor: 'bg-teal-300',
    skill: 'Mongoose',
  },
  {
    dotColor: 'bg-slate-300',
    skill: 'Git',
  },
  {
    dotColor: 'bg-pink-300',
    skill: 'Prisma',
  },
  {
    dotColor: 'bg-rose-300',
    skill: 'Shadcn/ui',
  },
  {
    dotColor: 'bg-violet-300',
    skill: 'PostgreSQL',
  },
];

const SkillsComponent = () => {
  const renderSkillBadge = (data: SkillInfoType) => (
    <div
      key={data.skill}
      className="flex items-center justify-center gap-2 px-4 py-2 mx-2 border-2 rounded-full w-fit"
    >
      <div className={cn(data.dotColor, 'w-3 h-3 rounded-full')} />
      <span className="text-xs font-semibold">{data.skill}</span>
    </div>
  );
  return (
    <>
      <Marquee>{skillsData1.map(renderSkillBadge)}</Marquee>
      <Marquee direction="right">{skillsData2.map(renderSkillBadge)}</Marquee>
    </>
  );
};

export default SkillsComponent;
