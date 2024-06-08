import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CustomerWhereInput = {
  age?: IntNullableFilter;
  balance?: FloatNullableFilter;
  churn?: BooleanNullableFilter;
  creditScore?: IntNullableFilter;
  estimatedSalary?: FloatNullableFilter;
  geography?: StringNullableFilter;
  hasCreditCard?: BooleanNullableFilter;
  id?: StringFilter;
  isActiveMember?: BooleanNullableFilter;
  numberOfProducts?: IntNullableFilter;
  surname?: StringNullableFilter;
  tenure?: IntNullableFilter;
};
