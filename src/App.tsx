
import { Layout, Menu, theme } from "antd"
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/home/home"
import page404 from "./pages/404/404"
import Sidebar from './components/layout/sidebar';

const { Content } = Layout;

const App: React.FC = () => {

  const {
    token: { colorBgContainer },
  } = theme.useToken();


  return (<Layout >
    <Sidebar />
    <Layout>
      {
        // optional header
        // <Header></Header>
      }
      <Content
        style={{
          margin: '24px 16px',
          padding: 24,
          minHeight: 400,
          background: colorBgContainer,
        }}
      >
        <Routes>
          {/* <Route path="/" Component={Home}></Route> */}

          <Route path="*" Component={Home}></Route>
        </Routes>

      </Content>
      {
        // optional header
        // <Footer><Footer />
      }


    </Layout>

  </Layout>

  )
}


export default App;
