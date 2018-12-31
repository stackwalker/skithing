import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
import {FaCar, FaPlane, FaSnowflake, FaMap, FaChartLine} from 'react-icons/fa'

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
            <span><Typography color='textSecondary'><FaCar color='blue' size='2em'/> {this.props.resort.driveTime} hours</Typography></span>
            <span><Typography color='textSecondary'><FaPlane color='green' size='2em'/> ${this.props.resort.cheapestFlight}</Typography></span>
            <span><Typography color='textSecondary'><FaSnowflake color='#8cb0ea' size='2em'/> {this.props.resort.recentSnowfall} inches</Typography></span>
            <span><Typography color='textSecondary'><FaChartLine color='pink' size='2em'/>{this.props.resort.predictedSnowfall} inches</Typography></span>
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