import React from 'react';
import { useResty } from '../../hooks/RestyProvider';


const Form = () => {
  const { url, method, body, onChange, onSubmit } = useResty();

  <section>
    <form className="Form" onSubmit={onSubmit} >
      <input type='text' name='url' value={url} 
        onChange={onChange}/>

      <input type='radio' name='method' value='GET' 
        checked={method === 'GET'} 
        onChange={onChange}/>
      <label>GET:</label>

      <input type='radio' name='method' value='POST' 
        checked={method === 'POST'} 
        onChange={onChange}/>
      <label>POST:</label>

      <input type='radio' name='method' value='PUT' 
        checked={method === 'PUT'} 
        onChange={onChange}/>
      <label>PUT:</label>

      <input type='radio' name='method' value='PATCH' 
        checked={method === 'PATCH'} 
        onChange={onChange}/>
      <label>PATCH:</label>

      <input type='radio' name='method' value='DELETE' 
        checked={method === 'DELETE'} 
        onChange={onChange}/>
      <label>DELETE:</label>

      <button>GO!</button>
      
      <textarea name="body" value={body} 
        onChange={onChange}>
      </textarea>

    </form>
  </section>;
};

export default Form;




