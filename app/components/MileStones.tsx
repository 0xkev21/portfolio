import MileStone from './MileStone';
import { Academic, AcademicData } from '@/lib/data';

const MileStones = () => {
  return (
    <div className="relative flex items-stretch mt-6 flex-col gap-6">
      {AcademicData.map((academic: Academic) => {
        return <MileStone key={academic.title} academic={academic} />;
      })}
      <div className="w-0.25 h-full top-0 left-4 md:left-5 -z-1 absolute bg-linear-to-b from-(--color-primary) to-(--color-border)" />
    </div>
  );
};

export default MileStones;
