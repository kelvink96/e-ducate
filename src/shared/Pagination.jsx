import React from 'react';
import { Pagination } from 'react-bootstrap';

function BasicPagination() {
  return (
    <Pagination className="justify-content-center">
      <Pagination.Prev disabled />
      <Pagination.Item active>{1}</Pagination.Item>
      <Pagination.Item>{2}</Pagination.Item>
      <Pagination.Item>{3}</Pagination.Item>
      <Pagination.Item>{4}</Pagination.Item>
      <Pagination.Item>{5}</Pagination.Item>

      <Pagination.Ellipsis />
      <Pagination.Item>{10}</Pagination.Item>
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
  );
}

export default BasicPagination;
