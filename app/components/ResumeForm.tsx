'use client';
import { Send } from 'react-feather';
import Button from './Button';
import Input from './Input';
import { motion } from 'motion/react';
import { whileInView, initial, transition, viewport } from '@/lib/animation-settings';
const ResumeForm = ({ ...delegated }) => {
  return (
    <motion.div
      initial={initial}
      whileInView={whileInView}
      transition={transition}
      viewport={viewport}
      {...delegated}
    >
      <form className="flex flex-col gap-6 px-6 -mt-8 md:mt-12 py-8 border-2 border-(--color-border) rounded-xl">
        <Input
          htmlType="text"
          placeholder="Michael's Lab"
          label="Name or Company Name"
        />
        <Input htmlType="email" placeholder="mail@michael.com" label="Email" />
        <Button className="h-8" type="primary">
          <Send size={16} />
          Request Resume (Automated Delivery)
        </Button>
        <p className="text-sm text-center">
          Your details are only used to send the resume.
        </p>
      </form>
    </motion.div>
  );
};

export default ResumeForm;
