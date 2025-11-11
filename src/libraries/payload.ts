import { PayloadSDK } from "@payloadcms/sdk";

export const sdk = new PayloadSDK({
  baseURL: "https://admin.lorenzofiori.art/api",
});

export const getProject = async (slug: string) => {
  return sdk.find({
    collection: "projects",
    where: { slug: { equals: slug } },
  });
};

export const getColor = async (slug: string) => {
  return sdk.find({
    collection: "colors",
    where: { slug: { equals: slug } },
  });
};

export const getProjects = async (): Promise<any> => {
  return sdk.find({
    collection: "projects",
    pagination: false,
    sort: "-date",
    select: {
      slug: true,
      image: {
        url: true,
      },
    },
  });
};

export const getColors = async (): Promise<any> => {
  return sdk.find({
    collection: "colors",
    pagination: false,
    sort: "-date",
    select: {
      slug: true,
      image: {
        url: true,
      },
    },
  });
};
