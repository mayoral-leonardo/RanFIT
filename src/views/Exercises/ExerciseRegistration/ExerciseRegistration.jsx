import React, { Fragment, useState } from "react"
import { useNavigate } from "react-router-dom";
import { Form, Row, Col, Select, DatePicker, Input } from 'antd'
import Header from "../../../components/Header/Header"
import { Box, Button } from "@mui/material"
import { useForm } from 'antd/lib/form/Form'
import { timeAsDayjs } from "../../../utils/functions"
import exercises from "../consumer"
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';

export default function ExerciseRegistration() {
  const [form] = useForm()
  const navigate = useNavigate()

  const [loading, setLoading] = useState()
  const [time, setTime] = useState()
  const [distance, setDistance] = useState()

  function handleFormatTime(value) {
    if (!value) return
    const formattedTime = value
      .replace(/[^\d]+/g, "")
      .replace(/(\d{2})(\d{2})/, "$1:$2")
      .substr(0, 5)
    return formattedTime
  }
  function handleFormatDistance(value) {
    if (!value) return
    const formattedDistance = value
      .replace(/[^\d]+/g, "")
      .substr(0, 5)
    return formattedDistance
  }

  async function handleSubmit(data) {
    setLoading(true)
    const { date } = data
    const formattedDate = timeAsDayjs(date).format("DD/MM/YYYY")
    const submitData = { ...data, date: formattedDate, time, distance }

    try {
      const response = await exercises.register(submitData)
      if (response.status === "OK") navigate("/exercises")
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      width="100%"
      padding="20px"
    >
      <Fragment>
        <Form
          form={form}
          layout='vertical'
          onFinish={values => handleSubmit(values)}
        >
          <Fragment>
            <Header
              title="Registro de exercício"
              subtitle="Insira os dados a seguir para registrar seu exercício"
            />
            <Row gutter={[10, 10]}>
              <Col xs={24} md={6}>
                <Form.Item
                  label="Tipo de exercício"
                  name="type"
                >
                  <Select
                    placeholder="Selecione o tipo de exercício"
                    options={[
                      { label: "Bicicleta", value: "bicycle" },
                      { label: "Esteira", value: "treadmill" }
                    ]}
                  />
                </Form.Item>
              </Col>
              <Col xs={24} md={6}>
                <Form.Item
                  label="Data do exercício"
                  name="date"
                >
                  <DatePicker
                    style={{ width: "100%" }}
                    placeholder="Selecione a data do exercício"
                  />
                </Form.Item>
              </Col>
              <Col xs={24} md={6}>
                <label>Duração</label>
                <Input style={{ marginTop: "7px" }} placeholder="Digite a duração" onChange={(value) => setTime(handleFormatTime(value.target.value))} value={time} />
              </Col>
              <Col xs={24} md={6}>
                <label>Distância (metros)</label>
                <Input style={{ marginTop: "7px" }} placeholder="Digite a distância em metros" onChange={(value) => setDistance(handleFormatDistance(value.target.value))} value={distance} />
              </Col>
            </Row>
            <Button
              type="primary"
              variant="contained"
              onClick={() => form.submit()}
              disabled={loading}
            >
              Criar
            </Button>
          </Fragment>
        </Form>
      </Fragment>
    </Box>
  )
}