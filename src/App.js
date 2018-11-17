import React, { Component } from 'react'
import { Layout, Row, Col } from 'antd'

import SiderComponent from './components/Sider/SiderComponent'
import About from './components/About'
import './App.css'
const { Header, Content, Footer, Sider } = Layout

class App extends Component {
	render() {
		return (
			<div className='App'>
				<div>
					<Row>
						<Col span={6}>
							<SiderComponent />
						</Col>

						<Col span={18}>
							<About />
							<Content>
								<div>content</div>
							</Content>
							<Footer style={{ textAlign: 'center' }}>
								Ant Design ©2018 Created by Ant UED
							</Footer>
						</Col>
					</Row>
				</div>
			</div>
		)
	}
}

export default App
