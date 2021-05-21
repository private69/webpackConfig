export default {
    list: [
        {
            index: 0,
        }
    ],
    driver: [
        {
            // 顶部导航 
            element: '.pages-wrapper',
            popover: {
              title: '展示区',
              description: '显示具体的功能信息',
              position: 'left'
            },
            onNext: ele => {
                console.log(ele);
            }
        },
        { 
            element: '#el-index__iframe',
            popover: {
              title: '顶部导航区域',
              description: `GitHub图表以及用户设置`,
              position: 'right'
            },
            onNext: ele => {
                return ele;
            }
        },
        {
            // 侧边栏 
            element: '.menu-wrapper',
            popover: {
              title: '侧边区域',
              description: '涵盖项目大部分的功能的概览',
              position: 'right'
            },
            onNext: ele => {
                return ele;
            }
        },
        {
            // 侧边第一项
            element: '#manage-project',
            popover: {
                title: '作品列表',
                description: '用于展示当前用户所有保存过的页面以及新建页面',
                position: 'right'
            },
            onNext: ele => {
                return ele;
            }
        },
        {
            // 侧边第二项
            element: '#manage-font',
            popover: {
                title: '字体列表（正在构建中...）',
                description: '记录目前已支持的并且已上传的字体样式',
                position: 'right'
            },
        },
        {
            // 侧边第三项
            element: '#manage-music',
            popover: {
                title: '音乐素材（正在开发中...）',
                description: '记录目前已支持的并且已上传的音乐样式',
                position: 'right'
            },
        },
        {
            // 侧边第四项
            element: '#manage-newGuide',
            popover: {
                title: '新手指引',
                description: '包含关于项目的相关信息与主要的操作流程',
                position: 'right'
            },
            onNext: ele => {
                return ele;
            }
        },
        {
            // 侧边第五项
            element: '#manage-cpmCharge',
            popover: {
                title: '组件管理',
                description: '可查看目前已存在的组件',
                position: 'right'
            },
            onNext: ele => {
                return ele;
            }
        },
        {
            // 侧边第六项
            element: '#manage-about',
            popover: {
                title: '关于项目',
                description: '涵盖关于项目的整个构建周期，记录大部分的逻辑的编写过程',
                position: 'right'
            },
            onNext: ele => {
                console.log(ele);
            }
        },
        {
            element: '#chart',
            popover: {
              title: 'Breadcrumb',
              description: 'current page location  (嗯方向键下一步)',
              position: 'left'
            },
            onNext: ele => {
                console.log(ele);
            }
          },
    ],
    // 步骤说明
    steps: [
        {
            title: '步骤一',
            description: '登录进入项目首页'
        },
        {
            title: '步骤二',
            description: '编辑或新建页面'
        },
        {
            title: '步骤三',
            description: '完成页面构建并保存'
        },
        {
            title: '步骤四',
            description: '对新页面进行预览、下载'
        },
        {
            title: '步骤五',
            description: '待续...'
        },
    ]
}