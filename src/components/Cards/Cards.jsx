import React from 'react';
import {Card, CardContent, Typography, Grid} from '@material-ui/core'
import styles from './Cards.module.css'
import CountUp from 'react-countup'
import cx from 'classnames'

const Cards = ({data: {confirmed, recovered, deaths, lastUpdate}}) => {

    if(!confirmed){

        return 'Loading...'
    }
    return (
        <div className="styles.container">

            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.confirmed)}>

                    <CardContent>

                        <Typography color="textSecondary" gutterBottom>Infected</Typography>    
                        <Typography variant="h5">
                              <CountUp start={0} end={confirmed.value}  separator="," duration={2.5}>  {confirmed.value} </CountUp>                  
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>  
                        <Typography variant="body2">Number of active cases of Covid-19</Typography>   


                    </CardContent>          
                


                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>

                    <CardContent>

                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>    
                        <Typography variant="h5">
                            <CountUp start={0} end={recovered.value}  separator="," duration={2.5}>  {recovered.value} </CountUp>                  
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>  
                        <Typography variant="body2">Number of Recovered cases of Covid-19</Typography>   


                    </CardContent>          
                


                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.death)}>

                    <CardContent>

                        <Typography color="textSecondary" gutterBottom>Death</Typography>    
                        <Typography variant="h5">
                        
                            <CountUp start={0} end={deaths.value} separator=","  duration={2.5}> {deaths.value} </CountUp>                            
                        
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>  
                        <Typography variant="body2">Number of Death cases of Covid-19</Typography>   


                    </CardContent>          
                


                </Grid>


            </Grid>
            
            
        </div>

    );
};

export default Cards;