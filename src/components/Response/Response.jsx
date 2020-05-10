import React from 'react';
import PropTypes from 'prop-types';

const Response = ({ response }) => (
  <section>
    <pre>{JSON.stringify(response, null, 2)}</pre>
  </section>
);

Response.propTypes = {
  response: PropTypes.string.isRequired
};

export default Response;

