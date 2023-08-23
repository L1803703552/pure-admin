// 模拟后端动态生成路由
import { MockMethod } from "vite-plugin-mock";

/**
 * roles：页面级别权限，这里模拟二种 "admin"、"common"
 * admin：管理员角色
 * common：普通角色
 */

// const permissionRouter = {
//   path: "/permission",
//   meta: {
//     title: "权限管理",
//     icon: "lollipop",
//     rank: 998
//   },
//   children: [
//     {
//       path: "/permission/page/index",
//       name: "PermissionPage",
//       meta: {
//         title: "页面权限",
//         roles: ["admin", "common"]
//       }
//     },
//     {
//       path: "/permission/button/index",
//       name: "PermissionButton",
//       meta: {
//         title: "按钮权限",
//         roles: ["admin", "common"],
//         auths: ["btn_add", "btn_edit", "btn_delete"]
//       }
//     }
//   ]
// };

// 网上选课
const selectCourseRouter = {
  path: "/selectCourse",
  meta: {
    title: "网上选课",
    icon: "carbon:select-window",
    rank: 10
  },
  children: [
    {
      path: "/selectCourse/selectCourseAll",
      name: "selectCourseAll",
      meta: {
        title: "全校选修课"
      }
    },
    {
      path: "/selectCourse/selectCourseSurvey",
      name: "selectCourseSurvey",
      meta: {
        title: "网上调查"
      }
    }
  ]
};

// 活动报名
const eventJoinRoter = {
  path: "/eventJoin",
  meta: {
    title: "活动报名",
    icon: "material-symbols:assignment-add-outline",
    rank: 20
  },
  children: [
    {
      path: "/eventJoin",
      name: "eventJoin",
      meta: {
        title: "活动报名"
      }
    }
  ]
};

// 教学质量评价
const assessRoter = {
  path: "/assess",
  meta: {
    title: "教学质量评价",
    icon: "ic:outline-assessment",
    rank: 30
  },
  children: [
    {
      path: "/assess",
      name: "assess",
      meta: {
        title: "教学质量评价"
      }
    }
  ]
};

// 信息维护
const infoManageRouter = {
  path: "/infoManage",
  meta: {
    title: "信息维护",
    icon: "material-symbols:admin-panel-settings-outline",
    rank: 40
  },
  children: [
    {
      path: "/infoManage/User/index",
      name: "infoManageUser",
      meta: {
        title: "个人信息"
      }
    },
    {
      path: "/infoManage/Password/index",
      name: "infoManagePassword",
      meta: {
        title: "密码修改"
      }
    }
  ]
};

// 信息查询
const infoSearchRouter = {
  path: "/infoSearch",
  meta: {
    title: "信息查询",
    icon: "mdi:clipboard-text-search-outline",
    rank: 50
  },
  children: [
    {
      path: "/infoSearch/timeTable",
      name: "timeTable",
      meta: {
        title: "学生个人课表"
      }
    },
    {
      path: "/infoSearch/scoreQuery",
      name: "scoreQuery",
      meta: {
        title: "成绩查询"
      }
    },
    {
      path: "/infoSearch/examQuery",
      name: "examQuery",
      meta: {
        title: "学生考试查询"
      }
    },
    {
      path: "/infoSearch/gradeQuery",
      name: "gradeQuery",
      meta: {
        title: "等级考试查询"
      }
    },
    {
      path: "/infoSearch/eduProgram",
      name: "eduProgram",
      meta: {
        title: "培养计划"
      }
    },
    {
      path: "/infoSearch/courseSelQuery",
      name: "courseSelQuery",
      meta: {
        title: "选课查询"
      }
    }
  ]
};

// 毕业设计
const gradDesignRoter = {
  path: "/gradDesign",
  meta: {
    title: "毕业设计",
    icon: "zondicons:education",
    rank: 60
  },
  children: [
    {
      path: "/gradDesign",
      name: "gradDesign",
      meta: {
        title: "毕业设计"
      }
    }
  ]
};

export default [
  {
    url: "/getAsyncRoutes",
    method: "get",
    response: () => {
      return {
        success: true,
        data: [
          // permissionRouter,
          selectCourseRouter,
          eventJoinRoter,
          assessRoter,
          infoManageRouter,
          infoSearchRouter,
          gradDesignRoter
        ]
      };
    }
  }
] as MockMethod[];
