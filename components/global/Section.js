import React from 'react'
import { Box } from 'rebass'

export const Section = ({ p = 5, as = 'section', children, ...props }) => (
  <Box as={as} p={p} {...props}>
    <Box variant="containers.base">{children}</Box>
  </Box>
)
