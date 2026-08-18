import { continuousLearning, ContinuousLearningCert } from '@/lib/data';
import { Dialog } from '@ark-ui/react/dialog';
import { Portal } from '@ark-ui/react/portal';
import { ArrowUp, Check, GitHub, Heart, X } from 'react-feather';
import MaxWidthWrapper from './MaxWidthWrapper';
import Image from 'next/image';
import Button from './Button';
import { motion, AnimatePresence } from 'motion/react';

const CertModal = ({
  isOpen,
  cert,
  handleClose,
}: {
  isOpen: boolean;
  cert: ContinuousLearningCert | null;
  handleClose: () => void;
}) => {
  const {
    title = '',
    focus = '',
    issuer = '',
    imagePath = '',
    application = '',
    skills = [],
    link = '',
  } = cert || {};

  return (
    <Dialog.Root
      onOpenChange={(details) => {
        if (!details.open) {
          handleClose();
        }
      }}
      open={isOpen}
      onEscapeKeyDown={handleClose}
      present={true}
    >
      <Portal>
        <AnimatePresence>
          {isOpen && cert && (
            <>
              <Dialog.Backdrop onClick={handleClose} asChild key="backdrop">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  onClick={handleClose}
                  className="fixed z-2 w-full h-full top-0 left-0 bg-(--foreground)/20 backdrop-blur-sm"
                />
              </Dialog.Backdrop>

              <Dialog.Positioner key="positioner" asChild>
                <motion.div>
                  <Dialog.Content asChild>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: 20 }}
                      transition={{ duration: 0.4 }}
                      className="z-3 md:h-10/11 border rounded-lg border-(--color-border) md:max-w-180 inset-0 m-auto fixed flex flex-col w-full h-full bg-(--background) overflow-hidden"
                    >
                      <div className="w-full shrink-0 px-5 flex py-3 justify-between items-center border-b border-(--color-border) bg-(--background)">
                        <Dialog.Title className="font-semibold text-(--color-primary) ">
                          {title} -{' '}
                          <span className="text-(--foreground)">{issuer}</span>
                        </Dialog.Title>
                        <button
                          onClick={handleClose}
                          className="p-2 border-(--color-border) border rounded-lg hover:bg-(--color-border)/50 transition-colors"
                        >
                          <X />
                        </button>
                      </div>

                      <div className="space-y-6 flex flex-1 flex-col gap-2 overflow-y-auto scrollbar-thin scrollbar-thumb-(--color-primary-subtle)">
                        <div className="shrink-0 w-full">
                          {imagePath && (
                            <Image
                              width={0}
                              height={0}
                              sizes="100vw"
                              src={imagePath}
                              alt={title}
                              className="w-full h-auto"
                            />
                          )}
                        </div>
                        <MaxWidthWrapper>
                          <div className="space-y-4 text-(--foreground)">
                            <div>
                              <strong className="text-((--foreground)) text-lg block mb-1">
                                The Focus:
                              </strong>
                              <Dialog.Description className=" leading-relaxed">
                                {focus}
                              </Dialog.Description>
                            </div>
                            <div>
                              <strong className="text-((--foreground)) text-lg block mb-1">
                                The Application:
                              </strong>
                              <p className="leading-relaxed">{application}</p>
                            </div>
                          </div>
                          <div className="my-6 pt-4 border-t border-(--color-border) flex flex-col gap-2">
                            <strong className="text-((--foreground)) text-lg block mb-1">
                              What I Learned:
                            </strong>
                            {skills.map((skill) => (
                              <div
                                key={skill}
                                className="border border-(--color-primary) flex gap-2 px-3 py-2 bg-(--color-primary-subtle) text-(--foreground) text-sm rounded-lg"
                              >
                                <Check size={14} />
                                <span>{skill}</span>
                              </div>
                            ))}
                          </div>
                        </MaxWidthWrapper>
                      </div>

                      {/* FOOTER */}
                      <div className="gap-4 w-full shrink-0 px-5 py-3 flex border-t border-(--color-border) bg-(--background)">
                        <div className="flex w-full">
                          {link ? (
                            <Button
                              className="flex flex-1 justify-center"
                              href={link}
                              isLinkBtn={true}
                              type="primary"
                            >
                              <ArrowUp className="rotate-45" />
                              Check Certificate
                            </Button>
                          ) : (
                            <Button
                              className="flex flex-1 justify-center"
                              href={link}
                              isLinkBtn={true}
                              type="primary"
                            >
                              <GitHub />
                              Check Projects on GitHub
                            </Button>
                          )}
                        </div>
                        <Button type="secondary">
                          <Heart />
                        </Button>
                      </div>
                    </motion.div>
                  </Dialog.Content>
                </motion.div>
              </Dialog.Positioner>
            </>
          )}
        </AnimatePresence>
      </Portal>
    </Dialog.Root>
  );
};

export default CertModal;
