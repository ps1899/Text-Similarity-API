export class ApiKeyExistsError extends Error {
    constructor(message = 'You already have a Valid API Key.') {
      super(message)
    }
  }
  