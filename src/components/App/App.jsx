import React from 'react';
import { RestyProvider } from '../../hooks/RestyProvider.jsx';
import Resty2 from '../RESTy2/RESTy2.jsx';

export default function App() {
  return (
    <RestyProvider>
      <Resty2 />
    </RestyProvider>
  );
}
  
