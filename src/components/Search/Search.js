import React from 'react'
import './Search.css';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import MicNoneSharpIcon from '@material-ui/icons/MicNoneSharp';
import AppsIcon from "@material-ui/icons/Apps";
import { Button } from "@material-ui/core";

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover'

import BenchmarkingButton from '../Buttons/BenchmarkingButton';
import MarketButton from '../Buttons/MarketButton';
import InvestingButton from '../Buttons/InvestingButton';
import AppsCollectionButton from '../Buttons/AppsCollectionButton'

function Search({hideButtons = false}) {

    const popover = (
        <Popover>
          <Popover.Title as="h1">Search Bar</Popover.Title>
          <Popover.Content>
            The Search Bar will be <strong>your main navigation tool within Tyreos Asset Universe </strong>and 
            the usabilty will feel similar to a normal google search with suggestions dropping 
            down below. 
          </Popover.Content>
        </Popover>
      );

    return (
        <form className='search'>

            {!hideButtons ? (
                < div className='search__buttons'>
                    <MarketButton />
                    <BenchmarkingButton />
                    <InvestingButton />
                </div>
            ): (
                < div className='search__buttons'>
                    <Button className="search__buttonsHidden" variant="outlined">Markt</Button>
                    <Button className="search__buttonsHidden" variant="outlined">Vergleichsanalyse</Button>
                    <Button className="search__buttonsHidden" variant="outlined">Investitionsanalyse</Button>
                </div>
            )}
            <OverlayTrigger
            trigger="hover"
            placement="bottom"
            overlay={popover}
            >   
                < div className='search__input'>
                    <SearchSharpIcon className='search__inputIcon' />
                    <input placeholder="Search Tyreos Asset Univserse…" />
                    <MicNoneSharpIcon className='search__inputIcon' />
                </div>
            </OverlayTrigger>

            {!hideButtons ? (
                < div className='search__AppsIcon'>
                    <AppsCollectionButton/>
                </div>

            ): (
                < div className='search__AppsIconHidden'>
                    <AppsIcon/>
                </div>
            )}

        </form>
    );
}

export default Search
