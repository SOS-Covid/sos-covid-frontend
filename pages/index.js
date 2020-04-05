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
        <Stack fontSize={3}>
          <Heading as="h3" fontSize={4}>
            Olá, que bom que você está aqui!
          </Heading>

          <Text as="p">
            Muitas pessoas e famílias inteiras estão passando por dificuldades
            com as restrições impostas pela pandemia do COVID-19. O isolamento
            social é necessário, mas com isso os empregos, atividades autônomas
            e informais são afetados, impossibilitando muitos de ganhar o
            próprio sustento. Isso restringe seus acessos ao que há de mais
            básico: alimentação e itens higiene.
          </Text>

          <Text as="p">
            Nesta página, reunimos algumas das iniciativas que estão ocorrendo
            aqui em Porto Alegre para ajudá-lo a doar para quem mais necessita.
          </Text>

          <Text as="p">
            Este é um movimento de pessoas para pessoas! <br />
            Colabore e nos ajude a potencializar essa causa do bem {"<3"}
          </Text>
        </Stack>
      </Section>
      <Section id="colabore" bg="muted">
        <Stack>
          <Heading as="h2" variant="headingHero" textAlign="center">
            Campanhas e ações de arrecadação abertas neste momento
          </Heading>
          <Flex flexDirection="row" flexWrap="wrap" mx={-4}>
            {campaigns.map((campaign) => (
              <Box width={[1, 1, 1 / 2]} p={2} key={campaign._id}>
                <CampaignCard {...campaign} />
              </Box>
            ))}
          </Flex>
        </Stack>
      </Section>
    </NavBarLayout>
  </>
);

export default Home;
