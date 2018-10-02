const User = () => import(/* webpackChunkName: "user" */ '@/views/User')
const UserHome = () => import(/* webpackChunkName: "user" */ '@/views/user/UserHome')
const UserTemplates = () => import(/* webpackChunkName: "user" */ '@/views/user/UserTemplates')
const UserCalendar = () => import(/* webpackChunkName: "user" */ '@/views/user/UserCalendar')
const UserInsights = () => import(/* webpackChunkName: "user" */ '@/views/user/UserInsights')
const UserAccount = () => import(/* webpackChunkName: "user" */ '@/views/user/UserAccount')
const Settings = () => import(/* webpackChunkName: "user" */ '@/views/user/Settings')



export default [
  {
    path: '/user',
    component: User,
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: '',
        name: 'UserHome',
        component: UserHome,
        meta: {
          title: 'Home'
        }
      },
      {
        path: 'calendar',
        name: 'UserCalendar',
        component: UserCalendar,
        meta: {
          title: 'Calendar'
        }
      },
      {
        path: 'templates',
        name: 'UserTemplates',
        component: UserTemplates,
        meta: {
          title: 'Templates'
        }
      },
      {
        path: 'insights',
        name: 'UserInsights',
        component: UserInsights,
        meta: {
          title: 'Insights'
        }
      },
      {
        path: 'account',
        name: 'UserAccount',
        component: UserAccount,
        meta: {
          title: 'Account'
        }
      },
      {
        path: 'settings',
        name: 'Settings',
        component: Settings,
        meta: {
          title: 'Settings'
        }
      }
    ]
  }
]
