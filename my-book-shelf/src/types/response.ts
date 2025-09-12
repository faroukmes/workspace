export type ResponseT<T, TOKEN = undefined> =
    | {
          success: true;
          message: string;
          data: T;
          token: TOKEN;
      }
    | {
          success: false;
          message: string;
      };
