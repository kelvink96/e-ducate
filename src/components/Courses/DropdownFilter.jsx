import React from 'react';
import { Dropdown } from 'react-bootstrap';

function DropdownFilter() {
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          sort by
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">most viewed</Dropdown.Item>
          <Dropdown.Item href="#/action-2">most popular</Dropdown.Item>
          <Dropdown.Item href="#/action-3">top rated</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default DropdownFilter;
