export const projects = [
	{
		title: 'JavaScript',
		id: 0,
		details: [
			{
				title: '弹珠游戏',
				id: 0,
				icon: 'icon-yoga-ball',
				skills: ['JavaScript', 'Canvas', '面向对象'],
				content: `本项目使用原生JavaScript和HTML5的Canvas，利用面向对象的原理实现了一个简易的弹珠游戏。`,
				feathers: `实现的功能：开始菜单，游戏暂停，碰撞检测，游戏关卡和游戏结束。`,
				gitHub: 'https://codesandbox.io/s/3zv7pj0v5'
			},
			{
				title: '青蛙跳河',
				id: 1,
				icon: 'icon-frog',
				skills: ['JavaScript', 'Canvas', '面向对象'],
				content: `本项目为Udacity前端进阶纳米学位的实战项目之一，利用面向对象原理实现了简单的青蛙跳河游戏。`,
				feathers: `实现的功能：游戏开始时随机人物，碰撞检测和游戏重置时改变虫子速度。`,
				gitHub: 'https://github.com/TUPOBO/Classic-Arcade-Game-Clone'
			}
		]
	},
	{
		title: 'React',
		details: [
			{
				title: '宠物领养',
				icon: 'icon-Dog',
				id: 2,
				skills: ['React', 'Redux', 'Reach Router', 'Parcel', 'Emotion.js'],
				content: `本项目使用parcels、React和Reach Router等技术，利用petFinder的API，实现了一个宠物收养网站。`,
				feathers: `实现的功能：点击加快放大镜旋转，实时查询宠物信息，利用React中Portals实现模态框，简易使用Jest测试React，利用React-Redux实现状态管理，可选择性的加载组件提高网站性能
				。`,
				gitHub: 'https://github.com/TUPOBO/master-complete-react-v4'
			},
			{
				title: '共享单车管理后台',
				icon: 'icon-bike',
				id: 3,
				skills: [
					'React',
					'Redux',
					'React-Router',
					'Mock',
					'Antd',
					'Echart',
					'BMap',
					'webpack'
				],
				content: `本项目使用了React和Antd框架，利用Mock进行模拟API调用，实现了共享单车管理后台。`,
				feathers: `实现的功能：了解并应用Antd框架的常用组件，利用Echart绘制图表，利用百度地图实现共享单车区域图，实现角色的增删改查。`,
				gitHub: 'https://github.com/TUPOBO/React-bike-manager'
			},
			{
				title: '个人博客',
				icon: 'icon-blog',
				id: 4,
				skills: ['React', 'Gatsby', 'Surge'],
				content: '利用Gatsby静态网页生成器实现个人博客',
				feathers: `实现的功能：渲染markdown，搜索博客文章，图片懒加载等`,
				gitHub: 'https://tupobo.surge.sh/'
			}
		]
	},
	{
		title: 'Vue',
		details: [
			{
				title: '计算器',
				icon: 'icon-jisuanqi1',
				id: 5,
				skills: ['Vue', 'CSS-Grid'],
				content: '利用vue实现简单的计算器',
				feathers: `实现的功能：加减乘除`,
				gitHub: 'https://tp-jisuan.surge.sh/'
			},
			{
				title: 'TodoList',
				icon: 'icon-list',
				id: 6,
				skills: ['Vue', 'Webpack'],
				content: '使用webpack，从零开始配置，实现vue版的TodoList',
				feathers: `实现的功能：增删待做事项`,

				gitHub: 'https://github.com/TUPOBO/mooc-vue-ssr'
			}
		]
	},
	{
		title: '小程序',
		details: [
			{
				title: '涂魄读书',
				icon: 'icon-book',
				id: 7,
				skills: ['Vue', 'Mpvue', 'Koa2', 'MySQL', '豆瓣API', '腾讯云'],
				content: '该小程序利用mpvue框架，腾讯云服务器和豆瓣API实现了简易图书馆',
				feathers: `实现的功能：扫码添加图书，图书轮播图，点击放大图书缩略图，评论功能（未上线）`,
				gitHub: 'https://github.com/TUPOBO/mpvue-bookReader'
			},
			{
				title: '前端开发工程师简历',
				icon: 'icon-resume',
				id: 8,
				skills: ['React', 'taro', 'taro-ui'],
				content: '该小程序利用taro框架和taro-ui框架实现个人简历小程序',
				feathers: ``,

				gitHub: 'https://github.com/TUPOBO/mpvue-bookReader'
			}
		]
	}
]
