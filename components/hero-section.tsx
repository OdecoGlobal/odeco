import { cn } from '@/lib/utils';
import { Fira_Code } from 'next/font/google';
import Marquee from 'react-fast-marquee';
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
    <section className="space-y-3">
      <div>
        <h3
          className={cn(
            firaCode.className,
            'text-4xl md:text-8xl font-semibold tracking-wider'
          )}
        >
          Full-stack
        </h3>
        <div className="flex flex-col lg:flex-row lg:items-center gap-2">
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

      <div className="flex-center gap-2">
        {socialIcons.map(icon => (
          <Button asChild key={icon.name} variant="outline" className="btn">
            <a href={icon.href} target="_blank">
              <icon.icon /> {icon.name}
            </a>
          </Button>
        ))}
      </div>

      <div className="flex-center gap-2">
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
      <Marquee>
        <p className="text-sm">
          I&apos;m Okechukwu Chidera, an experienced full-stack developer
          passionate about building scalable web and mobile applications using
          modern technologies. With a strong foundation in both front-end and
          back-end development, I specialize in creating robust, user-friendly
          solutions that drive impact and efficiency. Dive into my portfolio to
          explore the innovative projects I’ve crafted and see how I can help
          bring your ideas to life with cutting-edge technology. Let’s
          collaborate to create something extraordinary! I&apos;m Okechukwu
          Chidera, an experienced full-stack developer whose goal is to create
          scalable web and mobile applications using modern technologies.
        </p>
      </Marquee>
    </section>
  );
};

export default HeroSection;
