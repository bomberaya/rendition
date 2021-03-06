import * as React from 'react'
import { storiesOf } from '@storybook/react'
import withReadme from 'storybook-readme/with-readme'
import { Fixed, Provider } from '../'
import * as Readme from './README/Fixed.md'

storiesOf('Core/Fixed', module)
  .addDecorator(withReadme(Readme))
  .add('Standard', () => {
    return (
      <Provider>
        <Fixed bg='red' top left bottom right />
      </Provider>
    )
  })
