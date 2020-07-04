react 教程


reactdom.render() ; 能直接渲染  那么他的参数都是什么呢？   第一个参数写函数也可以 第二个参数 写挂载点

# jsx
    变量怎么进行附加 使用 {} 大括号的形式  还有能写成函数的模式吗？ 也能写成 函数的形式
    动态类怎么添加
    属性怎么添加  属性也是一个变量
    如何进行数据变化
    jsx 也是一个表达式   必须有一个根标签   jsx 有默认的xss 防止注入功能
react 内部使用的react.createElement
基本上所有的应用都只调用一次reactDOM.render
react 元素构建成组件  元素是不可变对象 一个元素就是一个电影的单帧  它代表了某个特定时刻的ui

组件传值通过 props  普通函数需要 使用props 作为参数
类函数 直接在this.props.name 直接用就可以了
react的元素 比如reactDOM.render(<Welcome>, root) 第一个参数可以是标签 div     也可以是用户自定义的组件  <Welcome name="Sara/> 这个会自动的找 function Welcome (props: 这个props 会将组件上的peops attr 传递进入 ) {}
组件名称必须以大写字母开头

this.props 可以直接在类组件中使用
state 组件是私有的  只有class 组件才有state  函数式组件没有state


# 生命周期
componentDidMount
componentWillUnmount

可以向组件中随意添加不参与数据流的额外字段  比如 timerid  直接配置就可以了

#state 三点
    ## 正确使用state
        - 不要直接修改state
        - 构造函数是唯一可以给state赋值的地方
        - 每次修改 必须使用setState
    ## setState 可能是异步的
    ## State 更新可能会被合并
组件是如何进行嵌套的 也有slot 之类的功能吗   =

# 事件处理
    ## 和普通dom的区别  名称使用小驼峰  使用方式 传入一个函数
this 绑定有三种形式 第一种  函数在类中声明的时候就使用箭头函数
第二种  在传入onClick的时候 使用 箭头函数 进行包裹
第三种  在 传入的时候进行 bind 绑定

条件渲染
在jsx 之前使用短路运算  条件计算  三木运算符 只要让你的render 返回null 就不会进行展示  但是应该还是进行了渲染  组件的数据依然 执行了生命周期

循环渲染
key 要在组件上声明

受控组件  表单很多都是受控组件  但是 input的 type=file 不是受控组件




react 不用key来进行标记吗  需要 元素的key 需要在 组件上指定  而不是 组件的内容上指定
<ListItem key={number.toString()}  value={number}/>

render 函数内是能取到this的 但是 render函数的回调函数 this是取不到的  所以 一般使用 箭头函数来处理this 这个有新的实验 在处理这个事情

普通阻止事件默认行为  return false   使用  preventDefault
react中 只能使用preventDefault



todo  dispatch 是啥
路由
redux 怎么使用
什么是受控组件什么是非受控组件

Fragment  <> 简短形式  对应在vue中的  template
共享数据使用context 来进行传递
Context 提供了一个无需为每层组件手动添加 props，就能在组件树间进行数据传递的方法
生命周期 在api reference 中需要仔细查看


代码分割   context
