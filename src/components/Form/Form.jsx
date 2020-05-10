import React from 'react';
import PropTypes from 'prop-types';


const Form = ({ url, method, body, onSubmit, onChange }) => (
  <section>
    <form className="Form" onSubmit={onSubmit} >
      <input type='text' name='url' value={url} onChange={onChange}/>

      <input type='radio' name='method' value='GET' checked={method === 'GET'} onSubmit={onSubmit}/>
      <label>GET:</label>

      <input type='radio' name='method' value='POST' checked={method === 'POST'} onSubmit={onSubmit}/>
      <label>POST:</label>

      <input type='radio' name='method' value='PUT' checked={method === 'PUT'} onSubmit={onSubmit}/>
      <label>PUT:</label>

      <input type='radio' name='method' value='PATCH' checked={method === 'PATCH'} onSubmit={onSubmit}/>
      <label>PATCH:</label>

      <input type='radio' name='method' value='DELETE' checked={method === 'DELETE'} onSubmit={onSubmit}/>
      <label>DELETE:</label>

      <button>GO!</button>
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


