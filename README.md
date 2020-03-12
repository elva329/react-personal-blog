1. React 异步操作放到 axios 或者 Redux-thunk，Redux-thunk 是 react 的一个中间件，它使得我们可以在 action 里去写函数。
2. 发送 ajax 请求的步骤：首先绑定一个 click 事件，然后派发一个 action, 借助 redux-thunk 这个中间件，在 action 里写异步操作。请求到数据之后，再派发一个同步的 action,然后 reducer 接收到这个同步的 action 去改变它的数据。数据变了，页面就跟着发生了变化。
3. 使用 Redux:
   建立 store 文件夹

- actionCreators.js
- constants.js
- index.js
- reducer.js： 定义一些默认值

4.  pureComponent 表示一个纯组件，可以用来优化 react 程序。减少 render 函数渲染的次数。提高性能
    pureComponent 进行的是浅比较，也就是说如果是引用数据类型的数据，只会比较不是同一个地址，而不会比较这个地址里面的数据是否一致
    浅比较会忽略属性和或状态突变情况，其实也就是数据引用指针没有变化，而数据发生改变的时候 render 是不会执行的。如果我们需要重新渲染那么就需要重新开辟空间引用数据

好处：

当组件更新时，如果组件的 props 或者 state 都没有改变，render 函数就不会触发。省去虚拟 DOM 的生成和对比过程，达到提升性能的目的。具体原因是因为 react 自动帮我们做了一层浅比较

5. 想要异步加载组件，可以使用 react-loadable 这个库，然后在组件文件夹建立一个 loadable.js 的文件，然后配置相关异步的加载的内容。在 App.js 中，修改原来组件的 加载路径，添加到 loadable 的路径。如果遇到获取不到 router 参数的情况，可以在组件内引用 react-router-dom 里的 withRouter，让组件有能力去获取 router 里的参数和内容。
