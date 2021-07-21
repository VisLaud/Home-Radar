import axios from 'axios';

const GetCrimeRate = async (state) => {
    let nationalResponse = null;
    let stateResponse = null;

    await axios.get(
        `https://home-radar.herokuapp.com/crime/national`
    ).then(res => nationalResponse = res);

    await axios.get(
        `https://home-radar.herokuapp.com/crime?state=${state}`
    ).then(res => stateResponse = res);

    //state population / national population
    let nationalPopulation = nationalResponse.data.population;
    let statePopulation = stateResponse.data.results[0].population;
    let populationPercent = (statePopulation / nationalPopulation).toFixed(2);

    //state violent crime rate / national violent crime rate
    let nationalViolentCrime = nationalResponse.data.violent_crime;
    let stateViolentCrime = stateResponse.data.results[0].violent_crime;
    let violentCrimePercent = stateViolentCrime / nationalViolentCrime;

    //state homicide rate / national homicide rate
    let nationalHomicide = nationalResponse.data.homicide;
    let stateHomicide = stateResponse.data.results[0].homicide;
    let homicidePercent = stateHomicide / nationalHomicide;

    //state robbery rate / national robbery rate
    let nationalRobbery = nationalResponse.data.robbery;
    let stateRobbery = stateResponse.data.results[0].robbery;
    let robberyPercent = stateRobbery / nationalRobbery;

    //state AA rate / national AA rate
    let nationalAggravatedAssault = nationalResponse.data.aggravated_assault;
    let stateAggravatedAssault = stateResponse.data.results[0].aggravated_assault;
    let aggravatedAssaultPercent = stateAggravatedAssault / nationalAggravatedAssault;

    //state property crime rate / national property crime rate 
    let nationalPropertyCrime = nationalResponse.data.property_crime;
    let statePropertyCrime = stateResponse.data.results[0].property_crime;
    let propertyCrimePercent = statePropertyCrime / nationalPropertyCrime;

    //state burglary rate / national burglary rate
    let nationalBurglary = nationalResponse.data.burglary;
    let stateBurglary = stateResponse.data.results[0].burglary;
    let burglaryPercent = stateBurglary / nationalBurglary;

    //state larceny rate / national larceny rate 
    let nationalLarceny = nationalResponse.data.larceny;
    let stateLarceny = stateResponse.data.results[0].larceny;
    let larcenyPercent = stateLarceny / nationalLarceny;

    //state MVT / national MTV
    let nationalMotorVehicleTheft = nationalResponse.data.motor_vehicle_theft;
    let stateMotorVehicleTheft = stateResponse.data.results[0].motor_vehicle_theft;
    let MotorVehicleTheftPercent = stateMotorVehicleTheft / nationalMotorVehicleTheft;

    //state arson rate / national arson rate
    let nationalArson = nationalResponse.data.arson;
    let stateArson = stateResponse.data.results[0].arson;
    let arsonPercent = stateArson / nationalArson;

    //avg of all crime rate
    let totalPercent = (
        (violentCrimePercent +
            homicidePercent +
            robberyPercent +
            aggravatedAssaultPercent +
            propertyCrimePercent +
            burglaryPercent +
            larcenyPercent +
            MotorVehicleTheftPercent +
            arsonPercent) /
        9
    ).toFixed(2);

    // we want to scale the crime rate in a specific state related to the entire nation crime rate

    return { populationPercent, totalPercent };
}

export default GetCrimeRate;