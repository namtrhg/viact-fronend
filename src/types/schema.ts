/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface ApiResponse {
  /** @format int32 */
  code?: number
  type?: string
  message?: string
}

export interface User {
  /** @format int64 */
  id?: number
  emailOrUsername?: string
  firstName?: string
  lastName?: string
  username?: string
  email?: string
  password?: string
  phone?: string
}
