import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'

function Colorss() {
    const [color, setColor] = useState("pink")

  const click = color => {
    setColor(color)
  }
  useEffect(() => {
    document.body.style.backgroundColor = color
  }, [color])
  return (
    <div className='container d-flex flex-column align-items-center justify-content-center text-center min-vh-100 border solid shadow '>
        <h1  className="mt-6 fw-bolder">Background Color Changer</h1>
        <div className='d-flex justify-content-around  '>
            <Button  onClick= {() => click("green")} className='btn btn-success'>Green</Button>
            <Button  onClick= {() => click("orange")} className='btn btn-warning ms-5'>Orange</Button>
            <Button onClick= {() => click("red")} className='btn btn-danger ms-5'>Red</Button>
            <Button onClick= {() => click("blue")} className='btn btn-primary ms-5'>Blue</Button>

        </div>
        
    </div>
  )
}

export default Colorss