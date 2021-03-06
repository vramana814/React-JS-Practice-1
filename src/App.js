import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AreaOfRectangle from "./Components/AreaOfRectangle";
import TotalSalary from './Components/TotalSalary';
import AreaOfRightAngledTraiangle from './Components/AreaOfRightAngledTraiangle';
//import AreaOfRightAngledTraiangle from './Components/AreaOfRightAngledTraiangle';
import AreaOfEquilateralTraingle from './Components/AreaOfEquilateralTraingle';
import VolumeOfCube from './Components/VolumeOfCube';
import SurfaceAreaOfCube from './Components/SurfaceAreaOfCube';
//import VolumeOfCube from './Components/VolumeOfCube';
import VolumeOfCone from './Components/VolumeOfCone';
import SurfaceAreaOfCone from './Components/SurfaceAreaOfCone';
import AreaOfCircle from './Components/AreaOfCircle';
import PerimeterOfCircle from './Components/PerimeterOfCircle';
import Kmtomiles from './Components/Kmtomiles';
import Allnumbers from './Components/Allnumbers';
import Naturalnumbers from './Components/Naturalnumbers';
import EligibleforVoting from './Components/Eligileforvotitng';
import Ageandpercentage from './Components/Ageandpercentage';
import Evenorodd from './Components/Evenorodd';
import Vowel from './Components/Vowel';
import BiggestNumber from './Components/BiggestNumber';
import TwoNumbers from './Components/TwoNumbers';
import Ascending from './Components/Ascending';
import Leapyear from './Components/Leapyear';
import SquareofNumber from './Components/SquareofNumber';
import AmountinRupees from './Components/AmountinRupees';


class App extends Component {
  render() {
    return (
      <div id = "Header" className="App" style={{paddingBottom:30}}>
        <AreaOfRectangle></AreaOfRectangle>
        <TotalSalary></TotalSalary>
        <AreaOfRightAngledTraiangle></AreaOfRightAngledTraiangle>
        <AreaOfEquilateralTraingle></AreaOfEquilateralTraingle>
        <VolumeOfCube></VolumeOfCube>
        <SurfaceAreaOfCube></SurfaceAreaOfCube>
        <VolumeOfCone></VolumeOfCone>
        <SurfaceAreaOfCone></SurfaceAreaOfCone>
        <AreaOfCircle></AreaOfCircle>
        <PerimeterOfCircle></PerimeterOfCircle>
        <Kmtomiles></Kmtomiles>
        <Allnumbers></Allnumbers>
        <Naturalnumbers></Naturalnumbers>
        <EligibleforVoting></EligibleforVoting>
        <Ageandpercentage></Ageandpercentage>
        <Evenorodd></Evenorodd>
        <Vowel></Vowel>        
        <BiggestNumber></BiggestNumber>
        <TwoNumbers></TwoNumbers>
        <Leapyear></Leapyear>
        <Ascending></Ascending>
        <SquareofNumber></SquareofNumber>
        <AmountinRupees></AmountinRupees>
        
      </div>
    );
  }
}

export default App;
