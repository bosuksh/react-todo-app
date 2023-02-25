import React from "react";
import "./Template.css"

const Template = ({children, todoLength}) => {
    return (
        <div className="Template">
            <div className="title">오늘의 할 일 ({todoLength})</div>
            <div>{children}</div>
            <div>여기는 할 일 목록이 들어갑니다.</div>
        </div>
    )
}

export default Template;