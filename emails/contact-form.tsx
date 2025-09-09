// components/emails/ContactFormEmail.tsx
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Heading,
} from '@react-email/components';

type ContactFormEmailProps = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactFormEmail = ({
  name = 'John Doe',
  email = 'john.doe@example.com',
  subject = 'General Inquiry',
  message = "Hello, I'm interested in learning more about your services. Could you please provide more information about your pricing and availability? Thank you for your time.",
}: ContactFormEmailProps) => (
  <Html>
    <Head />
    <Body
      style={{
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f7f7f7',
        margin: 0,
        padding: 0,
      }}
    >
      <Container
        style={{
          backgroundColor: '#ffffff',
          padding: '20px',
          borderRadius: '8px',
          maxWidth: '600px',
          margin: '20px auto',
        }}
      >
        <Heading
          style={{ fontSize: '20px', color: '#111111', marginBottom: '10px' }}
        >
          New Contact Form Submission
        </Heading>

        <Section style={{ marginBottom: '10px' }}>
          <Text>
            <strong>Name:</strong> {name}
          </Text>
          <Text>
            <strong>Email:</strong> {email}
          </Text>
          <Text>
            <strong>Subject:</strong> {subject}
          </Text>
        </Section>

        <Section style={{ marginTop: '10px' }}>
          <Text style={{ whiteSpace: 'pre-wrap' }}>
            <strong>Message:</strong> {message}
          </Text>
        </Section>

        <Section style={{ marginTop: '20px' }}>
          <Text style={{ fontSize: '12px', color: '#888888' }}>
            This message was sent from your portfolio contact form.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);
export default ContactFormEmail;
