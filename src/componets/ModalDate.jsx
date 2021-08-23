import { Modal, Button } from 'react-bootstrap'
import { MaterialUIPickers } from './DatePicker';

export const ModalDate = (props) => (
    <>
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Підберіть дату</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <MaterialUIPickers />
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
