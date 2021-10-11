import React, { useEffect, useState } from 'react'

import Container from '../Container'
import { Table } from 'antd'
import axios from 'axios'
import moment from 'moment'
import styled from 'styled-components'

const CovidReport = () => {
  const [dataReport, setDataReport] = useState()

  const columns = [
    {
      title: 'เคสใหม่',
      dataIndex: 'new_case',
      render: (data) => (data.toLocaleString('th-TH'))
    },
    {
      title: 'ยอดรวม',
      dataIndex: 'total_case',
      render: (data) => (data.toLocaleString('th-TH'))
    },
    {
      title: 'รักษาหายแล้ว',
      dataIndex: 'total_recovered',
      render: (data) => (data.toLocaleString('th-TH'))
    },
    {
      title: 'วันที่',
      dataIndex: 'txn_date',
      render: (data) => (moment(data).format('DD/MM/YYYY'))
    }
  ]

  useEffect(() => {
    getReportCovid()
  }, [])

  const getReportCovid = () => {
    axios.get('https://covid19.ddc.moph.go.th/api/Cases/timeline-cases-all')
      .then((response) => {
        setDataReport(response.data)
      }).catch((error) => console.log(error))
  }

  return (
    <Container>
      <BodyTable>
        <h2>Covid Report List</h2>
        <Table columns={columns} dataSource={dataReport}></Table>
      </BodyTable>
    </Container>
  )
}

export default CovidReport

const BodyTable = styled.div`
  width: 800px;
  display: flex;
  background-color: white;
  padding: 20px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 6px;
`