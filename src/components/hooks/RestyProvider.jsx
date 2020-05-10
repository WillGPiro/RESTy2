import React, { createContext } from 'react';

const RestyContext = createContext();

export  const RestyProvider = ({ children }) => {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('GET');
  const [body, setBody] = useState('');

  const onChange = ({ targe }) => {
    if(target.name === 'url') setUrl(target.value);
    if(target.name === 'method') setMethod(target.value);
    if(target.name === 'body') setBody(target.value);
  }

  const onSubmit = event => {
    event.preventDefault();
    makeREquest(url, method, body)
      .then(response => console.log(response);)
  }

  return (
    <RestyContext.Provider value={}>
      {children}
    </RestyContext.Provider>
  );
} ;

export const useResty = () => {
  const context = useContext(RestyContext);
  return context;
}



