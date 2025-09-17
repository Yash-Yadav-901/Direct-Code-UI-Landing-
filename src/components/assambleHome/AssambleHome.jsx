import React from 'react'
import Bg from '../mainElements/Bg'
import ExtensionShowCase from '../normalShowCase/ExtensionShowCase'
import RealTimeShowCase from '../normalShowCase/RealTimeShowCase'
import NormalShowCase from '../normalShowCase/NormalShowCase'
import UIShowCase from '../normalShowCase/UIShowCase'


function AssambleHome() {
  return (
    <div>
        <Bg/>
        <ExtensionShowCase/>
        <RealTimeShowCase/>
        <NormalShowCase/>
        <UIShowCase/>
    </div>
  )
}

export default AssambleHome