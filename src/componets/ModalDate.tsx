import { Modal, Button } from 'react-bootstrap'

import { DatePicker } from './DatePicker'
import { ModalDateProps } from './../react-app-env.d'

export const ModalDate: React.FC<ModalDateProps>  = ({ show, handleClose }) => (
    <>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Підберіть дату</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <DatePicker />
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
