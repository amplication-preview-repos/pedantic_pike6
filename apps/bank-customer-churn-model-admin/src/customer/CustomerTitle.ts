import { Customer as TCustomer } from "../api/customer/Customer";

export const CUSTOMER_TITLE_FIELD = "surname";

export const CustomerTitle = (record: TCustomer): string => {
  return record.surname?.toString() || String(record.id);
};
