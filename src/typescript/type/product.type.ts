export type ProductActionType =
  | { type: "START_FETCHING" }
  | { type: "SUCCESS_FETCHING"; payload: any }
  | {type: "ERROR_FETCHING";payload:string | null }
