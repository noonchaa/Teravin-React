import { useEffect, useState } from "react"
import ProgressBar from "react-bootstrap/esm/ProgressBar"
import { useParams } from "react-router-dom"
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'

const More = ({num}) => {
    return(
        <Col xs={12} md={6} className='mt-2'>
        <div className="bg-light p-3">
            <Form.Group>
                <Form.Label>Nama Perusahaan</Form.Label>
                <Form.Control type='text' required={num < 1 ? true : false} id={`per${num}`}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Jabatan</Form.Label>
                <Form.Control type='text' required={num < 1 ? true : false} id={`jab${num}`}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Lama Bekerja</Form.Label>
                <Form.Control type='text' required={num < 1 ? true : false} id={`dur${num}`}/>
            </Form.Group>
            </div>
        </Col>
    )
}

const Expe = () => {
    let param = useParams()
    const [data, setData] = useState([])
    const [num, setNum] = useState([0])
    const navig = useNavigate()

    useEffect(()=>{
        Storage.prototype.getObj = function(key) {
            return JSON.parse(this.getItem(key))
        }
        setData(localStorage.getObj('data'))
        return () => {
            setData([])
        }
    },[])

    Storage.prototype.setObj = function(key, obj) {
        return this.setItem(key, JSON.stringify(obj))
    }

    const formHandle = (event) => {
        event.preventDefault()
        const form = data.filter((isi)=>isi.id === param.uniqueId)
        const work = [
            {
                nama : event.target.per0.value,
                jabatan : event.target.jab0.value,
                durasi : event.target.dur0.value
            },
            {
                nama : num.length > 1 ? event.target.per1.value : '',
                jabatan : num.length > 1 ? event.target.jab1.value : '',
                durasi : num.length > 1 ? event.target.dur1.value : ''
            },
            {
                nama : num.length > 2 ? event.target.per2.value : '',
                jabatan : num.length > 2 ? event.target.jab2.value : '',
                durasi : num.length > 2 ? event.target.dur2.value : ''
            },
            {
                nama : num.length > 3 ? event.target.per3.value : '',
                jabatan : num.length > 3 ? event.target.jab3.value : '',
                durasi : num.length > 3 ? event.target.dur3.value : ''
            },
            {
                nama : num.length > 4 ? event.target.per4.value : '',
                jabatan : num.length > 4 ? event.target.jab4.value : '',
                durasi : num.length > 4 ? event.target.dur4.value : ''
            },
        ]
        form[0].work = work
        localStorage.setObj('data',data)
        navig(`/add/skill/${param.uniqueId}`)
    }

    return(
        <>
            <h1 className='h2 py-5'>Form Submission</h1>
            <ProgressBar now={75} label={'75%'}/>
            <p className='my-3 fs-5 fw-bold'>Pengalaman Kerja</p>
            <Form onSubmit={formHandle}>
                <Row className='bg-secondary bg-opacity-25 p-2'>
                    {num.map((index,isi)=>(
                        <More num={isi} key={index}/>
                    ))}
                    <Col xs={12} md={6} className='mt-2'>
                        <Button variant="light" className="p-5 w-100" onClick={()=>setNum(num.concat([num.length]))}>
                            <h1>+</h1>
                            <p>Add pengalaman kerja</p>
                        </Button>
                    </Col>
                </Row>
                <div className='d-flex justify-content-end py-3'>
                    <Button variant='outline-dark' className='px-5' type='submit'>Next</Button>
                </div>
            </Form>
        </>
    )
}
export default Expe