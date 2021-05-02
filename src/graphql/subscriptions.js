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
export const onCreateSecurity = /* GraphQL */ `
  subscription OnCreateSecurity {
    onCreateSecurity {
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
export const onUpdateSecurity = /* GraphQL */ `
  subscription OnUpdateSecurity {
    onUpdateSecurity {
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
export const onDeleteSecurity = /* GraphQL */ `
  subscription OnDeleteSecurity {
    onDeleteSecurity {
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
export const onCreatePortfolio = /* GraphQL */ `
  subscription OnCreatePortfolio {
    onCreatePortfolio {
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
export const onUpdatePortfolio = /* GraphQL */ `
  subscription OnUpdatePortfolio {
    onUpdatePortfolio {
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
export const onDeletePortfolio = /* GraphQL */ `
  subscription OnDeletePortfolio {
    onDeletePortfolio {
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
export const onCreateReminder = /* GraphQL */ `
  subscription OnCreateReminder {
    onCreateReminder {
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
export const onUpdateReminder = /* GraphQL */ `
  subscription OnUpdateReminder {
    onUpdateReminder {
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
export const onDeleteReminder = /* GraphQL */ `
  subscription OnDeleteReminder {
    onDeleteReminder {
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
export const onCreateTradingActivity = /* GraphQL */ `
  subscription OnCreateTradingActivity {
    onCreateTradingActivity {
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
export const onUpdateTradingActivity = /* GraphQL */ `
  subscription OnUpdateTradingActivity {
    onUpdateTradingActivity {
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
export const onDeleteTradingActivity = /* GraphQL */ `
  subscription OnDeleteTradingActivity {
    onDeleteTradingActivity {
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
export const onCreateMySecurity = /* GraphQL */ `
  subscription OnCreateMySecurity {
    onCreateMySecurity {
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
export const onUpdateMySecurity = /* GraphQL */ `
  subscription OnUpdateMySecurity {
    onUpdateMySecurity {
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
export const onDeleteMySecurity = /* GraphQL */ `
  subscription OnDeleteMySecurity {
    onDeleteMySecurity {
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
export const onCreateNote = /* GraphQL */ `
  subscription OnCreateNote {
    onCreateNote {
      id
      text
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateNote = /* GraphQL */ `
  subscription OnUpdateNote {
    onUpdateNote {
      id
      text
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteNote = /* GraphQL */ `
  subscription OnDeleteNote {
    onDeleteNote {
      id
      text
      owner
      createdAt
      updatedAt
    }
  }
`;
