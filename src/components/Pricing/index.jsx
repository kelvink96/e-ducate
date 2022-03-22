import React from 'react';
import {
  Button,
  Card,
  Container, Row, Tab, Tabs,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import NavMenu from '../../shared/NavMenu';
import PriceCards from './PriceCards';
import Footer from '../Footer';
import Faqs from './Faqs';
import Plans from './Plans';

const monthlyFeatures = [{
  price: '$29/mo', type: 'professional', description: 'All the basics for starting a new business', features: ['1 user', 'Front plan features', '1 app'], preferred: false,
}, {
  price: '$49/mo', type: 'team', description: 'Everything you need for a growing business', features: ['3 users', 'Front plan features', '3 apps', 'Product support'], preferred: true,
}, {
  price: '$69/mo', type: 'enterprise', description: 'Advanced features for scaling your business', features: ['unlimited users', 'Front plan features', 'unlimited apps', 'Product support'], preferred: false,
}];

const annualFeatures = [{
  price: '$19/mo', type: 'professional', description: 'All the basics for starting a new business', features: ['1 user', 'Front plan features', '1 app'], preferred: false,
}, {
  price: '$39/mo', type: 'team', description: 'Everything you need for a growing business', features: ['3 users', 'Front plan features', '3 apps', 'Product support'], preferred: true,
}, {
  price: '$59/mo', type: 'enterprise', description: 'Advanced features for scaling your business', features: ['unlimited users', 'Front plan features', 'unlimited apps', 'Product support'], preferred: false,
}];

function PricingWrapper() {
  return (
    <div>
      <NavMenu />
      <Container className="main py-5 mb-5">
        <h2 className="display-6 fw-bold text-center mb-4">Find the right plan for your site</h2>
        <Tabs defaultActiveKey="monthly" id="uncontrolled-tab-example" className="mb-3 justify-content-center">
          <Tab eventKey="monthly" title="Monthly">
            <Row xs={1} md={2} lg={3} className="g-4">
              {monthlyFeatures.map((_, idx) => (
                <PriceCards
                  key={idx}
                  price={_.price}
                  type={_.type}
                  description={_.description}
                  features={_.features}
                  preferred={_.preferred}
                />
              ))}
            </Row>
          </Tab>
          <Tab eventKey="annual" title="Annually">
            <Row xs={1} md={2} lg={3} className="g-4">
              {annualFeatures.map((_, idx) => (
                <PriceCards
                  key={idx}
                  price={_.price}
                  type={_.type}
                  description={_.description}
                  features={_.features}
                  preferred={_.preferred}
                />
              ))}
            </Row>
          </Tab>
        </Tabs>
        <div className="d-flex gap-3 pt-5 pb-3 justify-content-center align-items-center">
          <div>
            <h4>Customized</h4>
            <Card.Text>Design a custom package for your business</Card.Text>
          </div>
          <div>
            <Button variant="outline-primary">
              contact sales
              &nbsp;
              <FontAwesomeIcon icon={faAngleRight} />
            </Button>
          </div>
        </div>
        <div className="text-center pb-5">
          <p className="mb-2">Want to see more?</p>
          <Button variant="outline-primary">
            see all features and compare plans
            &nbsp;
            <FontAwesomeIcon icon={faAngleRight} />
          </Button>
        </div>
        <Plans />
        <Faqs />
      </Container>
      <Footer />
    </div>
  );
}

export default PricingWrapper;
