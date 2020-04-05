import { NavBarLayout } from "@app/components/templates";
import { CampaignsService } from "@app/services";

export async function getServerSideProps(context) {
  const { campaignId } = context.params;
  const campaign = await CampaignsService.findById({ campaignId });

  return {
    props: {
      campaign,
    },
  };
}

const Campaign = ({ campaign }) => <NavBarLayout></NavBarLayout>;

export default Campaign;
