/* Generated by restful-react */

import React from 'react';
import { Get, GetProps, useGet, UseGetProps } from 'restful-react';
export const SPEC_VERSION = 'v1';
export interface SmsGatewayDto {
  name?: string | null;
  description?: string | null;
  uid?: string | null;
}

export interface ValidationErrorInfo {
  message?: string | null;
  members?: string[] | null;
}

export interface ErrorInfo {
  code?: number;
  message?: string | null;
  details?: string | null;
  validationErrors?: ValidationErrorInfo[] | null;
}

export interface SmsGatewayDtoListAjaxResponse {
  targetUrl?: string | null;
  success?: boolean;
  error?: ErrorInfo;
  unAuthorizedRequest?: boolean;
  __abp?: boolean;
  result?: SmsGatewayDto[] | null;
}

export interface AjaxResponseBase {
  targetUrl?: string | null;
  success?: boolean;
  error?: ErrorInfo;
  unAuthorizedRequest?: boolean;
  __abp?: boolean;
}

export interface SmsGatewaysGetAllQueryParams {
  /**
   * The requested API version
   */
  'api-version'?: string;
}

export type SmsGatewaysGetAllProps = Omit<
  GetProps<SmsGatewayDtoListAjaxResponse, AjaxResponseBase, SmsGatewaysGetAllQueryParams, void>,
  'path'
>;

export const SmsGatewaysGetAll = (props: SmsGatewaysGetAllProps) => (
  <Get<SmsGatewayDtoListAjaxResponse, AjaxResponseBase, SmsGatewaysGetAllQueryParams, void>
    path={`/api/Sms/Gateways`}
    {...props}
  />
);

export type UseSmsGatewaysGetAllProps = Omit<
  UseGetProps<SmsGatewayDtoListAjaxResponse, AjaxResponseBase, SmsGatewaysGetAllQueryParams, void>,
  'path'
>;

export const useSmsGatewaysGetAll = (props: UseSmsGatewaysGetAllProps) =>
  useGet<SmsGatewayDtoListAjaxResponse, AjaxResponseBase, SmsGatewaysGetAllQueryParams, void>(
    `/api/Sms/Gateways`,
    props
  );
