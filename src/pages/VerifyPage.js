import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Container, CardContent, Card } from '@material-ui/core'
import axios from 'axios'

export const VerifyPage = ({ code }) => {
  const [message, setMessage] = useState('Please Wait...')

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_ENDPOINT}/verify/${code}`)
      .then((res) => {
        setMessage(res.data.success.message)
      })
      .catch((err) => {
        setMessage(err.response.data.error.message)
      })
  })

  return (
    <Container>
      <Card>
        <CardContent>{message}</CardContent>
      </Card>
    </Container>
  )
}

VerifyPage.propTypes = {
  code: PropTypes.string,
}

export default VerifyPage
