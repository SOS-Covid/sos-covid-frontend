import React from 'react'
import { NavBarLayout } from '@app/components/templates'
import { CampaignsService } from '@app/services'
import { Paragraph } from '@app/components/typography'
import { Heading, Flex, Box, Text } from 'rebass'
import { Stack, Divider } from '@app/components/global'

export async function getServerSideProps(context) {
  const { campaignId } = context.params
  const campaign = await CampaignsService.findById({ campaignId })

  return {
    props: {
      campaign
    }
  }
}

const Campaign = ({ campaign }) => (
  <NavBarLayout>
    <Box bg="muted" p={4}>
      <Box
        bg="background"
        sx={{ borderRadius: 'default', overflow: 'hidden' }}
        variant="containers.base"
      >
        <Stack p={4} spacing={3}>
          <Heading as="h2">{campaign.campaign_name}</Heading>
          <Flex flexWrap="wrap">
            <Stack
              width={[1, 1, 2 / 3]}
              splitAfter={1}
              spacing={3}
              pr={[0, 0, 4]}
            >
              <Paragraph>{campaign.description}</Paragraph>
              <Divider />
              <Stack spacing={1}>
                <Paragraph fontWeight="700">
                  {campaign.assisted_entity}
                </Paragraph>
                <Paragraph fontWeight="700">{campaign.city}</Paragraph>
              </Stack>
            </Stack>
            <Stack width={[1, 1, 1 / 3]}>
              <Heading
                as="h2"
                fontWeight="700"
                fontSize={3}
                sx={{ textTransform: 'uppercase' }}
              >
                Ajudar com dinheiro
              </Heading>
              <Stack spacing={2}>
                {campaign.donate_channels.map((channel) => (
                  <Box bg="secondary" p={4}>
                    <Text fontSize={3} textAlign="center" color="background">
                      {channel}
                    </Text>
                  </Box>
                ))}
              </Stack>
            </Stack>
          </Flex>
        </Stack>
        <Stack
          sx={{ borderTop: '1px solid', borderTopColor: 'muted' }}
          p={4}
          spacing={3}
        >
          <Heading
            as="h2"
            fontWeight="700"
            fontSize={3}
            sx={{ textTransform: 'uppercase' }}
          >
            Ajudar com produtos
          </Heading>
          <Flex
            mt={2}
            flexWrap="wrap"
            py={2}
            bg="muted"
            sx={{
              border: 0,
              borderTopWidth: 20,
              borderBottomWidth: 20,
              borderStyle: 'solid',
              borderColor: 'mutedDarker'
            }}
          >
            {campaign.type_donations.map((donation) => (
              <Box width={1 / 2} py={1}>
                <Paragraph p={3} fontWeight="700" fontSize={3}>
                  {donation}
                </Paragraph>
              </Box>
            ))}
          </Flex>
        </Stack>
        <Stack
          sx={{ borderTop: '1px solid', borderTopColor: 'muted' }}
          p={4}
          spacing={3}
        >
          <Heading
            as="h2"
            fontWeight="700"
            fontSize={3}
            sx={{ textTransform: 'uppercase' }}
          >
            Pontos de Coleta
          </Heading>
          <Paragraph>[Aqui irão os pontos de coleta]</Paragraph>
        </Stack>
      </Box>
    </Box>
  </NavBarLayout>
)

export default Campaign
