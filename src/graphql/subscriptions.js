/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateClient = /* GraphQL */ `
  subscription OnCreateClient {
    onCreateClient {
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
export const onUpdateClient = /* GraphQL */ `
  subscription OnUpdateClient {
    onUpdateClient {
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
export const onDeleteClient = /* GraphQL */ `
  subscription OnDeleteClient {
    onDeleteClient {
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
export const onCreateSecurity = /* GraphQL */ `
  subscription OnCreateSecurity {
    onCreateSecurity {
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
export const onUpdateSecurity = /* GraphQL */ `
  subscription OnUpdateSecurity {
    onUpdateSecurity {
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
export const onDeleteSecurity = /* GraphQL */ `
  subscription OnDeleteSecurity {
    onDeleteSecurity {
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
export const onCreatePortfolio = /* GraphQL */ `
  subscription OnCreatePortfolio {
    onCreatePortfolio {
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
export const onUpdatePortfolio = /* GraphQL */ `
  subscription OnUpdatePortfolio {
    onUpdatePortfolio {
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
export const onDeletePortfolio = /* GraphQL */ `
  subscription OnDeletePortfolio {
    onDeletePortfolio {
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
