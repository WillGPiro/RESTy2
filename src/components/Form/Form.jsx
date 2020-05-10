import React from 'react';
import PropTypes from 'prop-types';


const Form = ({ url, method, body, onSubmit, onChange }) => (
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
  </section>
);

Form.propTypes = {
  url: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};


