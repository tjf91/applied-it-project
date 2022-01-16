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
const Dash1 = (props)=>{

    function handleClick(e){
        e.preventDefault()
        console.log(e)
    }

  
    
    if(props.latestData){        
        // let gridColumns = Object.keys(props.latestData[0]).concat(Object.keys(props.latestData[0]['quote']['USD']))
        // console.log(gridColumns)
        let columnsFinal=
        [
            {
                "field": "name",
                "headerName": "Name",
                "description": "The cryptocurrency name",
                "minWidth": 150
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
                "width": 200
            },           
        ]
        
        const rowTemplate= {
            "id": 1,
            "name": "Bitcoin",
            "symbol": "BTC",            
            "price": 41685.26236025842,            
        }
        
        
        
        // console.log('grid columns ' + gridColumns)
        // let gridColumnName=gridColumns.map(colName=>{            
                 

        //     return{
        //         field:colName,
        //         headerName:colName.charAt(0).toUpperCase()+colName.slice(1),
        //         description:colDescription[colName],
        //         width:200
        //     }
        // }).filter(e=>e.description!=null)

        // console.log(gridColumnName)
        
        let gridRows = props.latestData

        let gridRows2 =gridRows.map(row=>{
            // console.log(row)
            return{
                ...row, ...row['quote']['USD'] 
            }
        })
        // console.log(gridRows2)
        let finalRow=gridRows2.map(obj=>{
            return{

                id:obj.id,
                name:obj.name,
                symbol:obj.symbol,
                price:obj.price.toFixed(2)
            }


        })        

        return(
            // <Container maxWidth="m" >    
            

            <div id="Dash1">
            <DataGrid
            onCellClick={(params, event) => {                
                  event.defaultMuiPrevented = true;
                //   console.log(event)
                //   console.log(event.target)
                let clickItem= ""
                clickItem=event.target.innerText
                let itemToCompare=gridRows2.find(e=>e.name==clickItem)
                // console.log(itemToCompare)
                if(itemToCompare){                    
                    props.addItem(itemToCompare)
                }
               
                                     
                            }}  
      columns={columnsFinal}
      rows={finalRow}
/>
    </div>    
        // </Container>
    )
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