import { useEffect, useLayoutEffect, useRef } from "react"
import { useSelector,useDispatch } from "react-redux"
import { menuItemClick,actionItemCLick } from "@/slice/menuSlice"
import { MENU_ITEMS } from "@/constants"

const Board = () => {
    const dispatch = useDispatch()
const canvasRef =useRef(null)
const shouldDraw =useRef(false)
const {activeMenuItem,actionMenuItem} = useSelector((state) => state.menu)
const {color,size}= useSelector((state) => state.toolbox[activeMenuItem])

useEffect(() => {
    if(!canvasRef.current) return
    const canvas =canvasRef.current
    const context =canvas.getContext('2d')

    if(actionMenuItem === MENU_ITEMS.DOWNLOAD){
        const URL = canvas.toDataURL()
        const anchor = document.createElement('a')
        anchor.href=URL
        anchor.download="paintboard.jpg"
        anchor.click()
        console.log(URL);  //displays url in console
        

    }
    dispatch(actionItemCLick(null)) // it retriggers the useEffect() and makes to download again and again
    console.log("actionMenuItem",actionMenuItem); //displays- actionMenuItem DOWNLOAD

},[actionMenuItem,dispatch])


//add and download feature
useEffect (() => {
    if(!canvasRef.current) return
    const canvas= canvasRef.current;
    const context =canvas.getContext('2d');   //context provides all the utility functions
    
    const changeConfig = () => {

        context.strokeStyle = color
        context.lineWidth = size
    }
    // console.log();
   

    changeConfig()

}, [color,size]) //empty array dependencies




//this runs before useeffect()  and doesnt ovelap on the useeffect
useLayoutEffect(()=>{   
    if(!canvasRef.current) return
    const canvas= canvasRef.current;
    const context =canvas.getContext('2d');
    
    canvas.width =window.innerWidth;
    canvas.height =window.innerHeight;
     //canvas add

     const beginPath = (x,y) => {
        context.beginPath()
        context.moveTo(x,y)
     }

     const  drawLine = (x,y) => {
        context.lineTo(x,y) 
        context.stroke()
     }
     const handleMouseDown = (e) => {
        shouldDraw.current = true
       beginPath(e.clientX, e.clientY)
    }
    const handleMouseMove = (e) => {
        if (!shouldDraw.current) return
        drawLine(e.clientX, e.clientY) 
        
    }
    const handleMouseUp = (e) => {
         shouldDraw.current = false
         
     }
     
     canvas.addEventListener('mousedown',handleMouseDown)
     canvas.addEventListener('mousemove',handleMouseMove)
     canvas.addEventListener('mouseup',handleMouseUp)

     return () => {
        canvas.removeEventListener('mousedown',handleMouseDown)
        canvas.removeEventListener('mousemove',handleMouseMove)
        canvas.removeEventListener('mouseup',handleMouseUp)
     }
},[])    //array dependency ,which runs only once 





return (
<canvas style={{background: "white"}} ref={canvasRef}>

</canvas>
)
}
export default Board