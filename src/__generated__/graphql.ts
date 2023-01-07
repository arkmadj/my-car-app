/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Car = {
  __typename?: 'Car';
  dailyPrice: Scalars['Float'];
  gas: Scalars['String'];
  gearType: Scalars['String'];
  id: Scalars['String'];
  mileage: Scalars['String'];
  monthlyPrice: Scalars['Float'];
  name: Scalars['String'];
  thumbnailURL: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addNewCar: Car;
};


export type MutationAddNewCarArgs = {
  newCarData: NewCarInput;
};

export type NewCarInput = {
  dailyPrice: Scalars['Int'];
  gas: Scalars['String'];
  gearType: Scalars['String'];
  mileage: Scalars['String'];
  monthlyPrice: Scalars['Int'];
  name: Scalars['String'];
  thumbnailURL: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  cars: Array<Car>;
};
