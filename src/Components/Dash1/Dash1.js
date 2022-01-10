import "./Dash1.css"
import React from 'react'
import { Container } from '@mui/material';
import { DataGrid} from '@mui/x-data-grid';



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

  
    
    if(props.latestData){        
        let gridColumns = Object.keys(props.latestData[0]).concat(Object.keys(props.latestData[0]['quote']['USD']))
        
        console.log('grid columns ' + gridColumns)
        let gridColumnName=gridColumns.map(colName=>{  
            
            console.log(colName)      

            return{
                field:colName,
                headerName:colName.charAt(0).toUpperCase()+colName.slice(1),
                description:colDescription[colName],
                width:200
            }
        }).filter(e=>e.description!=null)

        // console.log('eeeee',gridColumnName)
        
        let gridRows = props.latestData
        let gridRows2 =gridRows.map(row=>{
            // console.log(row)
            return{
                ...row, ...row['quote']['USD'] 
            }
        })
        console.log(gridRows2.map(e=>Object.values(e).map(j=>Number.isInteger(j)?j.toFixed(2):j)))

        // console.log(gridRows2.map(e=>(Number.isInteger(Object.values(e)))?Object.values(e).toFixed(2):e))

        return(
            <Container maxWidth="m">    
            

            <div style={{ height: 500, width: '100%' }}>
            <DataGrid
  colu3mns={[
      { field: 'username' }, { field: 'age' }]}
        columns={gridColumnName}
              rows={gridRows2}
/>
    </div>
    
        </Container>
    )
  }
  
  else{
      return(
          <h1>Loading</h1>
      )
  }
}


export default Dash1