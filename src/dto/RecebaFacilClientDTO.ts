type EnvironmentType = 'development' | 'production';

interface RecebaFacilConfig {
  environment?: EnvironmentType;
}

export interface RecebaFacilClientDTO {
  marketplace_id: string;
  api_key: string;
  config?: RecebaFacilConfig;
}
