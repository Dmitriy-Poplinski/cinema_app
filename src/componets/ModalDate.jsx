import { Modal, Button } from 'react-bootstrap'

import { MaterialUIPickers } from './DatePicker';

export const ModalDate = ({show, handleClose}) => (
    <>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Підберіть дату</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <MaterialUIPickers />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Закрити 
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Пітвердити
                </Button>
            </Modal.Footer>
        </Modal>
    </>
)
