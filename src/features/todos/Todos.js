import React from "react";
import { useSelector } from "react-redux";
import { selectTodos } from "./todoSlice";
import Task from "./Tasks";
import { Col, Alert } from "antd";

export default function Todos() {
  const todos = useSelector(selectTodos);
  if (todos.length !== 0) {
    return (
      <>
        {todos.map((task, index) =>
          task.complate ? (
            <Col className="new-item-created complate" span={24} key={task.id}>
              <Task task={task} index={index} />
            </Col>
          ) : task.cansle ? (
            <Col className="new-item-created cansle" span={24} key={task.id}>
              <Task task={task} index={index} />
            </Col>
          ) : (
            <Col className="new-item-created " span={24} key={task.id}>
              <Task task={task} index={index} />
            </Col>
          )
        )}
      </>
    );
  } else {
    return (
      <>
        <div className="desc-empty-todos">
          <Alert
            message=" Notes"
            description=" Click On Icon Plus To Create New Task"
            type="info"
            showIcon
          />
        </div>
      </>
    );
  }
}
