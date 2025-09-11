import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Button } from '../ui/button';

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
const SocialIcons = () => {
  return (
    <div className="gap-2 flex-center">
      {socialIcons.map(icon => (
        <Button asChild key={icon.name} variant="outline" size="icon">
          <a href={icon.href} target="_blank" aria-label={icon.name}>
            <icon.icon />
          </a>
        </Button>
      ))}
    </div>
  );
};

export default SocialIcons;
