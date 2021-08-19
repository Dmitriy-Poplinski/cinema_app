import { useState } from 'react'
import { Modal, Button, FloatingLabel, Form } from 'react-bootstrap'
import moment from 'moment'

export function ModalDate (props) {

    return (
        <>
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input type='date'/>
                    {/* <FloatingLabel controlId="floatingSelect" label="Works with selects">
                        <Form.Select aria-label="Floating label select example">
                            <option>Open this select menu</option>
                            <option value="1">{moment().format('DD:MM:YYYY')}</option>
                            <option value="2">{moment().format('DD:MM:YYYY')}</option>
                            <option value="3">{moment().format('DD:MM:YYYY')}</option>
                            <option value="3">{moment().format('DD:MM:YYYY')}</option>
                            <option value="3">{moment().format('DD:MM:YYYY')}</option>
                            <option value="3">{moment().format('DD:MM:YYYY')}</option>
                        </Form.Select>
                    </FloatingLabel> */}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={props.handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}