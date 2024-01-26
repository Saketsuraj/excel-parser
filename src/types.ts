// types.ts
export interface IndexEntry {
  name: string;
  contact: {
    email?: string;
    fax?: string;
    mobile?: string;
    phone?: string;
    website?: string;
  };
  location: {
    street?: string;
    city?: string;
    country?: string;
    address?: string;
    lat?: number;
    lng?: number;
    zip?: number;
    state?: string;
  };
  social: {
    facebook?: string;
    googleplus?: string;
    twitter?: string;
  };
  status: string;
  title: string;
}

