import { Form, Input, Button, Row, Col } from "antd";
import { useDispatch } from "react-redux";
import { useState, useRef, useEffect } from "react";
import { patch } from "./todoSlice";

const EditForm = ({ theTask, handleCloseEdit, index, show }) => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  useEffect(() => {
    if (show) {
      inputRef.current.focus();
    }
  }, [show]);
  const [task, setTask] = useState(theTask.task);
  const updatep = { index, task };
  const onFinish = () => {
    dispatch(patch(updatep));
    handleCloseEdit();
  };
  const onInputChange = (e) => {
    setTask(e.target.value);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
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
            style={{
              fontSize: "12px",
              padding: "5px",
              width: "100%",
              backgroundColor: "#F3F3F3",
              borderRadius: "10px",
            }}
            name="addTask"
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
            <Col xs={{ span: 10 }} sm={{ span: 11 }} className="add-task-modal">
              <Button
                style={{
                  fontSize: "12px",
                  backgroundColor: "#FDE5E5",
                  color: "#FF6C6C",
                  borderRadius: "10px",
                }}
                onClick={() => handleCloseEdit()}
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
  );
};

export default EditForm;
