import { gql } from "@apollo/client/core";

const GET_COUNTRIES = gql`
  query countries {
    countries {
      name
      capital
      emoji
      currency
    }
  }
`;

export default GET_COUNTRIES;
