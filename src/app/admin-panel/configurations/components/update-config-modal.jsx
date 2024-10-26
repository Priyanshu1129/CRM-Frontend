// import React, { useEffect, useState } from "react";
// import {
//   Modal,
//   Button,
//   Form,
//   Input,
//   Select,
//   Space,
//   Grid,
//   theme,
//   Row,
//   Col,
//   notification,
// } from "antd";
// import { useUpdateTerritory } from "@/hooks/adminPanel/configurations/territory/useUpdateTerritory";
// import { roleFormRules } from "@/utilities/formValidationRules";
// import { useUpdateIndustry } from "@/hooks/adminPanel/configurations/industry/useUpdateIndustry";
// import { useUpdateSubIndustry } from "@/hooks/adminPanel/configurations/sub-industry/useUpdateSubIndustry";
// import { useUpdateSolution } from "@/hooks/adminPanel/configurations/solution/useUpdateSolution";

// const UpdateConfigModal = ({
//   configType,
//   updateConfigData,
//   showUpdateConfigPopup,
//   setShowUpdateConfigPopup,
// }) => {
//   const [confirmLoading, setConfirmLoading] = useState(false);
//   const [modalText, setModalText] = useState("");
//   console.log("updateConfigData in Modal : ", updateConfigData);
//   var loadAndFinish;

//   switch (configType) {
//     case "territory":
//       loadAndFinish = useUpdateTerritory({
//         setShowUpdateConfigPopup,
//         updateConfigData,
//       });
//       break;
//     case "industry":
//       loadAndFinish = useUpdateIndustry({
//         setShowUpdateConfigPopup,
//         updateConfigData,
//       });
//       break;
//     case "sub-industry":
//       loadAndFinish = useUpdateSubIndustry({
//         setShowUpdateConfigPopup,
//         updateConfigData,
//       });
//       break;
//     case "solution":
//       loadAndFinish = useUpdateSolution({
//         setShowUpdateConfigPopup,
//         updateConfigData,
//       });
//       break;
//   }
//   const loading = loadAndFinish.loading;
//   const onFinish = loadAndFinish.onFinish;

//   const showModal = () => {
//     setShowUpdateConfigPopup(true);
//   };

//   const handleOk = () => {
//     setModalText("The modal will be closed after two seconds");
//     setConfirmLoading(true);
//     setTimeout(() => {
//       setShowUpdateConfigPopup(false);
//       setConfirmLoading(false);
//     }, 2000);
//   };

//   const handleCancel = () => {
//     console.log("Clicked cancel button");
//     setShowUpdateConfigPopup(false);
//   };

//   const [form] = Form.useForm();
//   const screens = Grid.useBreakpoint();

//   const {
//     token: { colorBgContainer, borderRadiusLG },
//   } = theme.useToken();
//   useEffect(() => {
//     form.setFieldsValue(updateConfigData);
//   }, [updateConfigData]);

//   return (
//     <div>
//       <Modal
//         title={configType}
//         visible={showUpdateConfigPopup}
//         onOk={handleOk}
//         confirmLoading={confirmLoading}
//         onCancel={handleCancel}
//         footer={null}
//       >
//         <p>{modalText}</p>
//         <Form
//           layout="vertical"
//           form={form}
//           onFinish={onFinish}
//           size={"default"}
//           // initialValues={{...updateConfigData}}
//         >
//           <Row gutter={24}>
//             <Col span={8}>
//               <Form.Item
//                 label="Label"
//                 name="label"
//                 rules={roleFormRules.roleName}
//               >
//                 <Input />
//               </Form.Item>
//             </Col>
//             <Col span={24}>
//               <Form.Item>
//                 <Space>
//                   <Button type="primary" htmlType="submit" loading={loading}>
//                     Submit
//                   </Button>
//                   <Button
//                     type="default"
//                     htmlType="button"
//                     onClick={() => form.resetFields()}
//                     disabled={loading}
//                   >
//                     Reset
//                   </Button>
//                 </Space>
//               </Form.Item>
//             </Col>
//           </Row>
//         </Form>
//       </Modal>
//     </div>
//   );
// };

// export default UpdateConfigModal;


import React, { useEffect, useState } from "react";
import {
  Modal,
  Button,
  Form,
  Input,
  Select,
  Space,
  Grid,
  theme,
  Row,
  Col,
} from "antd";
import { useUpdateTerritory } from "@/hooks/adminPanel/configurations/territory/useUpdateTerritory";
import { useUpdateIndustry } from "@/hooks/adminPanel/configurations/industry/useUpdateIndustry";
import { useUpdateSubIndustry } from "@/hooks/adminPanel/configurations/sub-industry/useUpdateSubIndustry";
import { useUpdateSolution } from "@/hooks/adminPanel/configurations/solution/useUpdateSolution";
import { roleFormRules } from "@/utilities/formValidationRules";

const UpdateConfigModal = ({
  configType,
  updateConfigData,
  showUpdateConfigPopup,
  setShowUpdateConfigPopup,
}) => {
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("");
  console.log("updateConfigData in Modal : ", updateConfigData);

  // Call all hooks unconditionally
  const territoryUpdate = useUpdateTerritory({ setShowUpdateConfigPopup, updateConfigData });
  const industryUpdate = useUpdateIndustry({ setShowUpdateConfigPopup, updateConfigData });
  const subIndustryUpdate = useUpdateSubIndustry({ setShowUpdateConfigPopup, updateConfigData });
  const solutionUpdate = useUpdateSolution({ setShowUpdateConfigPopup, updateConfigData });

  // Select the correct loading and onFinish based on configType
  let loading, onFinish;
  switch (configType) {
    case "territory":
      loading = territoryUpdate.loading;
      onFinish = territoryUpdate.onFinish;
      break;
    case "industry":
      loading = industryUpdate.loading;
      onFinish = industryUpdate.onFinish;
      break;
    case "sub-industry":
      loading = subIndustryUpdate.loading;
      onFinish = subIndustryUpdate.onFinish;
      break;
    case "solution":
      loading = solutionUpdate.loading;
      onFinish = solutionUpdate.onFinish;
      break;
    default:
      loading = false;
      onFinish = () => {}; // No-op function if configType is invalid
      break;
  }

  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setShowUpdateConfigPopup(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setShowUpdateConfigPopup(false);
  };

  const [form] = Form.useForm();
  const screens = Grid.useBreakpoint();

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  useEffect(() => {
    form.setFieldsValue(updateConfigData);
  }, [updateConfigData]);

  return (
    <div>
      <Modal
        title={configType}
        visible={showUpdateConfigPopup}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        footer={null}
      >
        <p>{modalText}</p>
        <Form
          layout="vertical"
          form={form}
          onFinish={onFinish}
          size={"default"}
        >
          <Row gutter={24}>
            <Col span={8}>
              <Form.Item
                label="Label"
                name="label"
                rules={roleFormRules.roleName}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item>
                <Space>
                  <Button type="primary" htmlType="submit" loading={loading}>
                    Submit
                  </Button>
                  <Button
                    type="default"
                    htmlType="button"
                    onClick={() => form.resetFields()}
                    disabled={loading}
                  >
                    Reset
                  </Button>
                </Space>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </div>
  );
};

export default UpdateConfigModal;
