import React, { Component } from 'react'
import { Card, Progress, Timeline, Divider, Icon, Tooltip } from 'antd'
import skills from './skills'
import Animate from 'rc-animate'
import './index.css'

const { Meta } = Card

class SiderComponent extends Component {
	render() {
		return (
			<div className='side'>
				<Animate showProp='visible' transitionName='fade-enter'>
					<Card
						hoverable
						className='avatar'
						style={{ width: '80%' }}
						cover={<img src='/images/me.jpg' alt='me' />}
						actions={[
							<Tooltip title='GitHub'>
								<a href='https://github.com/TUPOBO'>
									<Icon type='github' />
								</a>
							</Tooltip>,
							<Tooltip title='CodePen'>
								<a href='https://codepen.io/tupobo/'>
									<Icon type='codepen' />
								</a>
							</Tooltip>,
							<Tooltip title='Blog'>
								<a href='https://TUPOBO.github.io'>
									<Icon type='book' />
								</a>
							</Tooltip>
						]}
					>
						<Meta title='刘 波' description='前端开发工程师' />
					</Card>
				</Animate>

				<Card hoverable title='开发技能' style={{ width: '80%' }}>
					{skills.map(item => (
						<React.Fragment key={item.title}>
							<Divider>{item.title}</Divider>
							<Timeline>
								{item.details.map(item => (
									<Timeline.Item color={item.color} key={item.title}>
										<React.Fragment>
											<span>
												{item.title} - {item.extra}
											</span>

											<Progress
												percent={item.percent}
												status={item.status}
												strokeColor={item.color}
											/>
										</React.Fragment>
									</Timeline.Item>
								))}
							</Timeline>
						</React.Fragment>
					))}
				</Card>
			</div>
		)
	}
}

export default SiderComponent
