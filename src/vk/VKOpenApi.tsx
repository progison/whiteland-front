import VKAuth from "./VKAuth";
import VKUser from "./VKUser";

export default interface VKOpenApi {
  init: (params: VKInitParams) => void;
  Auth: VKAuth;
  Widgets: {
    Auth: (
      element_id: string,
      options?: {
        width?: number;
        onAuth?: (data: VKUser) => void;
        authUrl?: string;
      }
    ) => void;
  };
}

export interface VKInitParams {
  apiId: number;
  status?: boolean;
  onlyWidgets?: boolean;
}
