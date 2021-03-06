
    // 1. 定义（路由）组件。
// 可以从其他文件 import 进来
const Foo = {
  template: '<div>fooddddddddddddddddddd<p>dfdfdffdf</p></div>'
}
const Bar = {
  template: '<div>bar</div>'
}
const User = {
  template:`<div>user顶顶顶顶的
  {{$route.params.id}}
  <router-view></router-view>
  </div>`
}
const Mychildren = {
  template:`<div>mychildren</div>`
}
// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
// 在router-
const routes = [{
  path: '/foo',
  component: Foo
}, {
  path: '/bar',
  component: Bar
},{
  path:'/user/:id',
  component:User,
  children: [{
    path:'',
    component: Mychildren
  }]
}
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})