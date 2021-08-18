import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { Button } from "@material-ui/core";
import Popover from 'react-bootstrap/Popover'


const popover = (
    <Popover>
      <Popover.Title as="h1">Benchmarking Dashboard</Popover.Title>
      <Popover.Content>
        The Benchmarking Dashboard will give you a detailed benchmarking overview regarding your asset, 
        which you are analyzing. It will show you <strong> Macro Analysis </strong> (e.g. industry KPIs, market size, BIP etc. )
        but also <strong>Micro Analysis</strong> (e.g. Margins, Pricing, Location)
        as well as <strong>Time Series Analysis</strong> (e.g. Price and Margin Developments)
      </Popover.Content>
    </Popover>
  );

const BenchmarkingButton = () => (
    <div>
        <OverlayTrigger
            trigger="hover"
            placement="bottom"
            overlay={popover}
        >
            <Button >
                Benchmarking
            </Button>
        </OverlayTrigger>
    </div>
);

export default BenchmarkingButton