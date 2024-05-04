import { useDispatch } from "react-redux"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPencil,faEraser,faRotateLeft,faRotateRight,faFileArrowDown } from "@fortawesome/free-solid-svg-icons"

import styles from './index.module.css'
import { menuItemClick ,actionItemCLick } from "@/slice/menuSlice"
import { MENU_ITEMS } from "@/constants"
const Menu =() => {
    const dispatch = useDispatch()
    const handleMenuCLick = (itemName)=> {
        dispatch(menuItemClick(itemName))   //item will come in directly to action.payload
    }

    return(
        <div className={styles.menuContainer}>
            <div className={styles.iconWrapper}>
                <FontAwesomeIcon icon={faPencil} className={styles.icon} onClick={()=> handleMenuCLick(MENU_ITEMS.PENCIL)} /> 

            </div>
            <div className={styles.iconWrapper}>
                <FontAwesomeIcon icon={faEraser} className={styles.icon} onClick={()=> handleMenuCLick(MENU_ITEMS.ERASER)} /> 
            </div>
            <div className={styles.iconWrapper}>
                <FontAwesomeIcon icon={faRotateLeft} className={styles.icon} /> 
            </div>
            <div className={styles.iconWrapper}>
                <FontAwesomeIcon icon={faRotateRight} className={styles.icon} /> 
            </div>
            
            <div className={styles.iconWrapper}>
                <FontAwesomeIcon icon={faFileArrowDown} className={styles.icon} /> 
            </div>
        </div>
    )
}
export default Menu;


// 1.24.33