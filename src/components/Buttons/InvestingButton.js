import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { Button } from "@material-ui/core";
import Popover from 'react-bootstrap/Popover'


const popover = (
    <Popover>
      <Popover.Title as="h1">Investment Dashboard</Popover.Title>
      <Popover.Content>
        Here you will find all important investment evaluations for the asset you want to analyze. 
        From an <strong> Executive Summary </strong> with all essential KPIs (e.g. RoI, IRR, CoC) 
        to detailted <strong> Waterfalls </strong> (e.g. Cashflow, Yield and P&L) but also 
        spreadsheet like <strong> Calculations </strong>to see how the KPIs were derived. 
      </Popover.Content>
    </Popover>
  );

const InvestingButton = () => (
    <div>
        <OverlayTrigger
            trigger="hover"
            placement="bottom"
            overlay={popover}
        >
            <Button >
                Investing
            </Button>
        </OverlayTrigger>
    </div>
);

export default InvestingButton