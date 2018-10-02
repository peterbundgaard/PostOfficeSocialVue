const Admin = () => import(/* webpackChunkName: "account" */ '@/views/Admin')
const Home = () => import(/* webpackChunkName: "account" */ '@/views/admin/Home')
const Settings = () => import(/* webpackChunkName: "account" */ '@/views/admin/Settings')
const Calendar = () => import(/* webpackChunkName: "account" */ '@/views/admin/Calendar')
const Templates = () => import(/* webpackChunkName: "account" */ '@/views/admin/Templates')
const Editor = () => import(/* webpackChunkName: "account" */ '@/views/admin/Editor')
const Campaigns = () => import(/* webpackChunkName: "account" */ '@/views/admin/Campaigns')
const Insights = () => import(/* webpackChunkName: "account" */ '@/views/admin/Insights')
const Users = () => import(/* webpackChunkName: "account" */ '@/views/admin/Users')


export default [
  {
    path: '/admin',
    component: Admin,
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: '',
        name: 'Home',
        component: Home,
        meta: {
          title: 'Home'
        }
      },
      {
        path: 'settings',
        name: 'Settings',
        component: Settings,
        meta: {
          title: 'Settings'
        }
      },
      {
        path: 'calendar',
        name: 'Calendar',
        component: Calendar,
        meta: {
          title: 'Calendar'
        }
      },
      {
        path: 'templates',
        name: 'Templates',
        component: Templates,
        meta: {
          title: 'Templates'
        }
      },
      {
        path: 'editor',
        name: 'Editor',
        component: Editor,
        meta: {
          title: 'Editor'
        }
      },
      {
        path: 'campaigns',
        name: 'Campaigns',
        component: Campaigns,
        meta: {
          title: 'Campaigns'
        }
      },
      {
        path: 'insights',
        name: 'Insights',
        component: Insights,
        meta: {
          title: 'Insights'
        }
      },
      {
        path: 'users',
        name: 'Users',
        component: Users,
        meta: {
          title: 'Users'
        }
      }
    ]
  }
]
