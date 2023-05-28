import React, { Component } from "react";
import data from '../database/data';
import colors from '../database/colors';
import { ColorPiker } from "./ColorPiker/ColorPiker";
import { Tabs } from "./Tabs/Tabs";

export class App extends Component {

  render() {
    return (
      <div>
        <Tabs item={data}/>
        <ColorPiker colors={colors}/>
      </div>  
    )
  }
}
