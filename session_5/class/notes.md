# JS

- single threaded, can block, synchronous by default
- uses the event loop, event queue and stack
- using async JS we can avoid blocking the main thread (promises, async/await)

# Node

- run JS outside the browser
- also create servers with express
- NPM (Node package manager)
- GitHub is scanning packages and offers insights
- packages are installed with respective dependencies
- When we're returning something from the server, it enters the event loop queue. Once exiting the current stack frame, the response is retrieved from the queue.
- We should consider possible server connection refused, 404 not found,timeouts, errors when handling responses. 1 callback function for error and another for success.
- A promise can either be rejected or resolved.
- 404: promise resolved with a failure/status of 404.
- Nomad: nesting of promises

# Syntactic sugar

- await:

```
    {
    
    fetch(someUrl)
        .then(res => {
            // Some code
        }
    )
    jump out and then reenter the fetch once the response is back.
    }
    
    OR
    
    const res = await fetch() {
        // Some code
    }
```


1.  await       awaits      Promises
2.  await only in async functions
3. async functions return promises

