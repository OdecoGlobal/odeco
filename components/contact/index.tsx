import { Mail } from 'lucide-react';
import ContactForm from './contact-form';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'odecoglobal@gmail.com',
  },
];
const ContactComponent = () => {
  return (
    <>
      <header className="space-y-3 text-center text-wrap">
        <h3 className="text-3xl font-medium md:text-4xl">Contact Me</h3>
        <p className="text-sm text-muted-foreground">
          I&apos;m always open to discussing new opportunities and interesting
          projects with you.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-4 space-y-3 md:grid-cols-3 md:items-center">
        <div className="space-y-4">
          <h4 className="text-lg font-semibold">Contact Information</h4>
          <div className="space-y-4">
            {contactInfo.map(info => (
              <div key={info.title} className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-muted-foreground/40">
                  <info.icon className="w-5 h-5" />
                </div>
                <div className="text-sm">
                  <p className="font-semibold">{info.title}</p>
                  <p className="text-muted-foreground">{info.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-2">
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default ContactComponent;
