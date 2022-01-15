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

    function handleClick(e){
        e.preventDefault()
        console.log(e)
    }

  
    
    if(props.latestData){        
        let gridColumns = Object.keys(props.latestData[0]).concat(Object.keys(props.latestData[0]['quote']['USD']))

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
            {
                "field": "num_market_pairs",
                "headerName": "Num_market_pairs",
                "description": "number of market pairs across all exchanges trading each currency",
                "width": 200
            },
            {
                "field": "date_added",
                "headerName": "Date_added",
                "description": "Date cryptocurrency was added to the system",
                "width": 200
            },
            {
                "field": "max_supply",
                "headerName": "Max_supply",
                "description": "our best approximation of the maximum amount of coins that will ever exist in the lifetime of the currency",
                "width": 200
            },
            {
                "field": "circulating_supply",
                "headerName": "Circulating_supply",
                "description": "approximate number of coins currently in circulation",
                "width": 200
            },
            {
                "field": "total_supply",
                "headerName": "Total_supply",
                "description": "approximate total amount of coins in existence right now (minus any coins that have been verifiably burned)",
                "width": 200
            },
           
            {
                "field": "volume_24h",
                "headerName": "Volume_24h",
                "description": "rolling 24 hour adjusted trading volume",
                "width": 200
            },
            {
                "field": "percent_change_1h",
                "headerName": "Percent_change_1h",
                "description": "1 hour trading price percentage change for each currency",
                "width": 200
            },
            {
                "field": "percent_change_24h",
                "headerName": "Percent_change_24h",
                "description": "24 hour trading price percentage change for each currency",
                "width": 200
            },
            {
                "field": "percent_change_7d",
                "headerName": "Percent_change_7d",
                "description": "7 day trading price percentage change for each currency",
                "width": 200
            },
            {
                "field": "market_cap",
                "headerName": "Market_cap",
                "description": "CoinMarketCap's market cap rank as outlined in our methodology",
                "width": 200
            }
        ]
        
        
        // console.log('grid columns ' + gridColumns)
        let gridColumnName=gridColumns.map(colName=>{            
                 

            return{
                field:colName,
                headerName:colName.charAt(0).toUpperCase()+colName.slice(1),
                description:colDescription[colName],
                width:200
            }
        }).filter(e=>e.description!=null)

        console.log(gridColumnName)
        
        let gridRows = props.latestData

        let gridRows2 =gridRows.map(row=>{
            // console.log(row)
            return{
                ...row, ...row['quote']['USD'] 
            }
        })
        console.log(gridRows2)

        // console.log(gridRows2.map(e=>(Number.isInteger(Object.values(e)))?Object.values(e).toFixed(2):e))

        return(
            <Container maxWidth="m" >    
            

            <div style={{ height: 500, width: '100%' }}>
            <DataGrid
            onCellClick={(params, event) => {                
                  event.defaultMuiPrevented = true;
                //   console.log(event)
                //   console.log(event.target.style)
                let clickItem= ""
                clickItem=event.target.innerText
                if(gridRows2.find(e=>e.name==clickItem)){
                    props.addItem(clickItem)
                }
                //   gridRows2.map(e=>e.name.includes(event.target.innerText)?props.addItem(event.target.innerText):alert('Click Name'))

                      
                  


                
            }}


  colu3mns={[
      { field: 'username' }, { field: 'age' }]}
      columns={columnsFinal}
      rows={gridRows2}
/>
    </div>
    
        </Container>
    )
}

else{
    return(
        
        <h1 >Loading</h1>
      )
  }
}


export default Dash1