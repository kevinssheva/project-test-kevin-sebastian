type ImageDataType = {
  id: number;
  mime: string;
  file_name: string;
  url: string;
};

export type IdeasDataType = {
  id: number;
  slug: string;
  title: string;
  content: string;
  published_at: string;
  deleted_at: string;
  created_at: string;
  updated_at: string;
  small_image: ImageDataType[];
  medium_image: ImageDataType[];
};

type LinkDataType = {
  url: string;
  label: string;
  active: boolean;
};

type MetaDataType = {
  current_page: number;
  from: number;
  last_page: number;
  links: LinkDataType[];
  path: string;
  per_page: number;
  to: number;
  total: number;
};

export type CardListContainerPropsType = {
  ideasData: IdeasDataType[];
  meta: MetaDataType;
};
