export interface User {
    [key: string]: {
      value?: string;
      isValid: boolean;
      errorMessage: string;
      marketingPurposes?: boolean;
    };
    
    
  }