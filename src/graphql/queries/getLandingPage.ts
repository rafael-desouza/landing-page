import { gql } from 'graphql-request'

const GEt_LANDING_PAGE = gql`
  query GEt_LANDING_PAGE {
    landingPage {
      logo {
        alternativeText
        url
      }
    }
  }
`

export default GEt_LANDING_PAGE
