import { APP_NAME } from '@/lib/constants';
import SocialIcons from '../social-icons';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t flex-center gap-4 p-6">
      <div className="p-5 flex-center text-sm">
        &copy; {currentYear} {APP_NAME}. All Right Reserved
      </div>
      <SocialIcons />
    </footer>
  );
};

export default Footer;
