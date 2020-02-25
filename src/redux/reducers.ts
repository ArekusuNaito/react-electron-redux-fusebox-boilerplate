import {combineReducers} from 'redux';
import Actions from './actionTypes';



//Usually you name the reducer with the name of the value of the keys in your store
//The store is almost like a state of the essential data of your app.

//Reducers specify how the application's state changes in response to actions sent to the store. 
//Remember that actions only describe what happened, but don't describe 
//how the application's state changes.

//Things you should never do inside a reducer:

// Mutate its arguments;
// Perform side effects like API calls and routing transitions;
// Call non - pure functions, e.g.Date.now() or Math.random().


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
