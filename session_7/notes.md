# GUIs
- Functional programming, keep state unchanged, however, GUIs change.
### Types
- View/Model separation
- Functional
- MVVM, MVC/MVP are OO patterns.
- UI states can be split into 2 main sub-parts:
  - Persistent (using sever transactions, "Model")
  - Temporary

#### Functional
- No variables, just pure functions (in practice, impossible)
- Instead, we use a functional style, having a few variables and mostly pure functions (dependency only on the given input)
- `x = f(x, a,b,c)` state can be changed either through user actions or transactions.
```
Form: state = reducer (action, state)

Store               _____________    
action ---------->  |  Reducer  |
    _________       |           |
    | State |       |           |
--- |_______| --->  |___________| ----           
        ^                            |
        |____________________________|

The state is found in the store.
        
```
- The state is found in the store (it is an object), and an action (dispatched from the dispatcher, the dispatcher listens for events)
goes in, and then mutation occur via the reducer.
- We listen to the `window.document` through the dispatcher. We then send the state to the `View` - a function which produces HTML DOM
and updates the UI (window), render the changes.
- The reducer and View are pure functions, the view listens for changes and then the reducer updates the view.
- The dispatcher is the one interacting with the server.
- Redux can be used for <strong>modular</strong> state management.