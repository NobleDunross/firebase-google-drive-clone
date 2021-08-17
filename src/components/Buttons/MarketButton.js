import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { Button } from "@material-ui/core";
import Popover from 'react-bootstrap/Popover'


const popover = (
    <Popover>
      <Popover.Title as="h1">Popover right</Popover.Title>
      <Popover.Content>
        Lorem ipsum dolor sit amet, consectetur adipiscing <b>lit.</b>
      </Popover.Content>
    </Popover>
  );

const MarketButton = () => (
    <div>
        <OverlayTrigger
            trigger="hover"
            placement="bottom"
            overlay={popover}
        >
            <Button >
                Market
            </Button>
        </OverlayTrigger>
    </div>
);

export default MarketButton