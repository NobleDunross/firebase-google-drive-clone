import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { Button } from "@material-ui/core";
import Popover from 'react-bootstrap/Popover'


const popover = (
    <Popover>
      <Popover.Title as="h1">Market Dashboard</Popover.Title>
      <Popover.Content>
        The Market Dashboard will give you an overview of all available <strong> asset classes, types 
        and their investment products</strong> . We will continuously add more inventory by scanning <strong> all
        investment manager </strong> who offers well structured investments on blockchain (tokenized) basis or in small 
        tickets. Also we will <strong> integrate the onboarding process </strong>that you do not need to go through all single
        KYC processes and therefore have a <strong>clean portfolio </strong>overview but also be <strong>diversified </strong>in your assets. 
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