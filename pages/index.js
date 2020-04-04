import { Flex, Box, Heading, Text } from "rebass";
import Head from "next/head";
import { NavBarLayout } from "../components/_layouts";
import { Section, Stack } from "../components/_app";
import { CampaignCard } from "../components/campaign";
import { CampaignsService } from "../services";

export async function getServerSideProps(context) {
  const res = await CampaignsService.list({ limit: 10 });

  return {
    props: {
      campaigns: res.data.data || [],
    },
  };
}

const Home = ({ campaigns }) => (
  <>
    <Head>
      <title>Cooperação Solidária</title>
    </Head>
    <NavBarLayout
      beforeContent={
        <Section bg="muted" id="chamada">
          <Heading as="h2" variant="headingHero" textAlign="center">
            Colabore com as ações de ajuda que estão ocorrendo em todo o Brasil
          </Heading>
        </Section>
      }
    >
      <Section id="apresentação" fontFamily="body" textAlign="left">
        <Stack>
          <Heading as="h3" fontSize={3}>
            Olá, que bom que você está aqui!
          </Heading>
          <Text as="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
            augue congue, efficitur massa a, consectetur urna. Morbi vehicula
            sit amet est vehicula vulputate. Vivamus quis lacus fringilla,
            pharetra leo sit amet, tincidunt ligula. Aliquam venenatis turpis
            est, ut elementum orci fermentum eu. Pellentesque quis lacus nulla.
            Sed faucibus mollis molestie. Duis in iaculis ex. Phasellus ut velit
            semper, pellentesque nibh non, dapibus erat. Donec bibendum, velit
            ac venenatis condimentum, metus magna elementum justo, eu convallis
            nisl eros at lacus. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus.
          </Text>
          <Text as="p">
            Nam venenatis nec justo eu finibus. Nullam venenatis, justo id
            mattis egestas, nisl felis dictum quam, ac posuere risus est ac
            erat. Proin condimentum tristique velit, a gravida orci euismod et.
            Integer quis magna nisl. Suspendisse ligula nibh, ultrices et ex
            vitae, aliquet consequat quam. Sed vestibulum at dolor ac euismod.
          </Text>
          <Text as="p">
            Mauris sit amet commodo arcu. In tellus arcu, viverra eu aliquet
            nec, malesuada eget urna. Aliquam facilisis condimentum luctus!
          </Text>
        </Stack>
      </Section>
      <Section id="colabore" bg="muted">
        <Stack>
          <Heading as="h2" variant="headingHero" textAlign="center">
            Campanhas e ações de arrecadação abertas neste momento
          </Heading>
          <Box variant="full-bleed" px={4}>
            <Box variant="container-xl">
              <Flex flexDirection="row" flexWrap="wrap" m={-2}>
                {campaigns.map((campaign) => {
                  console.log(campaign);
                  return (
                    <Box width={[1, 1, 1 / 2]} p={2} key={campaign._id}>
                      <CampaignCard {...campaign} />
                    </Box>
                  );
                })}
              </Flex>
            </Box>
          </Box>
        </Stack>
      </Section>
      <Section as="footer" id="rodape" bg="text" color="accent">
        <Heading>[Aqui vai o rodapé]</Heading>
      </Section>
    </NavBarLayout>
  </>
);

export default Home;
