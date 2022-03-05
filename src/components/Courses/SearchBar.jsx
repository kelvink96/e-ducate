import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function SearchBar() {
  return (
    <div>
      <InputGroup>
        <FormControl
          placeholder="find your course"
          aria-label="find your course"
          aria-describedby="search-icon-addon"
        />
        <InputGroup.Text id="search-icon-addon" className="bg-transparent">
          <FontAwesomeIcon icon={faSearch} />
        </InputGroup.Text>
      </InputGroup>
    </div>
  );
}

export default SearchBar;
