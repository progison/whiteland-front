import VKUser from "./VKUser";

export default interface VKAuth {
  login: (callback: (auth: any) => void, settings?: number) => void;
}

export interface VKAuthStatus {
  status: VKUserStatus;
  session?: {
    expire: number;
    mid: number;
    secret: string;
    sid: string;
    sig: string;
    user: {
      id: string;
      domain: string;
      first_name: string;
      last_name: string;
      nickname: string;
      href: string;
    };
  };
  settings?: number;
}

export type VKUserStatus = "connected" | "not_authorized" | "unknown";
