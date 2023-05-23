import React, { Fragment, useState } from "react"
import { Form, Row, Col, Select, DatePicker } from 'antd'
import Header from "../../../components/Header/Header"
import { Box, Button } from "@mui/material"
import { useForm } from 'antd/lib/form/Form'
import TimePicker from 'react-time-picker'
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';

export default function ExerciseRegistration() {
  const [form] = useForm()
  const [time, setTime] = useState("00:00")

  function handleSubmit(data) {
    console.log(data)
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
              <Col xs={24} md={8}>
                <Form.Item
                  label="Tipo de exercício"
                  name="exerciseType"
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
              <Col xs={24} md={8}>
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
              <Col xs={24} md={8}>
                <Form.Item
                  label="Duração do exercício"
                  name="duration"
                >
                    <TimePicker
                      className="w-100"
                      onChange={setTime}
                      value={time}
                      disableClock
                      minTime="00:00"
                      maxTime="05:00"
                      format="hh:mm"
                    />
                </Form.Item>
              </Col>
            </Row>
            <Button
              type="primary"
              variant="contained"
              onClick={() => form.submit()}
            >
              Criar
            </Button>
          </Fragment>
        </Form>
      </Fragment>
    </Box>
  )
}