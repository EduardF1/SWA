# React flux
- With React flux, we need to redraw the UI whenever a change occurs.
# OOP paradigms
1. Model - View separation
- the state of the UI is an object. When the UI changes, its state object should also
change.
```
Model                 View
  |    <--- Event ---  |          
  |        *           | 
           |---- A question arises, "How to update the model ?"
```
- There are 3 answers to the question of updating the view:
1. MVP
```
                       |----- Server Calling Code (in the Presenter)
                       |
Model              Presenter                View
  |  <-- Updates ---   | <--- User Event ---  |
  |  --- Changes ---   | --- Update UI -----> |
```
2. MVC
``` 
                     |--- Server Request(s)
                     |   
Model            Controller          View
 | <-------Update----|<----Event-------|
 |--------------Observes-------------->|
```
3. MVVM
```
Model                        ViewModel            View
  | <---- delegates/updates --- | <----Binding----> |
                                           |--- "How ?"
```
### The binding can be done with:
1. Observer or similar
    - Java properties
    - Vue.JS, whenever choosing a framework or API, we should think "What if I had to do it myself ?", we might need to
    make tools ourselves rather than use others' tooling.
2. Refresh after event handlers, promises, etc...
    - Angular, it has its own event handlers. "fetch" cannot be used with it, they have their own promises or RxJS can be used.

### Vue.JS
- ViewModel + template language.
```
viewModel = {
    el: <Root Html element>
    data: {
        x:100,
        y:7
    },
    compute: {
        z:{
            get: ()      => {   // get some value   },
            set: (value) => {   //set some value    }
        }
    },
    methods: {
        m: () => { // do something },
    }
}
```
- Vue has `Wathces` that are observables, like in RxJS. Used when something special needs to be done.

### Template language
- `{{ }}` called `double-handle bar`, `moustache-bar` or `banana-box`.
### Binding types:
- One-way `{{ data }}`
- One-way `<img v-bind:src="data">`. A valid abbreviation for `v-bind:src` is `:src`
- Two-way binding done as  `<input v-model:Value="data">`
- Another approach `<button v-on:click="method()"`. A valid abbreviation for `v-on:click` is `@click`.

### Notes
- In Vue, the usage of `this`, is in the context of an object is created under the hood, hence when accessing properties, we can use `this.salary` for example.
- `v-for` is used to iterate over objects found in an array.
- `v-model` is used for model state updates.
