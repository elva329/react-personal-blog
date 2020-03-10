1. React 异步操作放到 axios 或者 Redux-thunk，Redux-thunk 是 react 的一个中间件，它使得我们可以在 action 里去写函数。
2. 发送 ajax 请求的步骤：首先绑定一个 click 事件，然后派发一个 action, 借助 redux-thunk 这个中间件，在 action 里写异步操作。请求到数据之后，再派发一个同步的 action,然后 reducer 接收到这个同步的 action 去改变它的数据。数据变了，页面就跟着发生了变化。
3. 使用 Redux:
   store 文件夹

- actionCreators.js
- constants.js
- index.js
- reducer.js
