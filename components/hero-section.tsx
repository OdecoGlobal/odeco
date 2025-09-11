import { cn } from '@/lib/utils';
import { Fira_Code } from 'next/font/google';
import { Button } from './ui/button';
import Link from 'next/link';
import { DownloadCloudIcon } from 'lucide-react';
import SocialIcons from './shared/social-icons';

const firaCode = Fira_Code({ subsets: ['latin'] });

const HeroSection = () => {
  return (
    <>
      <div>
        <h3
          className={cn(
            firaCode.className,
            'text-5xl sm:text-6xl md:text-8xl font-semibold tracking-wider',
          )}
        >
          Full-stack
        </h3>
        <div className="flex flex-col gap-2 lg:flex-row lg:items-center">
          <h3
            className={cn(
              firaCode.className,
              'text-5xl sm:text-6xl  md:text-8xl font-semibold tracking-wider lg:order-2',
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
        <Button asChild className="btn">
          <Link href="#projects">View My Work</Link>
        </Button>
        <Button asChild variant="outline" className="btn">
          <Link href="#contact">Get In Touch</Link>
        </Button>
        <Button asChild className="btn">
          <Link href="OKECHUKWU_CHIDERA MUNACHIMSO_RESUME.pdf" download>
            <DownloadCloudIcon />
            Resume
          </Link>
        </Button>
      </div>
      <SocialIcons />
    </>
  );
};

export default HeroSection;
