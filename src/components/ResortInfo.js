import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'

class ResortInfo extends Component {
    render(){
        return(
            <Card className='ski-result'>
                <CardContent>
                <div className='result-header'>
                    <Typography variant="h5" color="textPrimary" gutterBottom>
                    {this.props.resort.name}, {this.props.resort.state}
                    </Typography>
                </div>
                <span><Typography color='textSecondary'>Driving Time: {this.props.resort.driveTime} hours</Typography></span>
                <span><Typography color='textSecondary'>Cheapest Flight: ${this.props.resort.cheapeastFlight}</Typography></span>
                <span><Typography color='textSecondary'>Recent Snowfall: {this.props.resort.recentSnowfall} inches</Typography></span>
                <span><Typography color='textSecondary'>Predicted Snowfall: {this.props.resort.predictedSnowfall} inches</Typography></span>
                <Typography variant="h5" component="h2">
                </Typography>
                </CardContent>
                <CardActions>
                <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        )
    }
}

export default ResortInfo