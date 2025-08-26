/**
 * The API root resource links to all other resources available in the API.
 * Calling the root directory also returns details about the Mailchimp user account.
 * */

import {MailChimpMarketingApiLink} from "./general.types";

/**
 * Returned by GET <Marketing-Api>/
 * Query Params:
 *  fields: string[] - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
 *  exclude_fields: string[] - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
 * Gets links to all other resources available in the API
 * @example - {
 *   "account_id": "string",
 *   "login_id": "string",
 *   "account_name": "string",
 *   "email": "string",
 *   "first_name": "string",
 *   "last_name": "string",
 *   "username": "freddie2000",
 *   "avatar_url": "string",
 *   "role": "string",
 *   "member_since": "2010-01-01T23:59:59+00:00",
 *   "pricing_plan_type": "monthly",
 *   "first_payment": "2010-01-01T23:59:59+00:00",
 *   "account_timezone": "string",
 *   "account_industry": "string",
 *   "contact": {
 *     "company": "string",
 *     "addr1": "string",
 *     "addr2": "string",
 *     "city": "string",
 *     "state": "string",
 *     "zip": "string",
 *     "country": "string"
 *   },
 *   "pro_enabled": true,
 *   "last_login": "2019-08-24T14:15:22Z",
 *   "total_subscribers": 0,
 *   "industry_stats": {
 *     "open_rate": 0,
 *     "bounce_rate": 0,
 *     "click_rate": 0
 *   },
 *   "_links": [
 *     {
 *       "rel": "string",
 *       "href": "string",
 *       "method": "GET",
 *       "targetSchema": "string",
 *       "schema": "string"
 *     }
 *   ]
 * }
 */
export interface GetApiRootResponse {
    /**
     * The Mailchimp account ID.
     * */
    account_id: string;
    /**
     * The ID associated with the user who owns this API key.
     * If you can login to multiple accounts,
     * this ID will be the same for each account.
     * */
    login_id: string;
    /**
     * The name of the account.
     * */
    account_name: string;
    /**
     * The account email address.
     * */
    email: string;
    /**
     * The first name tied to the account.
     * */
    first_name: string;
    /**
     * The last name tied to the account.
     * */
    last_name: string;
    /**
     * The username tied to the account.
     * */
    username: string;
    /**
     * URL of the avatar for the user.
     * */
    avatar_url: string;
    /**
     * The [user role](https://mailchimp.com/help/manage-user-levels-in-your-account/) for the account.
     * */
    role: string;
    /**
     * The date and time that the account was created in ISO 8601 format.
     * */
    member_since: string;
    /**
     * The type of pricing plan the account is on.
     * Possible values: "monthly", "pay_as_you_go", or "forever_free".
     * */
    pricing_plan_type: PricingPlanType;
    /**
     * Date of first payment for monthly plans.
     * */
    first_payment: string;
    /**
     * The timezone currently set for the account.
     * */
    account_timezone: string;
    /**
     * The user-specified industry associated with the account.
     * */
    account_industry: string;
    /**
     * Information about the account contact.
     * */
    contact: AccountContact;
    /**
     * Legacy - whether the account includes [Mailchimp Pro](https://mailchimp.com/help/about-mailchimp-pro/).
     * */
    pro_enabled: boolean;
    /**
     * The date and time of the last login for this account in ISO 8601 format.
     * */
    last_login: string;
    /**
     * The total number of subscribers across all lists in the account.
     * */
    total_subscribers: number;
    /**
     * The [average campaign statistics](https://mailchimp.com/resources/research/email-marketing-benchmarks/?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) for all campaigns in the account's specified industry.
     * */
    industry_stats: IndustryStats;
    /**
     * A list of link types and descriptions for the API schema documents.
     * */
    _links: MailChimpMarketingApiLink[];
}

/**
 * The type of pricing plan the account is on.
 * Possible values: "monthly", "pay_as_you_go", or "forever_free".
 * */
export type PricingPlanType =
    'monthly' |
    'pay_as_you_go' |
    'forever_free'
;

/**
 * Information about the account contact.
 */
export interface AccountContact {
    /**
     * The company name for the account.
     */
    company: string;
    /**
     * The street address for the account contact.
     */
    addr1: string;
    /**
     * The street address for the account contact.
     */
    addr2: string;
    /**
     * The city for the account contact.
     */
    city: string;
    /**
     * The state for the account contact.
     */
    state: string;
    /**
     * The zip code for the account contact.
     */
    zip: string;
    /**
     * The country for the account contact.
     */
    country: string;
}

/**
 * The [average campaign statistics](https://mailchimp.com/resources/research/email-marketing-benchmarks/?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) for all campaigns in the account's specified industry.
 * */
export interface IndustryStats {
    /**
     * The average unique open rate for all campaigns in the account's specified industry.
     */
    open_rate: number;
    /**
     * The average bounce rate for all campaigns in the account's specified industry.
     */
    bounce_rate: number;
    /**
     * The average unique click rate for all campaigns in the account's specified industry.
     */
    click_rate: number;
}