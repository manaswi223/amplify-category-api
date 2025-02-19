import { BackedDataSourceProps, BaseDataSource } from '@aws-cdk/aws-appsync-alpha';
import { Construct } from 'constructs';

/**
 * Properties for an AppSync searchable data source
 */
export interface SearchableDataSourceProps extends BackedDataSourceProps {
  /**
   * Region for the Amazon OpenSearch Service domain
   */
  readonly region: string;
  /**
   * Endpoint for the Amazon OpenSearch Service domain
   */
  readonly endpoint: string;
}

/**
 * An AppSync data source backed by OpenSearch
 */
export class SearchableDataSource extends BaseDataSource {
  constructor(scope: Construct, id: string, props: SearchableDataSourceProps) {
    super(scope, id, props, {
      type: 'AMAZON_ELASTICSEARCH',
      elasticsearchConfig: {
        awsRegion: props.region,
        endpoint: props.endpoint,
      },
    });
  }
}
