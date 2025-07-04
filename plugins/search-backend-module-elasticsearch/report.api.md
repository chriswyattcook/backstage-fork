## API Report File for "@backstage/plugin-search-backend-module-elasticsearch"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts
import { ApiResponse } from '@opensearch-project/opensearch';
import { ApiResponse as ApiResponse_2 } from '@elastic/elasticsearch';
import { BackendFeature } from '@backstage/backend-plugin-api';
import { BatchSearchEngineIndexer } from '@backstage/plugin-search-backend-node';
import { BulkHelper } from '@elastic/elasticsearch/lib/Helpers';
import { BulkStats } from '@elastic/elasticsearch/lib/Helpers';
import { Config } from '@backstage/config';
import type { ConnectionOptions } from 'tls';
import { ExtensionPoint } from '@backstage/backend-plugin-api';
import { IndexableDocument } from '@backstage/plugin-search-common';
import { IndexableResultSet } from '@backstage/plugin-search-common';
import { LoggerService } from '@backstage/backend-plugin-api';
import { Readable } from 'stream';
import { SearchEngine } from '@backstage/plugin-search-backend-node';
import { SearchQuery } from '@backstage/plugin-search-common';
import { TransportRequestPromise } from '@opensearch-project/opensearch/lib/Transport';
import { TransportRequestPromise as TransportRequestPromise_2 } from '@elastic/elasticsearch/lib/Transport';

// @public
export interface BaseElasticSearchClientOptions {
  // (undocumented)
  agent?: ElasticSearchAgentOptions | ((opts?: any) => unknown) | false;
  // (undocumented)
  compression?: 'gzip';
  // (undocumented)
  disablePrototypePoisoningProtection?: boolean | 'proto' | 'constructor';
  // (undocumented)
  enableMetaHeader?: boolean;
  // (undocumented)
  headers?: Record<string, any>;
  // (undocumented)
  maxRetries?: number;
  // (undocumented)
  name?: string | symbol;
  // (undocumented)
  nodeFilter?: (connection: any) => boolean;
  // (undocumented)
  nodeSelector?: ((connections: any[]) => any) | string;
  // (undocumented)
  opaqueIdPrefix?: string;
  // (undocumented)
  pingTimeout?: number;
  // (undocumented)
  proxy?: string | URL;
  // (undocumented)
  requestTimeout?: number;
  // (undocumented)
  resurrectStrategy?: 'ping' | 'optimistic' | 'none';
  // (undocumented)
  sniffEndpoint?: string;
  // (undocumented)
  sniffInterval?: number | boolean;
  // (undocumented)
  sniffOnConnectionFault?: boolean;
  // (undocumented)
  sniffOnStart?: boolean;
  // (undocumented)
  ssl?: ConnectionOptions;
  // (undocumented)
  suggestCompression?: boolean;
  // (undocumented)
  Transport?: ElasticSearchTransportConstructor;
}

// @public (undocumented)
export function decodeElasticSearchPageCursor(pageCursor?: string): {
  page: number;
};

// @public
const _default: BackendFeature;
export default _default;

// @public (undocumented)
export interface ElasticSearchAgentOptions {
  // (undocumented)
  keepAlive?: boolean;
  // (undocumented)
  keepAliveMsecs?: number;
  // (undocumented)
  maxFreeSockets?: number;
  // (undocumented)
  maxSockets?: number;
}

// @public (undocumented)
export type ElasticSearchAliasAction =
  | {
      remove: {
        index: any;
        alias: any;
      };
      add?: undefined;
    }
  | {
      add: {
        indices: any;
        alias: any;
        index?: undefined;
      };
      remove?: undefined;
    }
  | {
      add: {
        index: any;
        alias: any;
        indices?: undefined;
      };
      remove?: undefined;
    }
  | undefined;

// @public (undocumented)
export type ElasticSearchAuth =
  | OpenSearchAuth
  | {
      apiKey:
        | string
        | {
            id: string;
            api_key: string;
          };
    };

// @public
export type ElasticSearchClientOptions =
  | ElasticSearchElasticSearchClientOptions
  | OpenSearchElasticSearchClientOptions;

