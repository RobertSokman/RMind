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
          portfolioNoNumerical
          status
          type
          feeCode
          initialValue
          ownerNo
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
      description
      currency
      price1
      priceOneDate
      price2
      priceTwoDate
      price3
      priceThreeDate
      price4
      priceFourDate
      price5
      priceFiveDate
      parentNo
      parentId
      parentPortfolio {
        id
        portfolioNo
        portfolioNoNumerical
        status
        type
        feeCode
        initialValue
        ownerNo
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
        securities {
          nextToken
        }
        createdAt
        updatedAt
      }
      trades {
        items {
          id
          securityId
          portfolioNo
          securityNo
          securityCode
          type
          dateOfTransaction
          amount
          company
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
        description
        currency
        price1
        priceOneDate
        price2
        priceTwoDate
        price3
        priceThreeDate
        price4
        priceFourDate
        price5
        priceFiveDate
        parentNo
        parentId
        parentPortfolio {
          id
          portfolioNo
          portfolioNoNumerical
          status
          type
          feeCode
          initialValue
          ownerNo
          ownerId
          createdAt
          updatedAt
        }
        trades {
          nextToken
        }
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
      portfolioNoNumerical
      status
      type
      feeCode
      initialValue
      ownerNo
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
      securities {
        items {
          id
          securityCode
          company
          description
          currency
          price1
          priceOneDate
          price2
          priceTwoDate
          price3
          priceThreeDate
          price4
          priceFourDate
          price5
          priceFiveDate
          parentNo
          parentId
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
        portfolioNoNumerical
        status
        type
        feeCode
        initialValue
        ownerNo
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
        securities {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getReminder = /* GraphQL */ `
  query GetReminder($id: ID!) {
    getReminder(id: $id) {
      reminderNo
      id
      name
      description
      dueDate
      createdAt
      updatedAt
    }
  }
`;
export const listReminders = /* GraphQL */ `
  query ListReminders(
    $filter: ModelReminderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReminders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        reminderNo
        id
        name
        description
        dueDate
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTradingActivity = /* GraphQL */ `
  query GetTradingActivity($id: ID!) {
    getTradingActivity(id: $id) {
      id
      securityId
      portfolioNo
      securityNo
      securityCode
      type
      dateOfTransaction
      amount
      company
      securityInvolved {
        id
        securityCode
        company
        description
        currency
        price1
        priceOneDate
        price2
        priceTwoDate
        price3
        priceThreeDate
        price4
        priceFourDate
        price5
        priceFiveDate
        parentNo
        parentId
        parentPortfolio {
          id
          portfolioNo
          portfolioNoNumerical
          status
          type
          feeCode
          initialValue
          ownerNo
          ownerId
          createdAt
          updatedAt
        }
        trades {
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
export const listTradingActivitys = /* GraphQL */ `
  query ListTradingActivitys(
    $filter: ModelTradingActivityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTradingActivitys(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        securityId
        portfolioNo
        securityNo
        securityCode
        type
        dateOfTransaction
        amount
        company
        securityInvolved {
          id
          securityCode
          company
          description
          currency
          price1
          priceOneDate
          price2
          priceTwoDate
          price3
          priceThreeDate
          price4
          priceFourDate
          price5
          priceFiveDate
          parentNo
          parentId
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
export const getMySecurity = /* GraphQL */ `
  query GetMySecurity($id: ID!) {
    getMySecurity(id: $id) {
      id
      amount
      dateOfTransaction
      portfolioNo
      securityCode
      securityNo
      type
      company
      createdAt
      updatedAt
    }
  }
`;
export const listMySecuritys = /* GraphQL */ `
  query ListMySecuritys(
    $filter: ModelMySecurityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMySecuritys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        amount
        dateOfTransaction
        portfolioNo
        securityCode
        securityNo
        type
        company
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getNote = /* GraphQL */ `
  query GetNote($id: ID!) {
    getNote(id: $id) {
      id
      text
      owner
      createdAt
      updatedAt
    }
  }
`;
export const listNotes = /* GraphQL */ `
  query ListNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        text
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
