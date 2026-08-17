'use client';
import React from 'react';

const Timestamp = () => {
  const [year, setYear] = React.useState<number>();
  React.useEffect(() => {
    const date = new Date();
    setYear(date.getFullYear());
  }, []);
  return year;
};

export default Timestamp;