// @public
export class ElasticSearchClientWrapper {
  // (undocumented)
  bulk(bulkOptions: {
    datasource: Readable;
    onDocument: () => ElasticSearchIndexAction;
    refreshOnCompletion?: string | boolean;
  }): BulkHelper<BulkStats>;
  // (undocumented)
  createIndex(options: {
    index: string;
  }):
    | TransportRequestPromise<ApiResponse<Record<string, any>, unknown>>
    | TransportRequestPromise_2<ApiResponse_2<Record<string, any>, unknown>>;
  // (undocumented)
  deleteIndex(options: {
    index: string | string[];
  }):
    | TransportRequestPromise<ApiResponse<Record<string, any>, unknown>>
    | TransportRequestPromise_2<ApiResponse_2<Record<string, any>, unknown>>;
  // (undocumented)
  static fromClientOptions(
    options: ElasticSearchClientOptions,
  ): ElasticSearchClientWrapper;
  // @deprecated (undocumented)
  getAliases(options: {
    aliases: string[];
  }):
    | TransportRequestPromise<ApiResponse<Record<string, any>, unknown>>
    | TransportRequestPromise_2<ApiResponse_2<Record<string, any>, unknown>>;
  // (undocumented)
  indexExists(options: {
    index: string | string[];
  }):
    | TransportRequestPromise<ApiResponse<boolean, unknown>>
    | TransportRequestPromise_2<ApiResponse_2<boolean, unknown>>;
  // (undocumented)
  listIndices(options: {
    index: string;
  }):
    | TransportRequestPromise<ApiResponse<Record<string, any>, unknown>>
    | TransportRequestPromise_2<ApiResponse_2<Record<string, any>, unknown>>;
  // (undocumented)
  putIndexTemplate(
    template: ElasticSearchCustomIndexTemplate,
  ):
    | TransportRequestPromise<ApiResponse<Record<string, any>, unknown>>
    | TransportRequestPromise_2<ApiResponse_2<Record<string, any>, unknown>>;
  // (undocumented)
  search(options: {
    index: string | string[];
    body: Object;
  }):
    | TransportRequestPromise<ApiResponse<Record<string, any>, unknown>>
    | TransportRequestPromise_2<ApiResponse_2<Record<string, any>, unknown>>;
  // (undocumented)
  updateAliases(options: {
    actions: ElasticSearchAliasAction[];
  }):
    | TransportRequestPromise<ApiResponse<Record<string, any>, unknown>>
    | TransportRequestPromise_2<ApiResponse_2<Record<string, any>, unknown>>;
}

// @public
export type ElasticSearchConcreteQuery = {
  documentTypes?: string[];
  elasticSearchQuery: Object;
  pageSize: number;
};

// @public (undocumented)
export interface ElasticSearchConnectionConstructor {
  // (undocumented)
  new (opts?: any): any;
  // (undocumented)
  roles: {
    MASTER: string;
    DATA: string;
    INGEST: string;
    ML: string;
  };
  // (undocumented)
  statuses: {
    ALIVE: string;
    DEAD: string;
  };
}

// @public
export type ElasticSearchCustomIndexTemplate = {
  name: string;
  body: ElasticSearchCustomIndexTemplateBody;
};

// @public
export type ElasticSearchCustomIndexTemplateBody = {
  index_patterns: string[];
  composed_of?: string[];
  template?: Record<string, any>;
};

// @public
export interface ElasticSearchElasticSearchClientOptions
  extends BaseElasticSearchClientOptions {
  // (undocumented)
  auth?: ElasticSearchAuth;
  // (undocumented)
  cloud?: {
    id: string;
    username?: string;
    password?: string;
  };
  // (undocumented)
  Connection?: ElasticSearchConnectionConstructor;
  // (undocumented)
  node?:
    | string
    | string[]
    | ElasticSearchNodeOptions
    | ElasticSearchNodeOptions[];
  // (undocumented)
  nodes?:
    | string
    | string[]
    | ElasticSearchNodeOptions
    | ElasticSearchNodeOptions[];
  // (undocumented)
  provider?: 'elastic';
}

// @public (undocumented)
export type ElasticSearchHighlightConfig = {
  fragmentDelimiter: string;
  fragmentSize: number;
  numFragments: number;
  preTag: string;
  postTag: string;
};

// @public (undocumented)
export type ElasticSearchHighlightOptions = {
  fragmentDelimiter?: string;
  fragmentSize?: number;
  numFragments?: number;
};

// @public (undocumented)
export type ElasticSearchIndexAction = {
  index: {
    _index: string;
    [key: string]: any;
  };
};

// @public (undocumented)
export interface ElasticSearchNodeOptions {
  // (undocumented)
  agent?: ElasticSearchAgentOptions;
  // (undocumented)
  headers?: Record<string, any>;
  // (undocumented)
  id?: string;
  // (undocumented)
  roles?: {
    master: boolean;
    data: boolean;
    ingest: boolean;
    ml: boolean;
  };
  // (undocumented)
  ssl?: ConnectionOptions;
  // (undocumented)
  url: URL;
}

// @public
export type ElasticSearchOptions = {
  logger: LoggerService;
  config: Config;
  aliasPostfix?: string;
  indexPrefix?: string;
  translator?: ElasticSearchQueryTranslator;
};

// @public (undocumented)
export type ElasticSearchQueryConfig = {
  fuzziness?: string | number;
  prefixLength?: number;
};

