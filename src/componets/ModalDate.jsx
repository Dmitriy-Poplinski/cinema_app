import { Modal, Button, FloatingLabel, Form } from 'react-bootstrap'

export const ModalDate = (props) => (
    <>
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Підберіть дату</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <FloatingLabel controlId="floatingSelect" label="Works with selects">
                    <Form.Select aria-label="Floating label select example">
                        <option>Оберіть доступну дату</option>
                        <option value="24.08.2021">24.08.2021</option>
                        <option value="25.08.2021">25.08.2021</option>
                        <option value="26.08.2021">26.08.2021</option>
                        <option value="27.08.2021">27.08.2021</option>
                        <option value="28.08.2021">28.08.2021</option>
                        <option value="29.08.2021">29.08.2021</option>
                    </Form.Select>
                </FloatingLabel>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Закрити 
                </Button>
                <Button variant="primary" onClick={props.handleClose}>
                    Пітвердити
                </Button>
            </Modal.Footer>
        </Modal>
    </>
)
