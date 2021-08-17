import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { Button } from "@material-ui/core";
import Popover from 'react-bootstrap/Popover'

import AppsIcon from "@material-ui/icons/Apps";


const popover = (
    <Popover>
      <Popover.Title as="h1">Our Apps Collection</Popover.Title>
      <Popover.Content>
        Lorem ipsum dolor sit amet, consectetur adipiscing <b>lit.</b>
      </Popover.Content>
    </Popover>
  );

const AppsCollectionButton = () => (
    <div>
        <OverlayTrigger
            trigger="click"
            placement="bottom"
            overlay={popover}
        >
            <Button>
                <AppsIcon/>
            </Button>
        </OverlayTrigger>
    </div>
);

export default AppsCollectionButton