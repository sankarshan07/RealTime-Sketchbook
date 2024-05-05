import { useEffect, useRef } from "react"
import { useSelector,useDispatch } from "react-redux"

const Board = () => {
const canvasRef =useRef(null)
const actionMenuItem = useSelector((state) => state.menu.activeMenuItem)
const {color,size}= useSelector((state) => state.toolbox[actionMenuItem])


//add and download feature




//mounting part
useEffect(()=>{
    if(!canvasRef.current) return
    const canvas= canvasRef.current;
    const context =canvas.getContext('2d');
    //when mounting
    canvas.width =window.innerWidth;
    canvas.height =window.innerHeight;
},[])    //array dependency ,which runs only once 





return (
<canvas ref={canvasRef}>

</canvas>
)
}
export default Board