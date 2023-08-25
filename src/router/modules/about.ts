// 最简代码，也就是这些字段必须有
export default {
  path: "/about",
  redirect: "/about/index",
  meta: {
    icon: "informationLine",
    title: "关于",
    rank: 999
  },
  children: [
    {
      path: "/about/index",
      name: "about",
      component: () => import("@/views/about/index.vue"),
      meta: {
        title: "关于网站"
        // showParent: true
      }
    }
  ]
};
