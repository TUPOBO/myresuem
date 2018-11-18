import React, { Component } from 'react'
import { Card } from 'antd'
import { info } from './info'
import Texty from 'rc-texty'

const gridStyle = {
	width: '50%',
	maxHeight: 65
}
class About extends Component {
	render() {
		return (
			<React.Fragment>
				<Card title='个人简介' hoverable>
					{info.map(item => (
						<Card.Grid style={gridStyle} key={item}>
							<Texty type='flash'>{item}</Texty>
						</Card.Grid>
					))}
					<Card.Grid style={{ width: '100%' }}>
						<Texty type='swing-y' mode='smooth'>
							自我评价：
						</Texty>
						<Texty type='swing-y' mode='smooth' style={{ textIndent: '2rem' }}>
							Udacity前端纳米学位在线助教，熟练掌握各项前端开发技能。
							具有良好的沟通能力，高度的责任感，较强的自学能力和良好的英语阅读能力。
						</Texty>
						<Texty type='swing-y' mode='smooth' style={{ textIndent: '2rem' }}>
							脱产一年学习前端开发，通过Udacity课程建立知识体系，利用慕课网实战课程加强业务逻辑，使用FrontMaster的课程夯实理论基础。
						</Texty>
					</Card.Grid>
				</Card>
			</React.Fragment>
		)
	}
}

export default About
