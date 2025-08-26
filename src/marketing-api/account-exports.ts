import {MailChimpMarketingApiLink} from "./general.types";

/**
 * Get a list of account exports for a given account.
 * Returned by GET /account-exports
 * @example - {
 *   "exports": [
 *     {
 *       "export_id": 0,
 *       "started": "2019-08-24T14:15:22Z",
 *       "finished": "2019-08-24T14:15:22Z",
 *       "size_in_bytes": 0,
 *       "download_url": "string",
 *       "_links": [
 *         {
 *           "rel": "string",
 *           "href": "string",
 *           "method": "GET",
 *           "targetSchema": "string",
 *           "schema": "string"
 *         }
 *       ]
 *     }
 *   ],
 *   "total_items": 0,
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
export interface GetAccountExportsResponse {
    /**
     * An array of objects, each representing an account export.
     */
    exports: AccountExport;
    /**
     * The total number of items matching the query regardless of pagination.
     */
    total_items: number;
    /**
     * A list of link types and descriptions for the API schema documents.
     */
    _links: MailChimpMarketingApiLink[];
}

export interface AccountExport {
    /**
     * The ID for the export.
     */
    export_id: number;
    /**
     * Start time for the export.
     */
    started: string;
    /**
     * If finished, the finish time for the export.
     */
    finished: string;
    /**
     * The size of the uncompressed export in bytes.
     */
    size_in_bytes: number;
    /**
     * If the export is finished, the download URL for an export.
     * URLs are only valid for 90 days after the export completes.
     */
    download_url: string;
    /**
     * A list of link types and descriptions for the API schema documents.
     */
    _links: MailChimpMarketingApiLink[];
}

/**
 * Sent in POST /account-exports
 * @example - {
 *     include_stages: '["audiences", "gallery_files"]',
 *   }
 */
export interface PostAccountExportRequest {
    /**
     * REQUIRED
     * The stages of an account export to include.
     */
    include_stages: string[];
    /**
     * An ISO 8601 date that will limit the export to only records created after a given time.
     * For instance, the reports stage will contain any campaign sent after the given timestamp.
     * Audiences, however, are excluded from this limit.
     */
    since_timestamp?: string;
}

/**
 * Returned by POST /account-exports
 * @example - {
 *   "export_id": 0,
 *   "started": "2019-08-24T14:15:22Z",
 *   "finished": "2019-08-24T14:15:22Z",
 *   "size_in_bytes": 0,
 *   "download_url": "string",
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
export interface PostAccountExportResponse extends GetAccountExportsResponse {
}

/**
 * returned by GET /account-exports/{export_id}
 * @example - {
 *   "export_id": 0,
 *   "started": "2019-08-24T14:15:22Z",
 *   "finished": "2019-08-24T14:15:22Z",
 *   "size_in_bytes": 0,
 *   "download_url": "string",
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
export interface GetAccountExportDetailsResponse extends AccountExport {
}


