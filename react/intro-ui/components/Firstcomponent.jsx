import { CommentOutlined, CustomerServiceOutlined } from "@ant-design/icons";
import { FloatButton, Switch } from "antd";
import React, { useState } from "react";

export default function Firstcomponent() {
    const [open, setOpen] = useState(true);
    return (
        <>
            <Switch onChange={setOpen} checked={open} style={{ margin: 16 }} />
            <FloatButton.Group
                open={open}
                trigger="click"
                style={{ insetInlineEnd: 24 }}
                icon={<CustomerServiceOutlined />}
            >
                <FloatButton />
                <FloatButton />
                <FloatButton icon={<CommentOutlined />} />
            </FloatButton.Group>
            <FloatButton.Group
                open={open}
                shape="square"
                trigger="click"
                style={{ insetInlineEnd: 88 }}
                icon={<CustomerServiceOutlined />}
            >
                <FloatButton />
                <FloatButton />
                <FloatButton icon={<CommentOutlined />} />
            </FloatButton.Group>
        </>
    );
}
