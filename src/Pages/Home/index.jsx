import React from 'react'
import './index.css'
import { Layout} from 'antd';
import Head from '../../component/Head';
import Side from '../../component/Side';
import Player from '../../component/Player';
const { Header, Footer } = Layout;
export default function Home() {
  return (
    <Layout style={{height:'100%'}}>
      <Header className='header'>
        <Head></Head>
      </Header>
        <Side></Side>
      <Footer style={{borderTop:'1px solid #e1e1e1',backgroundColor:'#ffffff'}}>
        <Player></Player>
      </Footer>
    </Layout>
  )
}
