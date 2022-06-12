import "./Dash1.css"

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
const Dash1 = (props: any) => {

    function handleClick(e: any){
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

        let gridRows2 =gridRows.map((row: any) => {
            
            return{
                ...row, ...row['quote']['USD'] 
            }
        })
        
        let finalRow=gridRows2.map((obj: any) => {
            return{

                id:obj.id,
                name:obj.name,
                symbol:obj.symbol,
                price:obj.price.toFixed(2)
            }


        })        

        return (
            <div id="Dash1">

            <DataGrid
            hideFooterPagination
            onCellClick={(params, event) => {                
                  event.defaultMuiPrevented = true;            
                let clickItem= ""
                clickItem = (event.target as any).innerText;
                let itemToCompare=gridRows2.find((e: any) => e.name==clickItem)                
                if(itemToCompare){                    
                    props.addItem(itemToCompare)
                }
               
                                     
                            }}  
      columns={columnsFinal}
      rows={finalRow}
/>
    </div>
        );
}

else{
    return(        

        <h1 >

            <DownloadingIcon/>
        </h1>
      )
  }
}


export default Dash1