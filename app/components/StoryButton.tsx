import Image from 'next/image';

type ActiveStoryProps = {
  title: string;
  issuer: string;
  imagePath: string;
  isComing?: boolean;
  handleClick: () => void;
};

type ComingSoonProps = {
  isComing: boolean;
};

type StoryButtonProps = ComingSoonProps | ActiveStoryProps;

const StoryButton = (props: StoryButtonProps) => {
  if (props.isComing) {
    return (
      <div className="min-w-24 flex-1 flex flex-col items-center gap-2 cursor-pointer">
        <div className="text-3xl text-(--color-border) flex items-center justify-center border-2 border-(--color-border) rounded-full w-24 h-24">
          +
        </div>
        <div className="md:text-sm text-center text-xs">
          <p className="font-bold">always learning</p>
          <p className="fong-light">...</p>
        </div>
      </div>
    );
  }

  const { title, issuer, imagePath, handleClick } = props;
  return (
    <button
      onClick={handleClick}
      className="flex-1 min-w-24 flex flex-col items-center gap-2 cursor-pointer"
    >
      <div className="relative border-2 border-(--color-primary) rounded-full overflow-clip w-24 h-24">
        <Image
          alt="test"
          src={imagePath}
          fill
          className="object-cover w-full h-full p-0.5 rounded-full"
        />
      </div>
      <div className="md:text-sm text-xs">
        <p className="font-bold">{title}</p>
        <p className="fong-light">{issuer}</p>
      </div>
    </button>
  );
};

export default StoryButton;
