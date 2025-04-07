import { defineMock } from "./base";

export default defineMock([
  {
    url: "users/me",
    method: ["GET"],
    body: {
      code: "00000",
      data: {
        userId: 2,
        username: "admin",
        nickname: "系统管理员",
        avatar: "https://foruda.gitee.com/images/1723603502796844527/03cdca2a_716974.gif",
        roles: ["ADMIN"],
        perms: [
          "sys:user:query",
          "sys:user:add",
          "sys:user:edit",
          "sys:user:delete",
          "sys:user:import",
          "sys:user:export",
          "sys:user:reset-password",

          "sys:role:query",
          "sys:role:add",
          "sys:role:edit",
          "sys:role:delete",

          "sys:dept:query",
          "sys:dept:add",
          "sys:dept:edit",
          "sys:dept:delete",

          "sys:menu:query",
          "sys:menu:add",
          "sys:menu:edit",
          "sys:menu:delete",

          "sys:dict:query",
          "sys:dict:add",
          "sys:dict:edit",
          "sys:dict:delete",
          "sys:dict:delete",

          "sys:dict-item:query",
          "sys:dict-item:add",
          "sys:dict-item:edit",
          "sys:dict-item:delete",

          "sys:notice:query",
          "sys:notice:add",
          "sys:notice:edit",
          "sys:notice:delete",
          "sys:notice:revoke",
          "sys:notice:publish",

          "sys:config:query",
          "sys:config:add",
          "sys:config:update",
          "sys:config:delete",
          "sys:config:refresh",
        ],
      },
      msg: "一切ok",
    },
  },

  {
    url: "users/page",
    method: ["GET"],
    body: {
      code: "00000",
      data: {
        list: [
          {
            id: 2,
            username: "admin",
            nickname: "系统管理员",
            mobile: "17621210366",
            gender: 1,
            avatar: "https://foruda.gitee.com/images/1723603502796844527/03cdca2a_716974.gif",
            email: "",
            status: 1,
            deptId: 1,
            roleIds: [2],
          },
          {
            id: 3,
            username: "test",
            nickname: "测试小用户",
            mobile: "17621210366",
            gender: 1,
            avatar: "https://foruda.gitee.com/images/1723603502796844527/03cdca2a_716974.gif",
            email: "youlaitech@163.com",
            status: 1,
            deptId: 3,
            roleIds: [3],
          },
        ],
        total: 2,
      },
      msg: "一切ok",
    },
  },

  // 新增用户
  {
    url: "users",
    method: ["POST"],
    body({ body }) {
      return {
        code: "00000",
        data: null,
        msg: "新增用户" + body.nickname + "成功",
      };
    },
  },

  // 获取用户表单数据
  {
    url: "users/:userId/form",
    method: ["GET"],
    body: ({ params }) => {
      return {
        code: "00000",
        data: userMap[params.userId],
        msg: "一切ok",
      };
    },
  },
  // 修改用户
  {
    url: "users/:userId",
    method: ["PUT"],
    body({ body }) {
      return {
        code: "00000",
        data: null,
        msg: "修改用户" + body.nickname + "成功",
      };
    },
  },

  // 删除用户
  {
    url: "users/:userId",
    method: ["DELETE"],
    body({ params }) {
      return {
        code: "00000",
        data: null,
        msg: "删除用户" + params.id + "成功",
      };
    },
  },

  // 重置密码
  {
    url: "users/:userId/password/reset",
    method: ["PUT"],
    body({ query }) {
      return {
        code: "00000",
        data: null,
        msg: "重置密码成功，新密码为：" + query.password,
      };
    },
  },

  // 导出Excel
  {
    url: "users/_export",
    method: ["GET"],
    headers: {
      "Content-Disposition": "attachment; filename=%E7%94%A8%E6%88%B7%E5%88%97%E8%A1%A8.xlsx",
      "Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    },
  },

  {
    url: "users/profile",
    method: ["GET"],
    body: {
      code: "00000",
      data: {
        id: 2,
        username: "admin",
        nickname: "系统管理员",
        avatar: "https://foruda.gitee.com/images/1723603502796844527/03cdca2a_716974.gif",
        gender: 1,
        mobile: "17621210366",
        email: null,
        deptName: "有来技术",
        roleNames: "系统管理员",
        createTime: "2019-10-10",
      },
    },
  },

  {
    url: "users/profile",
    method: ["PUT"],
    body() {
      return {
        code: "00000",
        data: null,
        msg: "修改个人信息成功",
      };
    },
  },

  {
    url: "users/password",
    method: ["PUT"],
    body() {
      return {
        code: "00000",
        data: null,
        msg: "修改密码成功",
      };
    },
  },
]);

// 用户映射表数据
const userMap: Record<string, any> = {
  2: {
    id: 2,
    username: "admin",
    nickname: "系统管理员",
    mobile: "17621210366",
    gender: 1,
    avatar: "https://foruda.gitee.com/images/1723603502796844527/03cdca2a_716974.gif",
    email: "",
    status: 1,
    deptId: 1,
    roleIds: [2],
  },
  3: {
    id: 3,
    username: "test",
    nickname: "测试小用户",
    mobile: "17621210366",
    gender: 1,
    avatar: "https://foruda.gitee.com/images/1723603502796844527/03cdca2a_716974.gif",
    email: "youlaitech@163.com",
    status: 1,
    deptId: 3,
    roleIds: [3],
  },
};
