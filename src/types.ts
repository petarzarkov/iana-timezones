export interface IANATzDataParams {
  url?: string;
  filesToExtract?: string[];
  fileEncoding?: BufferEncoding;
}

export interface IANATzDataFiles {
  version: string;
  lastModified: string;
  [key: string]: string;
}

export interface BaseTimezone {
  type: 'Canonical' | 'Link';
  timezoneName: string;
  countryCodes?: string[];
  geographicArea: string | null;
  location: string | null;
  locationDisplayName: string | null;
  comments?: string;
  currentOffset: string | null;
}

export interface CanonicalTimezone extends BaseTimezone {
  type: 'Canonical';
  children?: string[];
}

export interface LinkTimezone extends BaseTimezone {
  type: 'Link';
  parent: string | null;
}

export interface ZoneFileRow {
  countryCodes: string;
  coordinates: string;
  timezoneName: string;
  comments: string;
}
