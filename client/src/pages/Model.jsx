import React from 'react'
import TshirtModel from '../sections/TshirtModel'
import Cutomizer from '../sections/Cutomizer'
import Canvas from '../canvas/index';


const Model = () => {
  return (
    <div className="app transition-all ease-in">
      <TshirtModel />
      <Canvas />
      <Cutomizer />
    </div>
  )
}

export default Model