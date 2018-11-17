import React, { Component } from 'react'
import { Card, Divider, Icon, Avatar } from 'antd'
import { projects } from './projects'
import './index.css'

const MyIcon = Icon.createFromIconfontCN({
	scriptUrl: '//at.alicdn.com/t/font_923067_1cmx4n7rs9k.js' // 在 iconfont.cn 上生成
})

class Projects extends Component {
	render() {
		return (
			<Card title='实战项目'>
				{projects.map(item => (
					<React.Fragment>
						<Divider>{item.title}</Divider>
						{item.details.map(item => (
							<Card
								hoverable
								title={
									<div>
										<MyIcon style={{ fontSize: 20 }} type={item.icon} />
										<span style={{ marginLeft: 10 }}>{item.title}</span>
									</div>
								}
								extra={<a href={item.gitHub}>源码</a>}
								actions={item.skills}
							>
								<p>{item.content}</p>
								<p>{item.feathers}</p>
							</Card>
						))}
					</React.Fragment>
				))}
			</Card>
		)
	}
}

export default Projects
