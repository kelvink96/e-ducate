import React from 'react';
import { Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { pricePlans } from '../../mocks/pricePlans';

function Plans() {
  return (
    <div>
      {pricePlans.map((pf) => (
        <Table key={`tb-${pf.id}`} borderless>
          <thead className="bg-secondary fw-bold">
            <tr>
              <td style={{ width: '55%' }}>{pf.title}</td>
              <td style={{ width: '15%' }}>Professional</td>
              <td style={{ width: '15%' }}>Team</td>
              <td style={{ width: '15%' }}>Enterprise</td>
            </tr>
          </thead>
          <tbody>
            {pf.features.map((f) => (
              <tr key={`tr-${f.id}`}>
                <td>{f.title}</td>
                <td>{f.professional ? <FontAwesomeIcon icon={faCheck} className="text-primary" /> : '-'}</td>
                <td>{f.team ? <FontAwesomeIcon icon={faCheck} className="text-primary" /> : '-'}</td>
                <td>{f.enterprise ? <FontAwesomeIcon icon={faCheck} className="text-primary" /> : '-'}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      ))}
    </div>
  );
}

export default Plans;
