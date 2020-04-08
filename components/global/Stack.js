import React, { Children } from 'react'
import { Flex } from 'rebass'

export const Stack = ({ spacing = 4, splitAfter, children, ...props }) => {
  const stackItems = Children.toArray(children)

  return (
    <Flex flexDirection="column" {...props}>
      {stackItems.map((child, index) => {
        let mt = spacing

        if (index === 0) mt = 0
        if (index === splitAfter) mt = 'auto'
        return React.cloneElement(child, { mt })
      })}
    </Flex>
  )
}
