import { useEffect, useState } from "react"
import Col from "react-bootstrap/esm/Col"
import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"
import { useParams } from "react-router-dom"

const Detail = () => {
    let param = useParams()
    const [data, setData] = useState([])

    useEffect(()=>{
        Storage.prototype.getObj = function(key) {
            return JSON.parse(this.getItem(key))
        }
        setData(localStorage.getObj('data'))
        return () => {
            setData([])
        }
    },[])
    console.log(data)

    return(
        <>
        <h1 className='h2 py-5'>Detail Data</h1>
        {data.filter(item=>item.id===param.uniqueId).map((item)=>(
            <Container key={item.id} className="pb-5">
                <Row>
                    <Col xs={12} md={6} className="border border-dark">
                    <p className='my-3 fs-5 fw-bold'>Data Personal</p>
                        <Row>
                            <Col xs={4} className="border-end border-top border-dark pt-2">
                                <p>Nama Lengkap</p>
                            </Col>
                            <Col xs={8} className="pt-2 border-top border-dark">
                                <p>{item.nama}</p>
                            </Col>
                            <Col xs={4} className="border-end border-top border-dark pt-2">
                                <p>Nama Panggilan</p>
                            </Col>
                            <Col xs={8} className="pt-2 border-top border-dark">
                                <p>{item.call}</p>
                            </Col>
                            <Col xs={4} className="border-end border-top border-dark pt-2">
                                <p>Tempat Lahir</p>
                            </Col>
                            <Col xs={8} className="pt-2 border-top border-dark">
                                <p>{item.tempat}</p>
                            </Col>
                            <Col xs={4} className="border-end border-top border-dark pt-2">
                                <p>Tanggal Lahir</p>
                            </Col>
                            <Col xs={8} className="pt-2 border-top border-dark">
                                <p>{item.tanggal}</p>
                            </Col>
                            <Col xs={4} className="border-end border-top border-dark pt-2">
                                <p>Agama</p>
                            </Col>
                            <Col xs={8} className="pt-2 border-top border-dark">
                                <p>{item.agama}</p>
                            </Col>
                            <Col xs={4} className="border-end border-top border-dark pt-2">
                                <p>Telepon</p>
                            </Col>
                            <Col xs={8} className="pt-2 border-top border-dark">
                                <p>{item.tel}</p>
                            </Col>
                            <Col xs={4} className="border-end border-top border-bottom border-dark pt-2">
                                <p>Alamat</p>
                            </Col>
                            <Col xs={8} className="pt-2 border-top border-bottom border-dark">
                                <p>{item.alamat}</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} md={6} className="border border-dark">
                    <p className='my-3 fs-5 fw-bold'>Riwayat Pendidikan</p>
                        {item.sekolah.filter(item=>item.nama!=='').map((sek,index)=>(
                            <Row key={index}>
                                <Col xs={4} className="border-end border-top border-dark pt-2">
                                    <p>Nama Sekolah</p>
                                </Col>
                                <Col xs={8} className="pt-2 border-top border-dark">
                                    <p>{sek.nama}</p>
                                </Col>
                                <Col xs={4} className="border-end border-top border-dark pt-2">
                                    <p>Kota</p>
                                </Col>
                                <Col xs={8} className="pt-2 border-top border-dark">
                                    <p>{sek.kota}</p>
                                </Col>
                                <Col xs={4} className="border-end border-top border-bottom border-dark pt-2">
                                    <p>Lulus</p>
                                </Col>
                                <Col xs={8} className="pt-2 border-top border-bottom border-dark">
                                    <p>{sek.lulus}</p>
                                </Col>
                            </Row>
                        ))}
                    </Col>
                    <Col xs={12} md={6} className="border border-dark">
                        <p className='my-3 fs-5 fw-bold'>Pengalaman Kerja</p>
                        {item.work.filter(item=>item.nama!=='').map((sek,index)=>(
                            <Row key={index}>
                                <Col xs={4} className="border-end border-top border-dark pt-2">
                                    <p>Nama Perusahaan</p>
                                </Col>
                                <Col xs={8} className="pt-2 border-top border-dark">
                                    <p>{sek.nama}</p>
                                </Col>
                                <Col xs={4} className="border-end border-top border-dark pt-2">
                                    <p>Jabatan</p>
                                </Col>
                                <Col xs={8} className="pt-2 border-top border-dark">
                                    <p>{sek.jabatan}</p>
                                </Col>
                                <Col xs={4} className="border-end border-top border-bottom border-dark pt-2">
                                    <p>Lama Bekerja</p>
                                </Col>
                                <Col xs={8} className="pt-2 border-top border-bottom border-dark">
                                    <p>{sek.durasi}</p>
                                </Col>
                            </Row>
                        ))}
                    </Col>
                    <Col xs={12} md={6} className="border border-dark">
                        <p className='my-3 fs-5 fw-bold'>Skill</p>
                        {item.skill.filter(item=>item.nama!=='').map((sek,index)=>(
                            <Row key={index}>
                                <Col xs={4} className="border-end border-top border-dark pt-2">
                                    <p>Nama Skill</p>
                                </Col>
                                <Col xs={8} className="pt-2 border-top border-dark">
                                    <p>{sek.nama}</p>
                                </Col>
                                <Col xs={4} className="border-end border-top border-bottom border-dark pt-2">
                                    <p>Tingkat Kemahiran</p>
                                </Col>
                                <Col xs={8} className="pt-2 border-top border-bottom border-dark">
                                    <p>{sek.level}</p>
                                </Col>
                            </Row>
                        ))}
                    </Col>
                </Row>
            </Container>
        ))}
        </>
    )
}
export default Detail