import "./Dash1.css"
// @ts-expect-error ts-migrate(1259) FIXME: Module '"S:/Projects/applied-it-project/node_modul... Remove this comment to see the full error message
import React from 'react'
import { Container } from '@mui/material';
import { DataGrid} from '@mui/x-data-grid';
import DownloadingIcon from '@mui/icons-material/Downloading';



let colDescription = {
market_cap: "CoinMarketCap's market cap rank as outlined in our methodology",
market_cap_strict: "A strict market cap sort (latest trade price x circulating supply)",
name: "The cryptocurrency name",
symbol: "The cryptocurrency symbol",
date_added: "Date cryptocurrency was added to the system",
price: "latest average trade price across markets",
circulating_supply: "approximate number of coins currently in circulation",
total_supply: "approximate total amount of coins in existence right now (minus any coins that have been verifiably burned)",
max_supply: "our best approximation of the maximum amount of coins that will ever exist in the lifetime of the currency",
num_market_pairs: "number of market pairs across all exchanges trading each currency",
market_cap_by_total_supply_strict: "market cap by total supply",
volume_24h: "rolling 24 hour adjusted trading volume",
volume_7d: "rolling 24 hour adjusted trading volume",
volume_30d: "rolling 24 hour adjusted trading volume",
percent_change_1h: "1 hour trading price percentage change for each currency",
percent_change_24h: "24 hour trading price percentage change for each currency",
percent_change_7d:"7 day trading price percentage change for each currency"
}
const Dash1 = (props)=>{

    function handleClick(e){
        e.preventDefault()
        console.log(e)
    }

  
    
    if(props.latestData){       
        let columnsFinal=
        [
            {
                "field": "name",
                "headerName": "Name",
                "description": "The cryptocurrency name",
                "minWidth": 150,                
            },
            {
                "field": "symbol",
                "headerName": "Symbol",
                "description": "The cryptocurrency symbol",
                "width": 100
            },
            {
                "field": "price",
                "headerName": "Price",
                "description": "latest average trade price across markets",
                "width": 100,
                "type":'number',
            },           
        ]
        
                
        let gridRows = props.latestData

        let gridRows2 =gridRows.map(row=>{
            
            return{
                ...row, ...row['quote']['USD'] 
            }
        })
        
        let finalRow=gridRows2.map(obj=>{
            return{

                id:obj.id,
                name:obj.name,
                symbol:obj.symbol,
                price:obj.price.toFixed(2)
            }


        })        

        return(
             
            

            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <div id="Dash1">
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <DataGrid
            hideFooterPagination
            onCellClick={(params, event) => {                
                  event.defaultMuiPrevented = true;            
                let clickItem= ""
                clickItem = (event.target as any).innerText;
                let itemToCompare=gridRows2.find(e=>e.name==clickItem)                
                if(itemToCompare){                    
                    props.addItem(itemToCompare)
                }
               
                                     
                            }}  
      columns={columnsFinal}
      rows={finalRow}
/>
    </div>    
        
    )
}

else{
    return(        
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <h1 >
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <DownloadingIcon/>
        </h1>
      )
  }
}


export default Dash1