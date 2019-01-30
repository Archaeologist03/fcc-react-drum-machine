import React from 'react'

function DrumPad(props) {
  return (
    <div className="drumPad-container">
      <div>
        <button onClick={() => props.playSound(props.sound)}>
          {props.keyName}
        </button>
      </div>
    </div>
  )
}

export default DrumPad
