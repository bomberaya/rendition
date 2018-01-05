import * as React from 'react'
import { storiesOf, action } from '@storybook/react'
import styled from 'styled-components'
import { Alert } from '../'

const Container = styled.div`
  margin: 30px;
`

storiesOf('Alert', module)
  .addWithInfo('Standard', () => {
    return (
      <Container>
        <Alert my={2} success onDismiss={action('case-3')}>
          This is a success message
        </Alert>
        <Alert my={2} danger onDismiss={action('case-1')}>
          This is an alert message
        </Alert>
        <Alert my={2} warning onDismiss={action('case-2')}>
          This is an alert message
        </Alert>
        <Alert my={2} info onDismiss={action('case-4')}>
          This is a general resin announcement
        </Alert>
      </Container>
    )
  })
  .addWithInfo('Emphasized', () => {
    return (
      <Container>
        <Alert my={2} emphasized success onDismiss={action('case-3')}>
          This is a success message
        </Alert>
        <Alert my={2} emphasized danger onDismiss={action('case-1')}>
          This is an alert message
        </Alert>
        <Alert my={2} emphasized warning onDismiss={action('case-2')}>
          This is an alert message
        </Alert>
        <Alert my={2} emphasized info onDismiss={action('case-4')}>
          This is a general resin announcement
        </Alert>
      </Container>
    )
  })
  .addWithInfo('Plaintext', () => {
    return (
      <Container>
        <Alert my={2} plaintext success>
          It's a success
        </Alert>
        <Alert my={2} plaintext info>
          General text goes here
        </Alert>
        <Alert my={2} plaintext danger>
          There was an error
        </Alert>
        <Alert my={2} plaintext warning>
          Warning text
        </Alert>
      </Container>
    )
  })
