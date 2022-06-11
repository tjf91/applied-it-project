// @ts-expect-error ts-migrate(1259) FIXME: Module '"S:/Projects/applied-it-project/node_modul... Remove this comment to see the full error message
import React from "react";
import "./Footer.css"

const Footer=()=>{
    return(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div id="Footer">
            Created with Material UI and CoinMarketCap API
        </div>
    )
}

export default Footer