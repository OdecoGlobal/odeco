import { projects } from '@/data/projects';
import { cn } from '@/lib/utils';
import { ArrowUpRightFromSquare } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { FaGithub } from 'react-icons/fa';
import { Badge } from '../ui/badge';

const ProjectComponent = () => {
  return (
    <section className="space-y-4">
      {projects.map((project, i) => (
        <div
          className={cn(
            i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse',
            'p-4 md:p-6 border rounded-xl group flex flex-col items-center lg:flex-row lg:items-stretch gap-3 '
          )}
          key={project.title}
        >
          <div className="w-full overflow-hidden lg:max-w-md rounded-xl">
            <Image
              src={project.image}
              alt={project.title}
              width={500}
              height={0}
              className="object-cover w-full h-auto transition-transform duration-700 ease-in-out group-hover:scale-110"
            />
          </div>
          <div className="flex flex-col justify-between w-full">
            <header className="space-y-4">
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <p className="text-sm font-medium text-muted-foreground">
                {project.description}
              </p>

              <div className="flex gap-2">
                <Button asChild className="btn" variant="secondary">
                  <Link href={project.link}>
                    <ArrowUpRightFromSquare /> Live Demo
                  </Link>
                </Button>
                <Button asChild className="btn" variant="secondary">
                  <Link href={project.github}>
                    <FaGithub /> Code
                  </Link>
                </Button>
              </div>
            </header>
            <div className="flex flex-wrap items-center gap-2">
              {project.tech.map(t => (
                <Badge variant="outline" key={t}>
                  {t}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      ))}
      <div></div>
    </section>
  );
};

export default ProjectComponent;
