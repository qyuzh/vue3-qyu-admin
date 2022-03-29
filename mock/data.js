// const baseURL = import.meta.env.VITE_APP_BASE_API
import setting from '@/settings'
const baseURL = setting.baseURL // vite-plugin-mock版本问题, 还无法使用import.meta.env.

const pwds = {
  admin: '123123',
  editor: '321321',
}

const tokens = {
  admin: {
    token: 'admin-token',
  },
  editor: {
    token: 'editor-token',
  },
}

const users = {
  'admin-token': {
    roles: ['admin'],
    introduction: 'I am a super administrator',
    avatar:
      'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin',
  },
  'editor-token': {
    roles: ['editor'],
    introduction: 'I am an editor',
    avatar:
      'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Editor',
  },
}

const pages = {
  admin: ['/permission/adminOnly'],
  editor: ['/permission/editorOnly'],
}

const res = [
  {
    url: baseURL + '/user/login',
    method: 'post',
    response: ({ body }) => {
      const { username, password } = body

      if (password !== pwds[username]) {
        return {
          code: 6000,
          message: '账户/密码错误, 账户/密码参见下方!',
        }
      }

      return {
        code: 2000,
        message: 'Login Sucess!',
        token: tokens[username].token,
      }
    },
  },
  {
    url: baseURL + '/user/info',
    method: 'post',
    response: ({ body }) => {
      const { token } = body
      return {
        code: 2000,
        message: 'Get Info Success!',
        info: users[token],
      }
    },
  },
  {
    url: baseURL + '/user/logout',
    method: 'post',
    response: () => {
      return {
        code: 2000,
        message: 'Logout Success!',
      }
    },
  },
  {
    url: baseURL + '/user/pages',
    method: 'post',
    response: ({ body }) => {
      const { role } = body
      return {
        code: 2000,
        message: 'Get Pages Sucess!',
        pages: pages[role],
      }
    },
  },
  {
    url: baseURL + '/user/userlist',
    method: 'get',
    response: () => {
      return {
        code: 2000,
        userList: [
          '张三',
          '张三1',
          '张三2',
          '张三3',
          '张三4',
          '李四',
          '李四1',
          '李四2',
          '李四3',
          '李四4',
        ],
      }
    },
  },
]

export default res
