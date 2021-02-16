# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* 
...
When the user clicks on the #1 this then triggers the handleClick function created in App.js, which then calls the addOne action function which was exported from our index.js in our actions folder, which returns a string "type: 'var'", which is then read by the dispatch function which is wrapped around the addOne action function. Which was created by our useReducer function. But the reason that our value went up by one is because our useReducer function got connected with our Reducer function and knew what the add_one commend was that allowed the change in state which was then update to the current change.

* TotalDisplay shows the total plus 1.
