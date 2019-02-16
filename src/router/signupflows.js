const SignupFlows = () => import(/* webpackChunkName: "signupflows" */ '@/views/SignupFlows')
const Start = () => import(/* webpackChunkName: "signupflows" */ '@/views/signupflows/start')
const Flow11 = () => import(/* webpackChunkName: "signupflows" */ '@/views/signupflows/flow11')
const Flow21 = () => import(/* webpackChunkName: "signupflows" */ '@/views/signupflows/flow21')
const Flow22 = () => import(/* webpackChunkName: "signupflows" */ '@/views/signupflows/flow22')
const Flow23 = () => import(/* webpackChunkName: "signupflows" */ '@/views/signupflows/flow23')
const Flow24 = () => import(/* webpackChunkName: "signupflows" */ '@/views/signupflows/flow24')
const Flow25 = () => import(/* webpackChunkName: "signupflows" */ '@/views/signupflows/flow25')  

export default [
  {
    path: '/signupflows',
    component: SignupFlows,
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: 'start',
        name: 'Start',
        component: Start
      },
      {
        path: 'flow11',
        name: 'Flow11',
        component: Flow11
      },
      {
        path: 'flow21',
        name: 'Flow21',
        component: Flow21
      },
      {
        path: 'flow22',
        name: 'Flow22',
        component: Flow22
      },
      {
        path: 'flow23',
        name: 'Flow23',
        component: Flow23
      },
      {
        path: 'flow24',
        name: 'Flow24',
        component: Flow24
      },
      {
        path: 'flow25',
        name: 'Flow25',
        component: Flow25
      }
    ]
  }
]
