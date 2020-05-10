import React from 'react';
import { useResty } from '../../hooks/RestyProvider';

const Response = () => {
  const { response } = useResty();
  return (
    <section>
      <pre>{JSON.stringify(response, null, 2)}</pre>
    </section>
  );
};

export default Response;

