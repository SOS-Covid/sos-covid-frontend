import { Flex, Heading, Text, Image } from "rebass";
import { Stack } from "../_app";

export const CampaignCard = ({
  campaign_name,
  description,
  assisted_entity,
  city,
  state,
}) => (
  <Stack
    as="a"
    display="block"
    p={3}
    bg="background"
    sx={{ borderRadius: 4 }}
    spacing={3}
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
