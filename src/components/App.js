import React, { useEffect, useRef } from 'react'

const App = () => {

    const canvasRef = useRef(null)
    const contextRef = useRef(null)

    let isDrawing = false;

    useEffect( () => {

        //define myCanvas
        const myCanvas = canvasRef.current; // same as getElementByID
        myCanvas.width = window.innerWidth - 100
        myCanvas.height = window.innerHeight;

        const context = myCanvas.getContext("2d")
        
        context.scale(1,1)
        context.lineWidth = 7;
        context.lineCap = 'round'
        context.strokeStyle = 'black'
        
        //preserve the context b/w render, to use in drawing functions
        contextRef.current = context
        
    }, [])

    //begin path
    //moveto
    //lineto
    //stroke

    //to get coordinates of mouse -> event.clientX, .clientY
    const startDrawing = (event) => {
        isDrawing = true;

        contextRef.current.beginPath();
    }

    const endDrawing = () => {
        isDrawing = false
    }

    const draw = (event) => {
        if(!isDrawing){
            return
        }

        contextRef.current.moveTo(event.clientX, event.clientY)
        contextRef.current.lineTo(event.clientX, event.clientY)
        contextRef.current.stroke()
        //go to 0,0 -> make a point -> stroke visualises it, and points eventually makes a line
    }

    return(
        <canvas 
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseUp={endDrawing}
        onMouseMove={draw}
        />
    )
}

export default App