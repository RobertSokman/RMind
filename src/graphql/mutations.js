/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createClient = /* GraphQL */ `
  mutation CreateClient(
    $input: CreateClientInput!
    $condition: ModelClientConditionInput
  ) {
    createClient(input: $input, condition: $condition) {
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
export const updateClient = /* GraphQL */ `
  mutation UpdateClient(
    $input: UpdateClientInput!
    $condition: ModelClientConditionInput
  ) {
    updateClient(input: $input, condition: $condition) {
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
export const deleteClient = /* GraphQL */ `
  mutation DeleteClient(
    $input: DeleteClientInput!
    $condition: ModelClientConditionInput
  ) {
    deleteClient(input: $input, condition: $condition) {
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
export const createSecurity = /* GraphQL */ `
  mutation CreateSecurity(
    $input: CreateSecurityInput!
    $condition: ModelSecurityConditionInput
  ) {
    createSecurity(input: $input, condition: $condition) {
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
export const updateSecurity = /* GraphQL */ `
  mutation UpdateSecurity(
    $input: UpdateSecurityInput!
    $condition: ModelSecurityConditionInput
  ) {
    updateSecurity(input: $input, condition: $condition) {
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
export const deleteSecurity = /* GraphQL */ `
  mutation DeleteSecurity(
    $input: DeleteSecurityInput!
    $condition: ModelSecurityConditionInput
  ) {
    deleteSecurity(input: $input, condition: $condition) {
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
export const createPortfolio = /* GraphQL */ `
  mutation CreatePortfolio(
    $input: CreatePortfolioInput!
    $condition: ModelPortfolioConditionInput
  ) {
    createPortfolio(input: $input, condition: $condition) {
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
export const updatePortfolio = /* GraphQL */ `
  mutation UpdatePortfolio(
    $input: UpdatePortfolioInput!
    $condition: ModelPortfolioConditionInput
  ) {
    updatePortfolio(input: $input, condition: $condition) {
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
export const deletePortfolio = /* GraphQL */ `
  mutation DeletePortfolio(
    $input: DeletePortfolioInput!
    $condition: ModelPortfolioConditionInput
  ) {
    deletePortfolio(input: $input, condition: $condition) {
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
export const createReminder = /* GraphQL */ `
  mutation CreateReminder(
    $input: CreateReminderInput!
    $condition: ModelReminderConditionInput
  ) {
    createReminder(input: $input, condition: $condition) {
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
export const updateReminder = /* GraphQL */ `
  mutation UpdateReminder(
    $input: UpdateReminderInput!
    $condition: ModelReminderConditionInput
  ) {
    updateReminder(input: $input, condition: $condition) {
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
export const deleteReminder = /* GraphQL */ `
  mutation DeleteReminder(
    $input: DeleteReminderInput!
    $condition: ModelReminderConditionInput
  ) {
    deleteReminder(input: $input, condition: $condition) {
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
export const createTradingActivity = /* GraphQL */ `
  mutation CreateTradingActivity(
    $input: CreateTradingActivityInput!
    $condition: ModelTradingActivityConditionInput
  ) {
    createTradingActivity(input: $input, condition: $condition) {
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
export const updateTradingActivity = /* GraphQL */ `
  mutation UpdateTradingActivity(
    $input: UpdateTradingActivityInput!
    $condition: ModelTradingActivityConditionInput
  ) {
    updateTradingActivity(input: $input, condition: $condition) {
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
export const deleteTradingActivity = /* GraphQL */ `
  mutation DeleteTradingActivity(
    $input: DeleteTradingActivityInput!
    $condition: ModelTradingActivityConditionInput
  ) {
    deleteTradingActivity(input: $input, condition: $condition) {
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
