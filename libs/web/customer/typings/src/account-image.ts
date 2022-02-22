export type AccountImage = {
  _id: string;
  url: string;
  cloudinaryId: string;
  owner: string;
  ad: undefined | string;
};

export type CreateAccountImageDto = {
  file: File;
};

export type UpdateAccountImageDto = { id: string };
