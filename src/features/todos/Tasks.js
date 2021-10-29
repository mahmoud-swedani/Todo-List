import { useState } from "react";
import { useDispatch } from "react-redux";
import { Modal, Button, Col, Row, Layout } from "antd";
import { remove, cansleAction, complateAction } from "./todoSlice";
import EditForm from "./EditForm";
import {
  EditFilled,
  DeleteFilled,
  CheckCircleFilled,
  CloseCircleFilled,
} from "@ant-design/icons";

const Task = (props) => {
  const dispatch = useDispatch();
  const { task, index } = props;
  const [cansle] = useState(true);
  const [complate] = useState(true);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  // start Aspd fuction to fix style by conditio
  const Aspd = () => {
    if (task.cansle || task.complate) {
      return (
        <>
          <Button
            style={{ backgroundColor: "white", border: "none" }}
            onClick={() => dispatch(remove(index))}
            type="primary"
            shape="circle"
            danger
            icon={<DeleteFilled style={{ color: "#EB3737" }} />}
          />
        </>
      );
    } else {
      return (
        <>
          <Button
            style={{ backgroundColor: "#EB3737", border: "none" }}
            onClick={() => dispatch(remove(index))}
            type="primary"
            shape="circle"
            danger
            icon={<DeleteFilled style={{ color: "white" }} />}
          />
          <Button
            style={{
              backgroundColor: "#4292D8",
              width: "30px",
              height: "30px",
              border: "none",
            }}
            onClick={handleShow}
            type="primary"
            shape="circle"
            icon={<EditFilled style={{ color: "white" }} />}
          />
          <Button
            style={{ backgroundColor: "white", border: "none" }}
            name="cansel"
            onClick={(e) => dispatch(cansleAction({ index, cansle }))}
            type="primary"
            shape="circle"
            icon={
              <CloseCircleFilled
                style={{ fontSize: "30px", color: "#EB3737" }}
              />
            }
          />

          <Button
            style={{ backgroundColor: "white", border: "none" }}
            name="complate"
            onClick={() => dispatch(complateAction({ index, complate }))}
            type="primary"
            shape="circle"
            icon={
              <CheckCircleFilled
                style={{ fontSize: "30px", color: "#1de90f" }}
              />
            }
          />
        </>
      );
    }
  };
  // end Aspd fuction to fix style by conditio

  // return function Task
  return (
    <>
      <Layout className="site-layout">
        <Row>
          <Col span={16}>
            <Row>
              <Col span={24}>
                <span className="span-date">{task.createdDate}</span>
              </Col>
              <Col span={24}>
                <span className="span-name">{task.task}</span>
              </Col>
            </Row>
          </Col>
          <Col span={8}>
            <div className="group-action">
              <Aspd />
            </div>
          </Col>
        </Row>
      </Layout>

      <Modal centered visible={show} width={500}>
        <EditForm
          theTask={task}
          handleCloseEdit={handleClose}
          index={index}
          show={show}
        />
      </Modal>
    </>
  );
};

export default Task;
