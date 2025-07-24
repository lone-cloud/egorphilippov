'use client';

import { useState } from 'react';
import styled, { css } from 'styled-components';
import { lighten } from 'polished';

import Button from 'components/Button';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const isSubmitEnabled = email.length > 2 && message.length > 2;

  return (
    <ContactForm action="https://formspree.io/f/xeqdjarz" method="POST">
      <FormHeading>Get in touch</FormHeading>
      <FormGroup>
        <FormLabel htmlFor="email">Email</FormLabel>
        <EmailInput
          id="email"
          name="email"
          type="email"
          placeholder="your@email.com"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <FormLabel htmlFor="message">Message</FormLabel>
        <MessageInput
          id="message"
          name="message"
          rows={5}
          placeholder="What would you like to discuss?"
          onChange={(e) => setMessage(e.target.value)}
        />
      </FormGroup>

      <Button isDisabled={!isSubmitEnabled} type="submit">
        Send Message
      </Button>
    </ContactForm>
  );
}

const ContactForm = styled.form`
  margin: 3vh auto 0;
  max-width: 600px;
  padding: 2rem;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadows.small};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 0 1rem;
    padding: 1.5rem;
  }
`;

const FormHeading = styled.h1`
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
`;

const formControl = css`
  display: block;
  width: 100%;
  padding: 0.75rem 1rem;
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  line-height: ${({ theme }) => theme.typography.lineHeight.normal};
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.white};
  background-clip: padding-box;
  border: 2px solid ${({ theme }) => theme.colors.greyLight};
  border-radius: 8px;
  transition: all 200ms ease;

  &::placeholder {
    color: ${({ theme }) => theme.colors.grey};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.brand};
    box-shadow: 0 0 0 3px ${({ theme }) => lighten(0.4, theme.colors.brand)};
  }
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.black};
`;

const MessageInput = styled.textarea`
  ${formControl}
  resize: vertical;
  min-height: 120px;
`;

const EmailInput = styled.input`
  ${formControl}
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;
