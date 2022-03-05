import React from 'react';
import SearchBar from './SearchBar';
import DropdownFilter from './DropdownFilter';

function Header() {
  return (
    <div className="d-flex gap-3">
      <div className="flex-grow-1">
        <SearchBar />
      </div>
      <div className="d-flex align-items-center justify-content-end gap-3">
        <DropdownFilter />
        <p className="mb-0">Showing 1-7 of 32 result</p>
      </div>
    </div>
  );
}

export default Header;
