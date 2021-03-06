import React, { Component } from 'react'
import { Layout, Row, Col, BackTop } from 'antd'

import SiderComponent from './components/Sider/SiderComponent'
import About from './components/About'
import Projects from './components/Projects'
import './App.css'
const { Content } = Layout

class App extends Component {
	render() {
		return (
			<div className='App'>
				<BackTop />
				<div>
					<Row>
						<Col span={6}>
							<SiderComponent />
						</Col>

						<Col span={18}>
							<About />
							<Content>
								<Projects />
							</Content>
						</Col>
					</Row>
				</div>
			</div>
		)
	}
}

export default App
