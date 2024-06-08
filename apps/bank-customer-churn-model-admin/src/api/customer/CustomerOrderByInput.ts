import { SortOrder } from "../../util/SortOrder";

export type CustomerOrderByInput = {
  age?: SortOrder;
  balance?: SortOrder;
  churn?: SortOrder;
  createdAt?: SortOrder;
  creditScore?: SortOrder;
  estimatedSalary?: SortOrder;
  geography?: SortOrder;
  hasCreditCard?: SortOrder;
  id?: SortOrder;
  isActiveMember?: SortOrder;
  numberOfProducts?: SortOrder;
  surname?: SortOrder;
  tenure?: SortOrder;
  updatedAt?: SortOrder;
};
