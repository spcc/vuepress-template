module.exports = {
  title: '模板标题',
  base: "/template/",
  dest: "./template",
  port: '9001',
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    sidebarDepth: 2,
    locales: {
      "/": {
        sidebar: [
          {
            title: "测试主标题",
            collapsable: false,
            children: [
              ["/views/template1/", "template1"],
              ["/views/template2/", "template2"],
            ]
          }
        ]
      }
    }
  },
}