/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getClient = /* GraphQL */ `
  query GetClient($id: ID!) {
    getClient(id: $id) {
      id
      customerNo
      rm_No
      name
      surname
      nationality
      birthday
      sector
      customerStatus
      languageOfReporting
      domicile
      internetBankingService
      reportingCurrency
      portfolios {
        items {
          id
          portfolioNo
          status
          type
          feeCode
          initialValue
          ownerId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listClients = /* GraphQL */ `
  query ListClients(
    $filter: ModelClientFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClients(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        customerNo
        rm_No
        name
        surname
        nationality
        birthday
        sector
        customerStatus
        languageOfReporting
        domicile
        internetBankingService
        reportingCurrency
        portfolios {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSecurity = /* GraphQL */ `
  query GetSecurity($id: ID!) {
    getSecurity(id: $id) {
      id
      securityCode
      company
      currency
      price1
      price2
      price3
      createdAt
      updatedAt
    }
  }
`;
export const listSecuritys = /* GraphQL */ `
  query ListSecuritys(
    $filter: ModelSecurityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSecuritys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        securityCode
        company
        currency
        price1
        price2
        price3
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPortfolio = /* GraphQL */ `
  query GetPortfolio($id: ID!) {
    getPortfolio(id: $id) {
      id
      portfolioNo
      status
      type
      feeCode
      initialValue
      ownerId
      owner {
        id
        customerNo
        rm_No
        name
        surname
        nationality
        birthday
        sector
        customerStatus
        languageOfReporting
        domicile
        internetBankingService
        reportingCurrency
        portfolios {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listPortfolios = /* GraphQL */ `
  query ListPortfolios(
    $filter: ModelPortfolioFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPortfolios(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        portfolioNo
        status
        type
        feeCode
        initialValue
        ownerId
        owner {
          id
          customerNo
          rm_No
          name
          surname
          nationality
          birthday
          sector
          customerStatus
          languageOfReporting
          domicile
          internetBankingService
          reportingCurrency
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
