import React, { Fragment } from "react";
import { Form, Row, Col, Input } from 'antd'
import Header from "../../../components/Header/Header";
import { Box, Button } from "@mui/material";
import { useForm } from 'antd/lib/form/Form'

export default function UserForm() {
  const [form] = useForm()

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
              title="Formulário do usuário"
              subtitle="Insira os dados a seguir para criar um usuário"
            />
            <Row gutter={[10, 10]}>
              <Col span={8}>
                <Form.Item
                  label="Nome"
                  name="name"
                >
                  <Input placeholder="Digite o nome" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="Email"
                  name="email"
                >
                  <Input placeholder="Digite o email" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="Senha"
                  name="password"
                >
                  <Input placeholder="Digite a senha" />
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