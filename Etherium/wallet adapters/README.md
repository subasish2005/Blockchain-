# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


you wrap the app in src/main.jsx because both wagmi and tanstack query work through react context in simple words that wrapper is the place where you turn on the wallet system and data cache system for the whole app

wagmi provider gives component access to the same wallet configurations and wallet state 

In your code, this part:
<WagmiProvider config={config}>
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
</WagmiProvider>
means:

every component inside App can call wagmi hooks
every component inside App can call TanStack Query hooks
they all share one consistent wallet setup and one shared cache

A provider is the setup layer. A hook is the way a component asks for data. A client/config is the object that tells the provider what to manage.

Think of it like this:

WagmiProvider is the wallet system’s “power switch” for the app.
QueryClientProvider is the async data system’s “power switch.”
useAccount, useConnect, and useQuery are the buttons your components press to read from those systems.

so from here all the compnents can use wallet state and cached query state


useEffect dependency array — detailed rules and patterns

What it is: the second argument to useEffect, an array of values React watches. React re-runs the effect when any value in the array changes.
Empty array []: run once after mount; run cleanup (if returned) on unmount. Use for one-time setup (fetch on load, subscribe once, attach listeners).
No array: effect runs after every render (rarely what you want).
Non-empty array [a, b]: run on mount and whenever a or b change.