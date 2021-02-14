/** @jsx jsx */
import { jsx, Heading } from "theme-ui";
import { Link } from "gatsby";
import { readableColor } from "polished";

import useSiteMetadata from "@lekoarts/gatsby-theme-jodie/src/hooks/use-site-metadata";

type SidebarProps = { bg: string };

const Sidebar = ({ bg }: SidebarProps) => {
  const { siteTitle } = useSiteMetadata();

  return (
    <header
      sx={{
        p: [3, 3, 4],
        width: (t: any): any => [
          `100%`,
          `100%`,
          `100%`,
          t.sidebar.normal,
          t.sidebar.wide,
        ],
        backgroundColor: bg,
        position: [`relative`, `relative`, `relative`, `fixed`],
        height: `100%`,
        display: `flex`,
        flexDirection: [`row`, `row`, `row`, `column`],
        alignItems: [`center`, `center`, `center`, `flex-start`],
        justifyContent: [
          `space-between`,
          `space-between`,
          `space-between`,
          `flex-start`,
        ],
        svg: {
          fill: readableColor(bg),
        },
        variant: `sidebar`,
      }}
      data-testid="sidebar"
    >
      <Link
        to="/"
        aria-label={`${siteTitle}, Back to Home`}
        sx={{ width: [`3rem`, `4rem`, `4.5rem`, `5rem`] }}
      >
        <Heading as="h1"> Good News Graphs </Heading>
      </Link>
      <div sx={{ py: 4, display: [`none`, `none`, `none`, `block`] }} />
    </header>
  );
};

export default Sidebar;
