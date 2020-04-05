import { Flex, Heading, Text, Image } from "rebass";
import { Stack } from "@app/components/_app";

export const CampaignCard = ({
  _id,
  campaign_name,
  description,
  assisted_entity,
  city,
  state,
}) => (
  <Stack
    as="a"
    href={`/campanha/${_id}`}
    variant="card"
    sx={{ textDecoration: "none", display: "block", color: "text" }}
  >
    <Flex>
      <Flex
        width={1 / 3}
        maxWidth={140}
        height={80}
        bg="muted"
        sx={{ borderRadius: 2, backgroundSize: "cover" }}
      />
      <Stack ml={3} spacing={1}>
        <Heading fontSize={3}>{campaign_name}</Heading>
        <Text as="p">{description}</Text>
      </Stack>
    </Flex>
    <Stack fontWeight="bold" spacing={0}>
      <Text as="p" fontSize={1}>
        {assisted_entity}
      </Text>
      <Text as="p" fontSize={1}>
        {`${city} - ${state}`}
      </Text>
    </Stack>
  </Stack>
);
