import { Mail, Phone } from 'lucide-react';
import ContactForm from './contact-form';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'odecoglobal@gmail.com',
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+234 (81) 0000 0000',
  },
];
const ContactComponent = () => {
  return (
    <section id="contact" className="bg-muted space-y-3 p-6">
      <div className="text-center text-wrap space-y-3">
        <h3 className="text-3xl md:text-4xl font-medium">Contact Me</h3>
        <p className="text-sm text-muted-foreground">
          I&apos;m always open to discussing new opportunities and interesting
          projects with you.
        </p>
      </div>

      {/* CONATCT */}
      <div className="space-y-3 md:flex md:items-center md:justify-between md:gap-4 flex-wrap">
        <div className="space-y-4 mt-9">
          <h4 className="font-semibold text-lg">Contact Information</h4>
          <div className="space-y-4">
            {contactInfo.map(info => (
              <div key={info.title} className="flex items-center gap-2">
                <div className="bg-muted-foreground/40 p-2 rounded-lg">
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
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactComponent;
