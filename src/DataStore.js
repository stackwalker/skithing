import Callbacks from './common/Callbacks'

export class DataStore{
    constructor(){
        this.topics = {
            resortInfoRetrieved: Callbacks()
        }
    }

    getResortInfo(resort){
        resort.driveTime = getRandom(1,30)
        resort.cheapestFlight = getRandom(120,1500)
        resort.recentSnowfall = getRandom(1, 100)
        resort.predictedSnowfall = getRandom(1,100)
        
        this.topics.resortInfoRetrieved.fire(resort)
    }

}

function getRandom(min, max){
    return Math.round(Math.random() * (max-min) + min)
}