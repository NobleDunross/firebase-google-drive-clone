import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { Button} from "@material-ui/core";
import { Row } from 'reactstrap'

const AboutButton = () => (
    <div>
        <OverlayTrigger
            trigger="click"
            placement="bottom"
            overlay={
                    <div className="profileButtons" >
                        <Row> <Button >Vision & Values</Button> </Row>
                        <Row> <Button >Team</Button> </Row>
                        <Row> <Button >Timeline</Button> </Row>
                        <Row> <Button >Contact</Button> </Row>
                    </div>
            }
        >
            <Button> <h3> About TAU </h3> </Button>
        </OverlayTrigger>
    </div>
);

export default AboutButton