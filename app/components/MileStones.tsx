import MileStone from "./MileStone";

const MileStones = () => {
  return (
    <div className="relative flex mt-6 flex-col gap-6">
      <MileStone isCurrent={true} />
      <MileStone />
      <div className="w-0.25 h-full top-0 left-5 -z-1 absolute bg-linear-to-b from-(--color-primary) to-(--color-border)" />
    </div>
  );
};

export default MileStones;
