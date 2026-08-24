'use client';
import { Send } from 'react-feather';
import Button from './Button';
import Input from './Input';
import { motion } from 'motion/react';
import {
  whileInView,
  initial,
  transition,
  viewport,
} from '@/lib/animation-settings';
import { useState, useTransition } from 'react';
import { sendResume } from '../actions/sendResume';
import { Turnstile } from '@marsidev/react-turnstile';

const statusStyles = {
  error: 'bg-(--color-error)/10 border-(--color-error)',
  success: 'bg-(--color-success)/10 border-(--color-success)',
  idle: '',
};

const ResumeForm = ({ ...delegated }) => {
  const [isPending, startTransition] = useTransition();
  const [state, setState] = useState({
    message: '',
    result: 'idle',
  });
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);

  const handleSubmit = (formData: FormData) => {
    if (!turnstileToken) {
      setState({
        message: 'Please wait for the security check to complete',
        result: 'error',
      });
      return;
    }

    formData.append('turnstileToken', turnstileToken);
    startTransition(async () => {
      const result = await sendResume(formData);

      if (result?.error) {
        setState({ message: result.error, result: 'error' });
      } else {
        setState({
          message: 'Resume sent!, Check your inbox.',
          result: 'success',
        });
      }
    });
  };
  return (
    <motion.div
      initial={initial}
      whileInView={whileInView}
      transition={transition}
      viewport={viewport}
      {...delegated}
    >
      <form
        action={handleSubmit}
        className="flex flex-col gap-6 px-6 -mt-8 md:mt-12 py-8 border-2 border-(--color-border) rounded-xl"
      >
        <Input
          type="text"
          placeholder="Michael's Lab"
          label="Name or Company Name"
          name="name"
          required
        />
        <Input
          type="email"
          placeholder="mail@michael.com"
          label="Email"
          name="email"
          required
        />
        {state.result !== 'idle' && (
          <p
            className={`text-sm border p-2 rounded-lg ${statusStyles[state.result as keyof typeof statusStyles]}`}
          >
            {state.message}
          </p>
        )}

        <Turnstile
          options={{ theme: 'light', size: 'flexible' }}
          siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
          onSuccess={(token) => setTurnstileToken(token)}
        />

        <Button disabled={isPending} className="flex-1" type="primary">
          <Send size={16} />
          {isPending ? 'Sending...' : 'Request Resume (Automated)'}
        </Button>
        <p className="text-sm text-center">
          Your details are only used to send the resume.
        </p>
      </form>
    </motion.div>
  );
};

export default ResumeForm;
