import React, { useState } from 'react';
import { Button, MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { AiFillAccountBook, AiFillAlert, AiFillAlipayCircle, AiFillAliwangwang, AiFillAmazonCircle, AiFillAndroid, AiFillApi } from "react-icons/ai";

const { Header, Content, Sider } = Layout;

const items1: MenuProps['items'] = ['1', '2', '3', '4'].map((key) => ({
    key,
    label: `nav ${key}`,
}));

const items2: MenuProps['items'] = [AiFillAccountBook, AiFillAlert, AiFillAlipayCircle, AiFillAliwangwang, AiFillAmazonCircle].map(
    (icon, index) => {
        const key = String(index + 1);

        return {
            key: `sub${key}`,
            icon: React.createElement(icon),
            label: `subnav ${key}`,

            children: new Array(5).fill(null).map((_, j) => {
                const subKey = index * 4 + j + 1;
                return {
                    key: subKey,
                    label: `option${subKey}`,
                };
            }),
        };
    },
);

const Main: React.FC = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Layout>
            <Header className="header">
                <div className="logo" />
                <Button
                    type="text"
                    icon={collapsed ? <AiFillAndroid /> : <AiFillApi />}
                    onClick={() => setCollapsed(!collapsed)}
                    style={{
                        fontSize: '16px',
                        width: 64,
                        height: 64,
                    }}
                />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[]} items={items1} />
            </Header>
            <Layout>
                <Sider trigger={null} collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} collapsible width={200} style={{ background: colorBgContainer }}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={[]}
                        defaultOpenKeys={[]}
                        style={{ height: '100%', borderRight: 0 }}
                        items={items2}
                    />
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                            background: colorBgContainer,
                        }}
                    >
                        Content
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
};

export default Main;