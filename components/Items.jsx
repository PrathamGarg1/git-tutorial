import React, { useState } from 'react';

const Items = ({items,handleDelete}) => {


  return (
    <div className='main'>
      {items.length === 0 ? <p className='enj'>No Work # ENJOY!</p> :
          items.map((it) => (
            <div className="container" >
              <div className="karm">{it.karm}</div>
              <div className="time">{it.time}</div>
              <button id='addbtn-woww' onClick={() => handleDelete(it.karm,it.time)}>Delete</button>
            </div>
          ))
      }

    </div>
  )
}

export default Items

