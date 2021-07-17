import * as React from "react";
import { graphql} from "gatsby";

const IndexPage = (props) => {
  return (
    <div>
      <pre>{JSON.stringify(props.data, null, 2)}</pre>
    </div>
  );
};

export const query = graphql`
  query IndexPageQuery {
    allFeedQiita {
      nodes {
        title
        link
        pubDate
      }
    }
  }
`;
export default IndexPage;
