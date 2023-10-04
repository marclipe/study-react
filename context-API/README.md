# Context API

### What is Context API?

- Sharing a state between components;
- When we need 'global' data, we probably need to use Context;
- You need to encapsulate the components: App.js or index.js;
- Contexts are usually located in the context folder.

### Creating the context

- Create the context
- The first letter is uppercase
- The Convention is put in folder context;
- The file needs to be imported.

```
   import { createContext } from "react"

   export default CounterContext = CreateContext();
```

### Create the provider 
- It will delimit where the context is used; 
- Let's create a kind of component with `prop children`; 
- This Provider encapsulate the other components;
- Usually it stay in App.js or in index.js; 
- So can share the value of context.

```
   export function CounterContextProvider({children}: {children: ReactNode}) {
   const [counter, setCounter] = useState(0)

      return (
            <CounterContext.Provider value={{ counter, setCounter }}>
            {children}
            </CounterContext.Provider>
      );
   }
```


### What is React Node? 

ReactNode is a type that represents a React element, an array of React elements, or a string, number, or boolean. It is defined in the react module and can be used to specify the type of a variable that can hold any of these types.