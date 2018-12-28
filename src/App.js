import React, { Component } from 'react'
import NavBar from './components/NavBar'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedPass: '',
      zip: '',
      availableResorts: [],
      skiResorts: [
        {pass: 'ikon', state: 'CO', name: 'Aspen Snowmass'},
        {pass: 'ikon', state: 'UT', name: 'Deer Valley'},
        {pass: 'ikon', state: 'WY', name: 'Jackson Hole'},
        {pass: 'ikon', state: 'MT', name: 'Big Sky'},
        {pass: 'ikon', state: 'BC', name: 'Revelstoke'},
        {pass: 'ikon', state: 'BC', name: 'Cypress Mountain'},
        {pass: 'mountainCollective', state: 'UT', name: 'Brighton'},
        {pass: 'mountainCollective', state: 'NM', name: 'Taos'},
        {pass: 'mountainCollective', state: 'WA', name: 'The Summit at Snoqualmie'},
        {pass: 'mountainCollective', state: 'VT', name: 'Sugarbush'},
        {pass: 'mountainCollective', state: 'VT', name: 'Killington'},
        {pass: 'powderAlliance', state: 'NH', name: 'Loon'},
        {pass: 'powderAlliance', state: 'ME', name: 'Sunday River'},
        {pass: 'powderAlliance', state: 'ME', name: 'Sugarloaf'},
        {pass: 'powderAlliance', state: 'MI', name: 'Boyne Highlands'},
        {pass: 'powderAlliance', state: 'MI', name: 'Boyne Mountain'},
        {pass: 'powderAlliance', state: 'NSW', name: 'Thredbo'}
      ],

    }

    this.onPassChange = this.onPassChange.bind(this)
  }

  onPassChange(event){
    let pass = event.target.value
    console.log('***', event)
    this.setState({selectedPass: event.target.value})
    let resortsForPass = this.state.skiResorts.filter((sr) => {
      return sr.pass === pass
    })
    this.setState({availableResorts: resortsForPass})
  }
  render() {
    return (
      <div>
        <NavBar />
        <div className='filter-control'>
          <form noValidate autoComplete="off">
            <FormControl>
              <InputLabel htmlFor="pass-simple">SkiPass</InputLabel>
              <Select
                autoWidth={true}
                value={this.state.selectedPass}
                onChange={this.onPassChange}
              >
                <MenuItem value={'ikon'}>Ikon</MenuItem>
                <MenuItem value={'mountainCollective'}>Mountain Collective</MenuItem>
                <MenuItem value={'powderAlliance'}>Powder Alliance</MenuItem>
              </Select>
            </FormControl>
          </form>
        </div>
        {this.state.availableResorts.map((resort) => {
          return (
            <Card className='ski-result'>
              <CardContent>
                <span className='result-header'>
                  <Typography variant="h5" color="textPrimary" gutterBottom>
                    {resort.name}, {resort.state}
                  </Typography>
                </span>
                <span><Typography color='textSecondary'>Driving Time:</Typography></span>
                <span><Typography color='textSecondary'>Cheapest Flight:</Typography></span>
                <span><Typography color='textSecondary'>Recent Snowfall:</Typography></span>
                <span><Typography color='textSecondary'>Predicted Snowfall:</Typography></span>
                <Typography variant="h5" component="h2">
                </Typography>
                <Typography color="textSecondary">
                  adjective
                </Typography>
                <Typography component="p">
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          )
        })
      }
      </div>
    )
  }
}

export default App