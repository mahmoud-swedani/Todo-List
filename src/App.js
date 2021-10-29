import React, { useState, useRef, useEffect } from "react";
import { Modal, Button, Row, Col, Form, Input } from "antd";
import { PlusCircleFilled } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import moment from "moment";
import { add } from "./features/todos/todoSlice";
import Todos from "./features/todos/Todos";
import { v4 as uuidv4 } from "uuid";
import "./App.less";

function App() {
  const dispatch = useDispatch();
  const [task, setTask] = useState("");
  const [show, setShow] = useState(false);
  const inputRef = useRef(null);
  const handleShow = () => setShow(true);
  useEffect(() => {
    if (show) {
      inputRef.current.focus();
    }
  }, [show]);
  const handleClose = () => setShow(false);
  const handleSubmit = () => {
    const payload = {
      id: uuidv4(),
      task: task,
      createdDate: moment().format("MMMM Do YYYY, h:mm a").toString(),
      eventClicked: "",
    };
    dispatch(add(payload));
  };
  const onInputChange = (e) => {
    setTask(e.target.value);
  };
  const onFinish = (values) => {
    handleSubmit();
    setTask("");
    handleClose();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="App">
      <header className="header">
        <h1>Todo List</h1>
      </header>
      <div className="app-main">
        <Row>
          <Todos />
          <Col span={24} className="add-task-modal">
            <Button
              style={{
                marginTop: "100px",
                backgroundColor: "white",
                width: "50px",
                height: "50px",
                border: "none",
              }}
              onClick={handleShow}
              type="primary"
              shape="circle"
              icon={
                <PlusCircleFilled
                  style={{
                    backgroundColor: "white",
                    fontSize: "50px",
                    color: "#1de90f",
                  }}
                />
              }
            />
          </Col>
        </Row>

        <Modal centered visible={show}>
          <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Row>
              <Col
                xs={{ span: 24 }}
                sm={{ span: 15 }}
                className="add-task-modal"
                style={{ width: "100%" }}
              >
                <Input
                  id="add-new-task"
                  style={{
                    fontSize: "12px",
                    padding: "5px",
                    width: "100%",
                    backgroundColor: "#F3F3F3",
                    borderRadius: "10px",
                  }}
                  name="addTask"
                  placeholder="Type Any Task"
                  value={task}
                  onChange={(e) => onInputChange(e)}
                  ref={inputRef}
                />
              </Col>
              <Col
                xs={{ span: 12, offset: 6 }}
                sm={{ span: 8, offset: 1 }}
                className="add-task-modal btns-modal-edit"
              >
                <Row>
                  <Col
                    xs={{ span: 10 }}
                    sm={{ span: 11 }}
                    className="add-task-modal"
                  >
                    <Button
                      style={{
                        fontSize: "12px",
                        backgroundColor: "#FDE5E5",
                        color: "#FF6C6C",
                        borderRadius: "10px",
                      }}
                      onClick={() => handleClose()}
                    >
                      Cancel
                    </Button>
                  </Col>
                  <Col
                    xs={{ span: 10, offset: 4 }}
                    sm={{ span: 11, offset: 1 }}
                    className="add-task-modal"
                  >
                    <Button
                      style={{
                        backgroundColor: "#DEF7EF",
                        color: "#61C8B6",
                        borderRadius: "10px",
                      }}
                      htmlType="submit"
                    >
                      Dane
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Form>
        </Modal>
      </div>
    </div>
  );
}

export default App;
