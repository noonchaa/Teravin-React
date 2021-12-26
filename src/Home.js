import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import { Link } from "react-router-dom";
import eye from './eye.svg'

const Home = () => {
    const [data, setData] = useState(null)

    useEffect(()=>{
      Storage.prototype.getObj = function(key) {
        return JSON.parse(this.getItem(key))
      }
      setData(localStorage.getObj('data'))
  
      return () => {
        setData(null)
      }
    },[])

    return(
        <>
        <h1 className='py-5'>Teravin test React.js</h1>
        <Link to='/add'>
            <Button variant="outline-dark" className="mb-5">+ Add Data</Button>
        </Link>
        <Table bordered hover>
            <thead className='bg-secondary bg-opacity-25'>
            <tr>
                <th>ID No.</th>
                <th>Nama</th>
                <th colSpan={2}>Alamat</th>
            </tr>
            </thead>
            <tbody>
            {data == null ? 
            <tr>
                <td colSpan={4}>Belum ada data</td>
            </tr>:
            data.map((isi)=>(
                <tr key={isi.id}>
                <td>{isi.id}</td>
                <td>{isi.nama}</td>
                <td>{isi.alamat}</td>
                <td className='d-flex justify-content-center'>
                    <Link to={`detail/${isi.id}`}>
                    <Button variant='outline-dark' className='px-2 py-1'>
                    <img src={eye} alt='Detail' width={24} height={24}/>
                    </Button>
                    </Link>
                </td>
                </tr>
            ))}
            </tbody>
        </Table>
        </>
    )
}

export default Home