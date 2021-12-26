import ProgressBar from 'react-bootstrap/ProgressBar'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Add = () => {
    const navig = useNavigate()
    const [data, setData] = useState(null)
    const uniqueId = JSON.stringify(new Date().getFullYear()).substring(2) + JSON.stringify(new Date().getMonth()) + (data==null?'0':JSON.stringify(data.length))

    useEffect(()=>{
        Storage.prototype.getObj = function(key) {
            return JSON.parse(this.getItem(key))
        }
        setData(localStorage.getObj('data'))
        return () => {
            setData(null)
        }
    },[])

    Storage.prototype.setObj = function(key, obj) {
        return this.setItem(key, JSON.stringify(obj))
    }

    const FormHandle = (e) => {
        e.preventDefault()
        const save = data == null ? [{
            'id': uniqueId,
            'nama': e.target.nama.value,
            'call': e.target.call.value,
            'tempat': e.target.tempat.value,
            'tanggal': e.target.tanggal.value,
            'agama': e.target.agama.value,
            'tel': e.target.tel.value,
            'alamat': e.target.alamat.value
        }] : 
        data.concat({
            'id': uniqueId,
            'nama': e.target.nama.value,
            'call': e.target.call.value,
            'tempat': e.target.tempat.value,
            'tanggal': e.target.tanggal.value,
            'agama': e.target.agama.value,
            'tel': e.target.tel.value,
            'alamat': e.target.alamat.value
        })
        localStorage.setObj('data', save)
        navig(`/add/edu/${uniqueId}`)
    }

    return (
        <>
            <h1 className='h2 py-5'>Form Submission</h1>
            <ProgressBar now={25} label={'25%'}/>
            <p className='my-3 fs-5 fw-bold'>Data Personal</p>
            <Form onSubmit={FormHandle}>
                <Row className='bg-secondary bg-opacity-25 p-2'>
                    <Col sm={12} md={6} className='mt-2'>
                        <Form.Group>
                            <Form.Label>Nama Lengkap</Form.Label>
                            <Form.Control type='text' required id='nama'/>
                        </Form.Group>
                    </Col>
                    <Col sm={12} md={6} className='mt-2'>
                        <Form.Group>
                            <Form.Label>Nama Panggilan</Form.Label>
                            <Form.Control type='text' required id='call' />
                        </Form.Group>
                    </Col>
                    <Col sm={12} md={6} className='mt-2'>
                        <Form.Group>
                            <Form.Label>Tempat Lahir</Form.Label>
                            <Form.Control type='text' required id='tempat' />
                        </Form.Group>
                    </Col>
                    <Col sm={12} md={6} className='mt-2'>
                        <Form.Group>
                            <Form.Label>Tanggal Lahir</Form.Label>
                            <Form.Control type='date' required max={Date()}  id='tanggal'/>
                        </Form.Group>
                    </Col>
                    <Col sm={12} md={6} className='mt-2'>
                        <Form.Group>
                            <Form.Label>Agama</Form.Label>
                            <Form.Control type='text' required  id='agama'/>
                        </Form.Group>
                    </Col>
                    <Col sm={12} md={6} className='mt-2'>
                        <Form.Group>
                            <Form.Label>Telepon</Form.Label>
                            <Form.Control type='number' required  id='tel'/>
                        </Form.Group>
                    </Col>
                    <Col className='my-2'>
                        <Form.Group>
                            <Form.Label>Alamat</Form.Label>
                            <Form.Control as="textarea" required  id='alamat'/>
                        </Form.Group>
                    </Col>
                </Row>
                <div className='d-flex justify-content-end py-3'>
                    <Button variant='outline-dark' className='px-5' type='submit'>Next</Button>
                </div>
            </Form>
        </>
    )
}
export default Add