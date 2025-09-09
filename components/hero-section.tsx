import { cn } from '@/lib/utils';
import { Fira_Code } from 'next/font/google';
import { Button } from './ui/button';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';
import { FaXTwitter } from 'react-icons/fa6';
import { DownloadCloudIcon } from 'lucide-react';

const firaCode = Fira_Code({ subsets: ['latin'] });
const socialIcons = [
  {
    name: 'Github',
    href: 'https://github.com/OdecoGlobal',
    icon: FaGithub,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/okechukwu-chidera/',
    icon: FaLinkedin,
  },
  {
    name: 'X',
    href: 'https://x.com/M_Derah',
    icon: FaXTwitter,
  },
];

const HeroSection = () => {
  return (
    <section id="#" className="space-y-3">
      <div>
        <h3
          className={cn(
            firaCode.className,
            'text-4xl md:text-8xl font-semibold tracking-wider'
          )}
        >
          Full-stack
        </h3>
        <div className="flex flex-col gap-2 lg:flex-row lg:items-center">
          <h3
            className={cn(
              firaCode.className,
              'text-4xl md:text-8xl font-semibold tracking-wider lg:order-2'
            )}
          >
            Developer
          </h3>
          <p className="lg:order-1 text-muted-foreground">
            I&apos;m Okechukwu Chidera, an experienced full-stack developer
            passionate about building scalable web and mobile applications using
            modern technologies. Let&apos;s collaborate to create something
            extraordinary!
          </p>
        </div>
      </div>

      <div className="gap-2 flex-center">
        {socialIcons.map(icon => (
          <Button asChild key={icon.name} variant="outline" className="btn">
            <a href={icon.href} target="_blank">
              <icon.icon /> {icon.name}
            </a>
          </Button>
        ))}
      </div>

      <div className="gap-2 flex-center">
        <Button asChild className="btn">
          <Link href="#projects">View My Work</Link>
        </Button>
        <Button asChild variant="outline" className="btn">
          <Link href="#contact">Get In Touch</Link>
        </Button>
        <Button asChild className="btn">
          <Link href="okechukwu-chidera-resume.pdf" download>
            <DownloadCloudIcon />
            Resume
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
