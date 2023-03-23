import { useCallback, useState } from 'react';

const useInput = (initData: any) => {
  const [value, setValue] = useState(initData);
  const handler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);
  return [value, handler, setValue];
};

export default useInput;
