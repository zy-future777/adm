import UserAPI, { type UserForm } from "@/api/system/user.api";
import type { IModalConfig } from "@/components/CURD/types";
import { DeviceEnum } from "@/enums/settings/device.enum";
import { useAppStore } from "@/store";

const modalConfig: IModalConfig<UserForm> = {
  pageName: "sys:user",
  component: "drawer",
  drawer: {
    title: "修改用户",
    size: useAppStore().device === DeviceEnum.MOBILE ? "80%" : 500,
  },
  pk: "id",
  formAction: function (data) {
    return UserAPI.update(data.id as string, data);
  },
  beforeSubmit(data) {
    console.log("提交之前处理", data);
  },
  formItems: [
    {
      label: "用户名",
      prop: "username",
      rules: [{ required: true, message: "用户名不能为空", trigger: "blur" }],
      type: "input",
      attrs: {
        placeholder: "请输入用户名",
        readonly: true,
      },
    },
    {
      label: "用户昵称",
      prop: "nickname",
      rules: [{ required: true, message: "用户昵称不能为空", trigger: "blur" }],
      type: "input",
      attrs: {
        placeholder: "请输入用户昵称",
      },
    },
    {
      label: "所属部门",
      prop: "deptId",
      rules: [{ required: true, message: "所属部门不能为空", trigger: "blur" }],
      type: "tree-select",
      attrs: {
        placeholder: "请选择所属部门",
        data: [],
        filterable: true,
        "check-strictly": true,
        "render-after-expand": false,
      },
    },
    {
      type: "custom",
      label: "性别",
      prop: "gender",
      initialValue: 1,
    },
    {
      label: "角色",
      prop: "roleIds",
      rules: [{ required: true, message: "用户角色不能为空", trigger: "blur" }],
      type: "select",
      attrs: {
        placeholder: "请选择",
        multiple: true,
      },
      options: [],
      initialValue: [],
    },
    {
      type: "input",
      label: "手机号码",
      prop: "mobile",
      rules: [
        {
          pattern: /^1[3|4|5|6|7|8|9][0-9]\d{8}$/,
          message: "请输入正确的手机号码",
          trigger: "blur",
        },
      ],
      attrs: {
        placeholder: "请输入手机号码",
        maxlength: 11,
      },
    },
    {
      label: "邮箱",
      prop: "email",
      rules: [
        {
          pattern: /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/,
          message: "请输入正确的邮箱地址",
          trigger: "blur",
        },
      ],
      type: "input",
      attrs: {
        placeholder: "请输入邮箱",
        maxlength: 50,
      },
    },
    {
      label: "状态",
      prop: "status",
      type: "switch",
      attrs: {
        activeText: "正常",
        inactiveText: "禁用",
        activeValue: 1,
        inactiveValue: 0,
      },
    },
  ],
};

export default reactive(modalConfig);
