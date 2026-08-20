import { JetBrains_Mono } from 'next/font/google';
import { CheckCircle, Mail } from 'react-feather';

const JetBrainsMono = JetBrains_Mono();

const ResumeSection = ({ ...delegated }) => {
  return (
    <div {...delegated}>
      <div className="flex flex-col gap-2">
        <p className="flex gap-2">
          <Mail className="stroke-(--color-primary)" />
          <span className={`${JetBrainsMono.className}`}>
            contact@hellokev.me
          </span>
        </p>
        <p className="flex gap-2">
          <CheckCircle className="stroke-(--color-primary)" />
          <span className={`${JetBrainsMono.className}`}>
            replies within 24 hours
          </span>
        </p>
      </div>
    </div>
  );
};

export default ResumeSection;
