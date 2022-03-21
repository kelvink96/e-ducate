import React from 'react';
import {
  Card, Image,
} from 'react-bootstrap';
import NoDataIcon from '../../assets/img/no-data-icon.png';

function Certifications() {
  return (
    <div>
      <h4>latest certificates</h4>
      <Card className="text-center">
        <Card.Body>
          <Image src={NoDataIcon} height={50} width={50} className="my-3" />
          <Card.Text>complete a course to earn a certification</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Certifications;
