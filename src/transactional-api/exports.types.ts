export interface ExportJob {
    /**
     * the unique identifier for this Export. Use this identifier when checking the export job's status
     */
    id: string;
    /**
     * the date and time that the export job was created as a UTC string in YYYY-MM-DD HH:MM:SS format
     */
    created_at: string;
    /**
     * the type of the export job - activity, reject, or allowlist
     */
    type: ExportJobType;
    /**
     * the date and time that the export job was finished as a UTC string in YYYY-MM-DD HH:MM:SS format
     */
    finished_at: string;
    /**
     * the export job's state - waiting, working, complete, error, or expired.
     */
    state: ExportJobState;
    /**
     * the url for the export job's results, if the job is completed.
     */
    result_url?: string;
}

export type ExportJobType =
    'activity' |
    'reject' |
    'allowlist'
;

export type ExportJobState =
    'working' |
    'complete' |
    'error' |
    'expired'
;

/**
 * Sent to POST /exports/info
 */
export interface PostExportJobInfoRequest {
    /**
     * REQUIRED - a valid api key
     */
    key: string;
    /**
     * REQUIRED - an export job identifier
     */
    id: string;
}

/**
 * Returned by POST /exports/info
 * @example - {
 *   "id": "string",
 *   "created_at": "2019-08-24T14:15:22Z",
 *   "type": "string",
 *   "finished_at": "2019-08-24T14:15:22Z",
 *   "state": "string",
 *   "result_url": "string"
 * }
 */
export interface PostExportJobInfoResponse extends ExportJob {
}

/**
 * Sent to POST /exports/list
 */
export interface PostListExportsRequest {
    /**
     * REQUIRED - a valid api key
     */
    key: string;
}

/**
 * Returned by POST /exports/list
 * @example - [
 *   {
 *     "id": "string",
 *     "created_at": "2019-08-24T14:15:22Z",
 *     "type": "string",
 *     "finished_at": "2019-08-24T14:15:22Z",
 *     "state": "string",
 *     "result_url": "string"
 *   }
 * ]
 */
export type PostListExportsResponse = ExportJob[];

/**
 * Sent to POST /exports/rejects
 */
export interface PostExportRejectionDenyListRequest {
    /**
     * REQUIRED - a valid api key
     */
    key: string;
    /**
     * an optional email address to notify when the export job has finished.
     */
    notify_email?: string;
}

/**
 * Returned by POST /exports/rejects
 * @example - {
 *   "id": "string",
 *   "created_at": "2019-08-24T14:15:22Z",
 *   "type": "string",
 *   "finished_at": "2019-08-24T14:15:22Z",
 *   "state": "string",
 *   "result_url": "string"
 * }
 */
export interface PostExportRejectionDenyListRequest extends ExportJob {
}

/**
 * Sent to POST /exports/whitelist
 */
export interface PostExportWhiteListRequest {
    /**
     * REQUIRED - a valid api key
     */
    key: string;
    /**
     * an optional email address to notify when the export job has finished.
     */
    notify_email?: string;
}

/**
 * Returned by POST /exports/whitelist
 * @example - {
 *   "id": "string",
 *   "created_at": "2019-08-24T14:15:22Z",
 *   "type": "string",
 *   "finished_at": "2019-08-24T14:15:22Z",
 *   "state": "string",
 *   "result_url": "string"
 * }
 */
export interface PostExportWhiteListRequest extends ExportJob {
}

/**
 * Sent to POST /exports/allowlist
 */
export interface PostExportAllowListRequest {
    /**
     * REQUIRED - a valid api key
     */
    key: string;
    /**
     * an optional email address to notify when the export job has finished.
     */
    notify_email?: string;
}

/**
 * Returned by POST /exports/allowlist
 * @example - {
 *   "id": "string",
 *   "created_at": "2019-08-24T14:15:22Z",
 *   "type": "string",
 *   "finished_at": "2019-08-24T14:15:22Z",
 *   "state": "string",
 *   "result_url": "string"
 * }
 */
export interface PostExportAllowListRequest extends ExportJob {
}

/**
 * Sent to POST /exports/activity
 */
export interface PostExportActivityHistoryRequest {
    /**
     * REQUIRED - a valid api key
     */
    key: string;
    /**
     * an optional email address to notify when the export job has finished.
     */
    notify_email?: string;
    /**
     * start date as a UTC string in YYYY-MM-DD HH:MM:SS format
     */
    date_from?: string;
    /**
     * end date as a UTC string in YYYY-MM-DD HH:MM:SS format
     */
    date_to?: string;
    /**
     * an array of tag names to narrow the export to;
     * will match messages that contain ANY of the tags
     */
    tags?: string[];
    /**
     * an array of senders to narrow the export to
     */
    senders?: string[];
    /**
     * an array of message states to narrow the export to;
     * messages with ANY of the states will be included
     */
    states?: string[];
    /**
     * an array of api keys to narrow the export to;
     * messsagse sent with ANY of the keys will be included
     */
    api_keys?: string[];
}

/**
 * Returned by POST /exports/activity
 * @example - {
 *   "id": "string",
 *   "created_at": "2019-08-24T14:15:22Z",
 *   "type": "string",
 *   "finished_at": "2019-08-24T14:15:22Z",
 *   "state": "string",
 *   "result_url": "string"
 * }
 */
export interface PostExportActivityHistoryRequest extends ExportJob {
}