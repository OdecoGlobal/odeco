import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
  Link,
  Row,
  Column,
} from '@react-email/components';
import * as React from 'react';

interface ContactFormEmailProps {
  name: string;
  email: string;
  subject: string;
  message: string;
  submittedAt?: string;
}

export const ContactFormEmail = ({
  name = 'John Doe',
  email = 'john.doe@example.com',
  subject = 'General Inquiry',
  message = "Hello, I'm interested in learning more about your services. Could you please provide more information about your pricing and availability? Thank you for your time.",
  submittedAt = new Date().toLocaleString(),
}: ContactFormEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>New contact form submission from {name}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Heading style={title}>New Contact Form Submission</Heading>
            <Text style={subtitle}>Received on {submittedAt}</Text>
          </Section>

          <Section style={content}>
            <Row>
              <Column>
                <Text style={label}>FULL NAME</Text>
                <Text style={value}>{name}</Text>
              </Column>
            </Row>

            <Hr style={divider} />

            <Row>
              <Column>
                <Text style={label}>EMAIL ADDRESS</Text>
                <Link href={`mailto:${email}`} style={emailLink}>
                  {email}
                </Link>
              </Column>
            </Row>

            <Hr style={divider} />

            <Row>
              <Column>
                <Text style={label}>SUBJECT</Text>
                <Text style={value}>{subject}</Text>
              </Column>
            </Row>

            <Hr style={divider} />

            <Row>
              <Column>
                <Text style={label}>MESSAGE</Text>
                <Section style={messageBox}>
                  <Text style={messageText}>{message}</Text>
                </Section>
              </Column>
            </Row>
          </Section>

          <Section style={footer}>
            <Text style={footerText}>
              This email was automatically generated from your website&apos;s
              contact form. Reply directly to <strong>{email}</strong> to
              respond to this inquiry.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

// Styles
const main = {
  backgroundColor: '#f6f9fc',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  border: '1px solid #f0f0f0',
  borderRadius: '8px',
  margin: '40px auto',
  maxWidth: '600px',
  padding: '0',
};

const header = {
  backgroundColor: '#f8fafc',
  borderRadius: '8px 8px 0 0',
  borderBottom: '3px solid #3b82f6',
  padding: '32px 24px 24px',
  textAlign: 'center' as const,
};

const title = {
  color: '#1f2937',
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '0 0 8px 0',
};

const subtitle = {
  color: '#6b7280',
  fontSize: '14px',
  margin: '0',
};

const content = {
  padding: '24px',
};

const label = {
  color: '#374151',
  fontSize: '12px',
  fontWeight: 'bold',
  letterSpacing: '0.5px',
  margin: '0 0 8px 0',
  textTransform: 'uppercase' as const,
};

const value = {
  color: '#111827',
  fontSize: '16px',
  lineHeight: '1.5',
  margin: '0',
};

const emailLink = {
  color: '#3b82f6',
  fontSize: '16px',
  textDecoration: 'none',
};

const divider = {
  borderColor: '#e5e7eb',
  margin: '24px 0',
};

const messageBox = {
  backgroundColor: '#f9fafb',
  border: '1px solid #e5e7eb',
  borderRadius: '6px',
  padding: '16px',
};

const messageText = {
  color: '#111827',
  fontSize: '16px',
  lineHeight: '1.6',
  margin: '0',
  whiteSpace: 'pre-wrap' as const,
};

const footer = {
  backgroundColor: '#f9fafb',
  borderTop: '1px solid #e5e7eb',
  borderRadius: '0 0 8px 8px',
  padding: '20px 24px',
  textAlign: 'center' as const,
};

const footerText = {
  color: '#6b7280',
  fontSize: '12px',
  lineHeight: '1.4',
  margin: '0',
};

export default ContactFormEmail;
