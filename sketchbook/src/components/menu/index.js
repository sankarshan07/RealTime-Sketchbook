import { useDispatch,useSelector } from "react-redux"
import cx from 'classnames';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPencil,faEraser,faRotateLeft,faRotateRight,faFileArrowDown } from "@fortawesome/free-solid-svg-icons"

import styles from './index.module.css'
import { menuItemClick ,actionItemCLick } from "@/slice/menuSlice"
import { MENU_ITEMS } from "@/constants"
const Menu =() => {
    const dispatch = useDispatch()
    const activeMenuItem = useSelector((state) => state.menu.activeMenuItem)
    const handleMenuCLick = (itemName)=> {
        dispatch(menuItemClick(itemName))   //item will come in directly to action.payload
    }

    return(
        <div className={styles.menuContainer}>
            <div className={cx(styles.iconWrapper,{[styles.active]:activeMenuItem === MENU_ITEMS.PENCIL})} onClick={()=> handleMenuCLick(MENU_ITEMS.PENCIL)}>
                <FontAwesomeIcon icon={faPencil} className={styles.icon}  /> 

            </div>
            <div className={cx(styles.iconWrapper,{[styles.active]:activeMenuItem === MENU_ITEMS.ERASER})} onClick={()=> handleMenuCLick(MENU_ITEMS.ERASER)}>
                <FontAwesomeIcon icon={faEraser} className={styles.icon}  /> 
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


