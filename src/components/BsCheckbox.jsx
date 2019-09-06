import React from 'react';
import { InputGroup } from 'react-bootstrap';

const BsCheckbox = props => (
  <InputGroup>
    <InputGroup.Checkbox {...props} />
  </InputGroup>
);

export default BsCheckbox;
