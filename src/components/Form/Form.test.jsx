import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form.jsx';

describe('Form component', () => {
  it('matches a snapshot of Form.jsx', () => {
    const wrapper = shallow(<Form
      url="https://xfiles-api.herokuapp.com/api/v1/characters"
      method="GET"
      body="{}"
      onSubmit={()=>{}}
      onChange={()=>{}}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});

