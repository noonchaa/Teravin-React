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
                <Form.Label>Nama Sekolah</Form.Label>
                <Form.Control type='text' required={num < 1 ? true : false} id={`sko${num}`}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Kota</Form.Label>
                <Form.Control type='text' required={num < 1 ? true : false} id={`kota${num}`}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Tahun Lulus</Form.Label>
                <Form.Control type='number' required={num < 1 ? true : false} id={`lulus${num}`}/>
            </Form.Group>
            </div>
        </Col>
    )
}

const Education = () => {
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
        const scholl = [
            {
                nama : event.target.sko0.value,
                kota : event.target.kota0.value,
                lulus : event.target.lulus0.value
            },
            {
                nama : num.length > 1 ? event.target.sko1.value : '',
                kota : num.length > 1 ? event.target.kota1.value : '',
                lulus : num.length > 1 ? event.target.lulus1.value : ''
            },
            {
                nama : num.length > 2 ? event.target.sko2.value : '',
                kota : num.length > 2 ? event.target.kota2.value : '',
                lulus : num.length > 2 ? event.target.lulus2.value : ''
            },
            {
                nama : num.length > 3 ? event.target.sko3.value : '',
                kota : num.length > 3 ? event.target.kota3.value : '',
                lulus : num.length > 3 ? event.target.lulus3.value : ''
            },
            {
                nama : num.length > 4 ? event.target.sko4.value : '',
                kota : num.length > 4 ? event.target.kota4.value : '',
                lulus : num.length > 4 ? event.target.lulus4.value : ''
            },
        ]
        form[0].sekolah = scholl
        localStorage.setObj('data',data)
        navig(`/add/exp/${param.uniqueId}`)
    }

    return(
        <>
            <h1 className='h2 py-5'>Form Submission</h1>
            <ProgressBar now={50} label={'50%'}/>
            <p className='my-3 fs-5 fw-bold'>Riwayat Pendidikan</p>
            <Form onSubmit={formHandle}>
                <Row className='bg-secondary bg-opacity-25 p-2'>
                    {num.map((index,isi)=>(
                        <More num={isi} key={index}/>
                    ))}
                    <Col xs={12} md={6} className='mt-2'>
                        <Button variant="light" className="p-5 w-100" onClick={()=>setNum(num.concat([num.length]))}>
                            <h1>+</h1>
                            <p>Add riwayat pendidikan</p>
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
export default Education