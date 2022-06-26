import './App.css';
import {Routes,Router,Route,Link} from "react-router-dom";
import {Layout,Typography,Space} from 'antd';
import {Navbar,Homepage,Exchanges,News,Cryptocurrencies,CryptoDetails} from './Components';
function App() {
  return (
    <div className="App">
    <div className="navbar">
    <Navbar/>
    </div>
    
    <div className="main">
    <Layout>
      <div className="routes">
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/cryptocurrencies" element={<Cryptocurrencies />} />
          <Route exact path="/Crypto/:coinId" element={<CryptoDetails />} />
          <Route exact path="/news" element={<News />} />
        </Routes>
      </div>
    </Layout>
    
    <div className="footer">
    <Typography.Title level={5} style={{color:'white',textAlign:'center'}}>
      Cryptonia <br />
      All rights reserved
    </Typography.Title>
    <Space>
      <Link to="/">Home</Link>
      <Link to="/news">News</Link>
    </Space>
    </div>
    </div>
    </div>
  );
}

export default App;
