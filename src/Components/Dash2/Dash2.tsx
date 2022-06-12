
import React from "react";
import { DataGrid} from '@mui/x-data-grid';
import "./Dash2.css"
import clsx from 'clsx';
import Box from '@mui/material/Box';

const Dash2=(props: any) => {

    let columnsFinal=
        [
            {
                "field": "name",
                "headerName": "Name",
                "description": "The cryptocurrency name",
                "minWidth": 150
            },            
            {
                "field": "price",  
                "headerName": "Price",
                "description": "Latest average trade price across markets",
                "width": 200
            },
            
           
            
           
           
            {
                "field": "percent_change_1h",
                "headerName": "Percent change 1h",
                "description": "1 hour trading price percentage change for each currency",
                "width": 150,
                "type":'number',
                cellClassName:(params: any) => clsx('super-app', {
                    negative: params.value > 0,
                    positive: params.value < 0,
                })
                ,
            },
            {
                "field": "percent_change_24h",
                "headerName": "Percent change 24h",
                "description": "24 hour trading price percentage change for each currency",
                "width": 200,
                "type":'number',
                cellClassName:(params: any) => clsx('super-app', {
                    negative: params.value > 0,
                    positive: params.value < 0,
                })
            },
            {
                "field": "percent_change_7d",
                "headerName": "Percent change 7d",
                "description": "7 day trading price percentage change for each currency",
                "width": 200,
                "type":'number',
                cellClassName:(params: any) => clsx('super-app', {
                    negative: params.value > 0,
                    positive: params.value < 0,
                })
            },
            {
                "field": "date_added",
                "headerName": "Date added",
                "description": "Date cryptocurrency was added to the system",
                "width": 200
            },
            {
                "field": "volume_24h",
                "headerName": "Volume 24h",
                "description": "rolling 24 hour adjusted trading volume",
                "width": 150
            },
            {
                "field": "max_supply",
                "headerName": "Max supply",
                "description": "Best approximation of the maximum amount of coins that will ever exist in the lifetime of the currency",
                "width": 150
            },
            {
                "field": "circulating_supply",
                "headerName": "Circulating supply",
                "description": "Approximate number of coins currently in circulation",
                "width": 170
            },
            {
                "field": "total_supply",
                "headerName": "Total supply",
                "description": "Approximate total amount of coins in existence right now (minus any coins that have been verifiably burned)",
                "width": 200
            },
            {
                "field": "market_cap",
                "headerName": "Market cap",
                "description": "CoinMarketCap's market cap rank as outlined in our methodology",
                "width": 200
            },
            {
                "field": "num_market_pairs",
                "headerName": "Num_market_pairs",
                "description": "number of market pairs across all exchanges trading each currency",
                "width": 200
            }
        ]

    
    function fixLargeNumbers(number: any){
        return number.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }                

    const mappedItems= props.itemCompare.map((item: any,index: any)=>{

        return {
            id:item.id,
            name:item.name,
            price:item.price,
            date_added:item.date_added.slice(0,10),
            max_supply:item.max_supply?item.max_supply.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","):'N/A',
            circulating_supply:item.circulating_supply?fixLargeNumbers(item.circulating_supply):'N/A',
            total_supply:item.total_supply?fixLargeNumbers(item.total_supply):'N/A',
            volume_24h:fixLargeNumbers(item.volume_24h),
            percent_change_1h:item.percent_change_1h.toFixed(4),
            percent_change_24h:item.percent_change_24h.toFixed(4),
            percent_change_7d:item.percent_change_7d.toFixed(4),
            market_cap:item.market_cap.toFixed(2),
            num_market_pairs:item.num_market_pairs

            };}           

               
            
    )
           

    if(mappedItems.length){

        return (
            <div id='Dash2'>           

            <Box
      sx={{
        height: 500,
        width: 1,
        '& .super-app-theme--cell': {
          backgroundColor: 'rgba(224, 183, 60, 0.55)',
          color: '#1a3e72',
          fontWeight: '600',
        },
        '& .super-app.negative': {
          backgroundColor: 'rgba(157, 255, 118, 0.49)',
          color: '#1a3e72',
          fontWeight: '600',
        },
        '& .super-app.positive': {
          backgroundColor: '#d47483',
          color: '#1a3e72',
          fontWeight: '600',
        },
      }}
    >


            <DataGrid
hideFooterPagination
onCellClick={(params, event) => {               
     
    let clickItem= ""
    clickItem = (event.target as any).innerText;
    const itemToCompare=mappedItems.find((e: any) => e.name==clickItem)

  if(itemToCompare){                    
      props.handleRemove(itemToCompare)
  }
 
                       
              }}
             
columns={columnsFinal}
rows={mappedItems}        


/>
</Box>
        </div>
        );
}else{
    return(

        <h1>Click on a Coin Name for details</h1>
    )
}
}


export default Dash2