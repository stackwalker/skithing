import React, { Component } from 'react'
import NavBar from './components/NavBar'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {DataStore} from './DataStore'
import ResortInfo from './components/ResortInfo'

import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.store = new DataStore()
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
      ]
    }

    this.onPassChange = this.onPassChange.bind(this)
    this.onResortInfoUpdated = this.onResortInfoUpdated.bind(this)
  }

  componentDidMount(){
    this.store.topics.resortInfoRetrieved.subscribe(this.onResortInfoUpdated)
  }

  onResortInfoUpdated(resort){
    let joined = this.state.availableResorts.concat(resort)
    this.setState(prevState => ({
      availableResorts: [...prevState.availableResorts, resort]
    }))
  }

  onPassChange(event){
    let pass = event.target.value
    this.setState({selectedPass: event.target.value})
    this.setState(prevState => ({availableResorts: []}))
    this.state.skiResorts.filter((sr) => {
      return sr.pass === pass
    })
    .map(r => {
      r = this.store.getResortInfo(r)
      return r 
    })
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className='filter-control'>
          <form noValidate autoComplete="off">
            <FormControl>
              <InputLabel htmlFor="pass-simple">SkiPass</InputLabel>
              <Select autoWidth={true} value={this.state.selectedPass} onChange={this.onPassChange}>
                <MenuItem value={'ikon'}>Ikon</MenuItem>
                <MenuItem value={'mountainCollective'}>Mountain Collective</MenuItem>
                <MenuItem value={'powderAlliance'}>Powder Alliance</MenuItem>
              </Select>
            </FormControl>
          </form>
        </div>
        {this.state.availableResorts.map((resort, i) => {
          return (
            <ResortInfo resort={resort} key={i}/>
          )
        })
      }
      </div>
    )
  }
}

export default App