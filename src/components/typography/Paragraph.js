import React from 'react'
import { Text } from 'rebass'

export const Paragraph = ({ ...props }) => (
  <Text as="p" lineHeight="body" {...props} />
)
