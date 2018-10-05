import ActionTypes from './actionTypes';

export function JustDoSomething()
{
    //Add app logic here if needed
    return{
        type: ActionTypes.DoSomething
    }
}

export function MakeItExpensive()
{
    return{
        type: ActionTypes.MakeItExpensive
    }
}