// @public
export type ElasticSearchQueryTranslator = (
  query: SearchQuery,
  options?: ElasticSearchQueryTranslatorOptions,
) => ElasticSearchConcreteQuery;

// @public (undocumented)
export interface ElasticSearchQueryTranslatorExtensionPoint {
  // (undocumented)
  setTranslator(translator: ElasticSearchQueryTranslator): void;
}

// @public
export type ElasticSearchQueryTranslatorOptions = {
  highlightOptions?: ElasticSearchHighlightConfig;
  queryOptions?: ElasticSearchQueryConfig;
};

// @public (undocumented)
export class ElasticSearchSearchEngine implements SearchEngine {
  constructor(
    elasticSearchClientOptions: ElasticSearchClientOptions,
    aliasPostfix: string,
    indexPrefix: string,
    logger: LoggerService,
    batchSize: number,
    highlightOptions?: ElasticSearchHighlightOptions,
    queryOptions?: ElasticSearchQueryConfig,
  );
  // (undocumented)
  static fromConfig(
    options: ElasticSearchOptions,
  ): Promise<ElasticSearchSearchEngine>;
  // (undocumented)
  getIndexer(type: string): Promise<ElasticSearchSearchEngineIndexer>;
  newClient<T>(create: (options: ElasticSearchClientOptions) => T): T;
  // (undocumented)
  query(query: SearchQuery): Promise<IndexableResultSet>;
  // (undocumented)
  setIndexTemplate(template: ElasticSearchCustomIndexTemplate): Promise<void>;
  // (undocumented)
  setTranslator(translator: ElasticSearchQueryTranslator): void;
  // (undocumented)
  protected translator(
    query: SearchQuery,
    options?: ElasticSearchQueryTranslatorOptions,
  ): ElasticSearchConcreteQuery;
}

// @public
export class ElasticSearchSearchEngineIndexer extends BatchSearchEngineIndexer {
  constructor(options: ElasticSearchSearchEngineIndexerOptions);
  // (undocumented)
  finalize(): Promise<void>;
  // (undocumented)
  index(documents: IndexableDocument[]): Promise<void>;
  // (undocumented)
  readonly indexName: string;
  // (undocumented)
  initialize(): Promise<void>;
}

// @public
export type ElasticSearchSearchEngineIndexerOptions = {
  type: string;
  indexPrefix: string;
  indexSeparator: string;
  alias: string;
  logger: LoggerService;
  elasticSearchClientWrapper: ElasticSearchClientWrapper;
  batchSize: number;
  skipRefresh?: boolean;
};

// @public
export const elasticsearchTranslatorExtensionPoint: ExtensionPoint<ElasticSearchQueryTranslatorExtensionPoint>;

// @public (undocumented)
export interface ElasticSearchTransportConstructor {
  // (undocumented)
  new (opts?: any): any;
  // (undocumented)
  sniffReasons: {
    SNIFF_ON_START: string;
    SNIFF_INTERVAL: string;
    SNIFF_ON_CONNECTION_FAULT: string;
    DEFAULT: string;
  };
}

// @public
export const isOpenSearchCompatible: (
  opts: ElasticSearchClientOptions,
) => opts is OpenSearchElasticSearchClientOptions;

// @public (undocumented)
export type OpenSearchAuth = {
  username: string;
  password: string;
};

// @public (undocumented)
export interface OpenSearchConnectionConstructor {
  // (undocumented)
  new (opts?: any): any;
  // (undocumented)
  roles: {
    MASTER: string;
    DATA: string;
    INGEST: string;
  };
  // (undocumented)
  statuses: {
    ALIVE: string;
    DEAD: string;
  };
}

// @public
export interface OpenSearchElasticSearchClientOptions
  extends BaseElasticSearchClientOptions {
  // (undocumented)
  auth?: OpenSearchAuth;
  // (undocumented)
  connection?: OpenSearchConnectionConstructor;
  // (undocumented)
  node?: string | string[] | OpenSearchNodeOptions | OpenSearchNodeOptions[];
  // (undocumented)
  nodes?: string | string[] | OpenSearchNodeOptions | OpenSearchNodeOptions[];
  // (undocumented)
  provider?: 'aws' | 'opensearch';
  // (undocumented)
  region?: string;
  // (undocumented)
  service?: 'es' | 'aoss';
}

// @public (undocumented)
export interface OpenSearchNodeOptions {
  // (undocumented)
  agent?: ElasticSearchAgentOptions;
  // (undocumented)
  headers?: Record<string, any>;
  // (undocumented)
  id?: string;
  // (undocumented)
  roles?: {
    master: boolean;
    data: boolean;
    ingest: boolean;
  };
  // (undocumented)
  ssl?: ConnectionOptions;
  // (undocumented)
  url: URL;
}
```
