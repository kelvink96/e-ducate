import React from 'react';
import { Button, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import UserProfileImg from '../../assets/img/avatar.jpg';

function Profile() {
  return (
    <div className="d-flex flex-column justify-content-start align-items-start">
      <div className="d-flex flex-row flex-md-column align-items-start justify-content-between w-100">
        <div>
          <Image src={UserProfileImg} width={100} height={100} roundedCircle fluid />
          <h5 className="mt-3">@kelvink96</h5>
          <p className="text-capitalize mb-0">kelvin kiptum</p>
          <Button variant="outline-primary my-2" href="/profile/edit" className="d-none d-md-block">edit profile</Button>
          <p className="mt-0 text-capitalize">nairobi, kenya</p>
        </div>
        <div className="d-block d-md-none">
          <Button variant="outline-primary">edit</Button>
        </div>
      </div>
      <div className="mt-2 mb-4 d-flex flex-row flex-md-column flex-wrap gap-2">
        <Button variant="secondary" href="https://github.com/kelvink96" target="_blank" rel="noreferrer">
          <FontAwesomeIcon className="me-2 fa-fw" icon={faGithub} />
          kelvink96
        </Button>
        <Button variant="secondary" href="https://twitter.com/kelvink_96" target="_blank" rel="noreferrer">
          <FontAwesomeIcon className="me-2 fa-fw" icon={faTwitter} />
          kelvink_96
        </Button>
        <Button
          variant="secondary"
          href="https://www.linkedin.com/in/kelvink96?originalSubdomain=ke"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon className="me-2 fa-fw" icon={faLinkedinIn} />
          kelvink96
        </Button>
        <Button
          variant="secondary"
          href="https://portfoliofinale-8e3c2.firebaseapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon className="me-2 fa-fw" icon={faLink} />
          website
        </Button>
      </div>
      <div>
        <p className="mb-1">Last active 2 months ago </p>
        <p className="mb-0">Joined Dec 11, 2016</p>
      </div>
    </div>
  );
}

export default Profile;
