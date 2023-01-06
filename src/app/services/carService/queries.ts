import { gql } from "@apollo/client";

export const GET_ALL_CARS = gql`
  query{
    cars{
      id
      name
      mileaged
      gearType
      gas
      thumbnailUrl
      dailyPrice
      monthlyPrice
    }
  }
`