import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { Button } from "@material-ui/core";
import Popover from 'react-bootstrap/Popover'
import { Row } from 'reactstrap'
import { Link, useHistory } from "react-router-dom"

import AppsIcon from "@material-ui/icons/Apps";


const popover = (
    <Popover>
      <Popover.Title as="h1">Our Apps Collection</Popover.Title>
      <Popover.Content>
        <Row> <Link to= "/"> <Button >Home</Button> </Link> </Row>
        <Row> <Link to= "/"> <Button >Market</Button> </Link> </Row>
        <Row> <Link to= "/"> <Button >Benchmarking</Button> </Link> </Row>
        <Row> <Link to= "/"> <Button >Investing</Button> </Link> </Row>
        <Row> <Link to= "/"> <Button >Social Media Manager</Button> </Link> </Row>
        <Row> <Link to= "/"> <Button >TV Squared</Button> </Link> </Row>
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