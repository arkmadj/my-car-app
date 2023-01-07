/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCa
// ====================================================

export interface GetCa_cars {
  __typename: "Car";
  id: string;
  name: string;
  mileage: string;
  gearType: string;
  gas: string;
  thumbnailURL: string;
  dailyPrice: number;
  monthlyPrice: number;
}

export interface GetCa {
  cars: GetCa_cars[];
}
