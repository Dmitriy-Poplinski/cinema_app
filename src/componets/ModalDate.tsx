import { Modal, Button } from 'react-bootstrap'

import { DatePicker } from './DatePicker'

interface ModalDateProps {
    show: boolean,
    handleClose(): void
}

export const ModalDate: React.FunctionComponent<ModalDateProps>  = ({show, handleClose}) => (
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
