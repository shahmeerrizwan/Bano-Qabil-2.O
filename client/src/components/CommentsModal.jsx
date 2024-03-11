import { Button, Modal } from 'antd'
import useFetch from '../hooks/useFetch'

const CommentsModal = ({ isModalOpen, onCloseModal, postId }) => {
    const { isLoading, error, data } = useFetch(`http://localhost:3000/comments${postId ? `?postId=${postId}` : ""}`);
    console.log({ isLoading, error, data });
    return (
        <Modal centered={true} mask={false} title="Posts comments" width={"100vw"}
            // footer={[
            //     <Button key="back" onClick={onCloseModal}>
            //         Return
            //     </Button>,
            //     // <Button key="submit" type="primary" loading={isloa} onClick={handleOk}>
            //     //     Submit
            //     // </Button>,
            //     <Button
            //         key="link"
            //         href="https://google.com"
            //         type="primary"
            //         // loading={loading}
            //         onClick={onCloseModal}
            //     >
            //         Search on Google
            //     </Button>,
            // ]}
            open={isModalOpen} onOk={onCloseModal} onCancel={onCloseModal}>
            {/* <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p> */}

            <pre>
                {JSON.stringify(data, undefined, 4)}
            </pre>
        </Modal>
    )
}

export default CommentsModal