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
                <Form.Label>Nama Skill</Form.Label>
                <Form.Control type='text' required={num < 1 ? true : false} id={`skil${num}`}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Tingkat Kemahiran (1 - 10)</Form.Label>
                <Form.Control type='number' min={1} max={10} required={num < 1 ? true : false} id={`lev${num}`}/>
            </Form.Group>
            </div>
        </Col>
    )
}

const Skill = () => {
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
        const skill = [
            {
                nama : event.target.skil0.value,
                level : event.target.lev0.value
            },
            {
                nama : num.length > 1 ? event.target.skil1.value : '',
                level : num.length > 1 ? event.target.lev1.value : ''
            },
            {
                nama : num.length > 2 ? event.target.skil2.value : '',
                level : num.length > 2 ? event.target.lev2.value : ''
            },
            {
                nama : num.length > 3 ? event.target.skil3.value : '',
                level : num.length > 3 ? event.target.lev3.value : ''
            },
            {
                nama : num.length > 4 ? event.target.skil4.value : '',
                level : num.length > 4 ? event.target.lev4.value : ''
            },
        ]
        form[0].skill = skill
        localStorage.setObj('data',data)
        navig(`/`)
    }

    return(
        <>
            <h1 className='h2 py-5'>Form Submission</h1>
            <ProgressBar now={100} label={'100%'}/>
            <p className='my-3 fs-5 fw-bold'>Skill</p>
            <Form onSubmit={formHandle}>
                <Row className='bg-secondary bg-opacity-25 p-2'>
                    {num.map((index,isi)=>(
                        <More num={isi} key={index}/>
                    ))}
                    <Col xs={12} md={6} className='mt-2'>
                        <Button variant="light" className="py-3 w-100" onClick={()=>setNum(num.concat([num.length]))}>
                            <h1>+</h1>
                            <p>Add Skill</p>
                        </Button>
                    </Col>
                </Row>
                <div className='d-flex justify-content-end py-3'>
                    <Button variant='outline-dark' className='px-5' type='submit'>Submit</Button>
                </div>
            </Form></>
    )
}
export default Skill