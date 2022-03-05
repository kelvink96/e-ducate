import React from 'react';
import {
  Button, ButtonGroup, Card, Form,
} from 'react-bootstrap';
import { categories } from '../../mocks/categories';
import { languages } from '../../mocks/languages';

function FiltersSection() {
  return (
    <div>
      <Card>
        <Card.Header>
          <Card.Title>category</Card.Title>
        </Card.Header>
        <Card.Body>
          <div className="d-flex flex-column gap-2">
            {categories.map((c) => (
              <Form.Check
                type="checkbox"
                id={`default-${c.title}`}
                label={c.title}
              />
            ))}
          </div>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header>
          <Card.Title>price level</Card.Title>
        </Card.Header>
        <Card.Body>
          <ButtonGroup className="gap-2">
            <Button variant="secondary" className="rounded-3">all</Button>
            <Button variant="secondary" className="rounded-3">free</Button>
            <Button variant="secondary" className="rounded-3">paid</Button>
          </ButtonGroup>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header>
          <Card.Title>skill level</Card.Title>
        </Card.Header>
        <Card.Body>
          <ButtonGroup className="gap-2 flex-wrap">
            <Button variant="secondary" className="rounded-3" style={{ flex: 'none' }}>all levels</Button>
            <Button variant="secondary" className="rounded-3" style={{ flex: 'none' }}>beginner</Button>
            <Button variant="secondary" className="rounded-3" style={{ flex: 'none' }}>intermediate</Button>
            <Button variant="secondary" className="rounded-3" style={{ flex: 'none' }}>advanced</Button>
          </ButtonGroup>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header>
          <Card.Title>language</Card.Title>
        </Card.Header>
        <Card.Body>
          <ButtonGroup className="gap-2 flex-wrap">
            {languages.map((l) => (
              <Button variant="secondary" className="rounded-3 w-auto" style={{ flex: 'none' }}>{l}</Button>
            ))}
          </ButtonGroup>
        </Card.Body>
      </Card>
      <Button className="w-100">filter results</Button>
    </div>
  );
}

export default FiltersSection;
