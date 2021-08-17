import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { Button } from "@material-ui/core";
import Popover from 'react-bootstrap/Popover'
import Profile from '../../pages/Profile/Profile.js'

const popover = (
        <Profile />
  );

const ProfileButton = () => (
    <div>
        <OverlayTrigger
            trigger="click"
            placement="auto"
            overlay={popover}
        >
            <Button >
                Profile
            </Button>
        </OverlayTrigger>
    </div>
);

export default ProfileButton