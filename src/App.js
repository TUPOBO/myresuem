import React, { Component } from 'react'
import { Layout, Row, Col } from 'antd'

import './App.css'
import SiderComponent from './components/Sider/SiderComponent'
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
							<Layout>
								<Header />
								<Content style={{ margin: '24px 16px 0' }}>
									<div
										style={{ padding: 24, background: '#fff', minHeight: 360 }}
									>
										content
									</div>
								</Content>
								<Footer style={{ textAlign: 'center' }}>
									Ant Design ©2018 Created by Ant UED
								</Footer>
							</Layout>
						</Col>
					</Row>
				</div>
			</div>
		)
	}
}

export default App
