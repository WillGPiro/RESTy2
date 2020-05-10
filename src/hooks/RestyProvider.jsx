import React, { createContext, useState, useContext } from 'react';
import { makeFetch } from '../services/makeFetch.jsx';
import { useLocalStorage } from '../components/History/HistoryList.jsx';

const RestyContext = createContext;

export const RestyProvider = ({ children }) => {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('GET');
  const [body, setBody] = useState('');
  const [response, setReponse] = useState({});
  const [history, setHistory] = useLocalStorage('hisory', []);

  const onChange = ({ target }) => {
    if(target.name === 'url') setUrl(target.value);
    if(target.name === 'method') setMethod(target.value);
    if(target.name === 'body') setBody(target.value);
  };

  const onSubmit = event => {
    event.preventDefault();
    makeFetch(url, method, body)
      .then(response => {
        setReponse(response);
        setHistory(prevHistory => [{ url, method }, ...prevHistory]);
      });
  };

  return (
    <RestyContext.Provider value={{ url, method, body, onChange, onSubmit, response }}>
      {children}
    </RestyContext.Provider>
  );
};

export const useResty = () => {
  const context = useContext(RestyContext);
  return context;
};



