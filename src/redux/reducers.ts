import {combineReducers} from 'redux';
import Actions from './actionTypes';


//Usually you name the reducer with the name of the value of the keys in your store
//The store is almost like a state of the essential data of your app.


const isEverythingCool = (state={},action) =>
{
  switch(action.type)
  {
    case Actions.DoSomething:
    {
      return {...state,isEverythingCool:true};
    }
    default:
    {
      return state;
    }
  }
}

const isExpensive = (state={},action)=>
{
  switch (action.type) {
    case Actions.MakeItExpensive:
      {
        return {...state,isExpensive:true}
      }
      default:
      {
        return state;
      }
    }
}

export default combineReducers(
  {
    isEverythingCool,
    isExpensive
  }
)
