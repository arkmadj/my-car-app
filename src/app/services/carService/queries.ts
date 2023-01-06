import { gql } from "@apollo/client";

export const GET_ALL_CARS = gql`
  query{
    cars{
      id
      name
      miledage
      gearType
      gas
      thumbnailUrl
      dailyPrice
      monthlyPrice
    }
  }
`