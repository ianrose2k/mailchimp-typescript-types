/**
 * Sent in POST /allowlists/add
 * @example - {
 *     key: "string"
 *     email: "Erwin_DuBuque78@gmail.com",
 *   }
 */
export interface PostAllowListsAddRequest {
    /**
     * REQUIRED - a valid api key
     */
    key: string;
    /**
     * REQUIRED - an email address to add to the allowlist
     */
    email: string;
    /**
     * an optional description of why the email was added to the allowlist
     */
    comment?: string;
}

/**
 * Returned by POST /allowlists/add
 * @example - {
 *   "email": "string",
 *   "added": true
 * }
 */
export interface PostAllowListsAddResponse {
    /**
     * the email address you provided
     */
    email: string;
    /**
     * whether the operation succeeded
     */
    added: boolean;
}

/**
 * Sent to POST /allowlists/list
 */
export interface PostListAllowListedEmailsRequest {
    /**
     * REQUIRED - a valid api key
     */
    key: string;
    /**
     * an optional email address or prefix to search by
     */
    email?: string;
}

/**
 * Returned by POST /allowlists/list
 * @example - [
 *   {
 *     "email": "user@example.com",
 *     "detail": "string",
 *     "created_at": "2019-08-24T14:15:22Z"
 *   }
 * ]
 */
export type PostListAllowListedEmailsResponse = AllowListEntry[];

/**
 * the information for each allowlist entry
 */
export interface AllowListEntry {
    /**
     * the email that is allowlisted
     */
    email: string;
    /**
     * a description of why the email was allowlisted
     */
    detail: string;
    /**
     * when the email was added to the allowlist
     */
    created_at: string;
}

/**
 * Sent to POST /allowlists/delete
 */
export interface PostListAllowListDeleteRequest {
    /**
     * REQUIRED - a valid api key
     */
    key: string;
    /**
     * REQUIRED - the email address to remove from the allowlist
     */
    email: string;
}

/**
 * Returned by POST /allowlists/delete
 */
export interface PostListAllowListDeleteResponse {
    /**
     * the email address that was removed from the denylist
     */
    email: string;
    /**
     * whether the address was deleted successfully
     */
    deleted: boolean;
}