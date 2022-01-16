import React, { useCallback, useEffect, useState } from 'react';
import Progress from './progress';

export default function MyProgressContainer() {
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState(false);

  const onChange = useCallback((value) => {
    setProgress(value);
    setActive(true);
    if (value === 100) {
      initProgress();
    }
  }, []);

  const initProgress = () => {
    setTimeout(() => {
      setProgress(0);
      setActive(false);
    }, 1000);
  };

  useEffect(() => {
    window.progressbarChange = onChange;
  }, [onChange]);

  return <Progress active={active} progress={progress} />;
}
