import React from "react";
import classes from './Burger.module.css'
import Burgeringredient from "./BurgerIngredient/BurgerIngredient";

const burger=(props)=>{
    return(
      <div className={classes.Burger}>
          <Burgeringredient type='bread-top'/>
          <Burgeringredient type='bread-bottom'/>
          <Burgeringredient type='cheese'/>
          <Burgeringredient type='meat'/>
      </div>
    );
}
export default burger;