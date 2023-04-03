import { faker } from "@faker-js/faker";
import {
  generateOutputData,
  generateOutputSource,
  Structure,
} from "../generateOutput";

export interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  phone: string;
  address: {
    streetAddress: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  avatar: string;
  job: {
    title: string;
    company: string;
    website: string;
  };
  social: {
    twitter: string;
    linkedin: string;
    github: string;
  };
}

export const userStructure: Structure[] = [
  {
    name: "firstName",
    label: "First name",
    generator: faker.name.firstName,
    source: "faker.name.firstName()",
  },
  {
    name: "lastName",
    label: "Last name",
    generator: faker.name.lastName,
    source: "faker.name.lastName()",
  },
  {
    name: "email",
    label: "Email",
    generator: faker.internet.email,
    source: "faker.internet.email()",
  },
  {
    name: "username",
    label: "Username",
    generator: faker.internet.userName,
    source: "faker.internet.userName()",
  },
  {
    name: "password",
    label: "Password",
    generator: faker.internet.password,
    source: "faker.internet.password()",
  },
  {
    name: "phone",
    label: "Phone",
    generator: faker.phone.number,
    source: "faker.phone.number()",
  },
  {
    name: "address",
    label: "Address",
    children: [
      {
        name: "street",
        label: "Street",
        generator: faker.address.streetAddress,
        source: "faker.address.streetAddress()",
      },
      {
        name: "city",
        label: "City",
        generator: faker.address.city,
        source: "faker.address.city()",
      },
      {
        name: "state",
        label: "State",
        generator: faker.address.stateAbbr,
        source: "faker.address.stateAbbr()",
      },
      {
        name: "zipCode",
        label: "Zip code",
        generator: faker.address.zipCode,
        source: "faker.address.zipCode()",
      },
      {
        name: "country",
        label: "Country",
        generator: faker.address.country,
        source: "faker.address.country()",
      },
    ],
  },
  {
    name: "avatar",
    label: "Avatar",
    generator: faker.image.avatar,
    source: "faker.image.avatar()",
  },
  {
    name: "job",
    label: "Job",
    children: [
      {
        name: "title",
        label: "Title",
        generator: faker.name.jobTitle,
        source: "faker.name.jobTitle()",
      },
      {
        name: "company",
        label: "Company",
        generator: faker.company.name,
        source: "faker.company.name()",
      },
      {
        name: "website",
        label: "Website",
        generator: faker.internet.url,
        source: "faker.internet.url()",
      },
    ],
  },
  {
    name: "social",
    label: "Socials",
    children: [
      {
        name: "twitter",
        label: "Twitter",
        generator: () => `@${faker.internet.userName()}`,
        source: "`@${faker.internet.userName()}`",
      },
      {
        name: "linkedin",
        label: "Linkedin",
        generator: () => `https://linkedin.com/in/${faker.internet.userName()}`,
        source: "`https://linkedin.com/in/${faker.internet.userName()}`",
      },
      {
        name: "github",
        label: "GitHub",
        generator: () => `https://github.com/${faker.internet.userName()}`,
        source: "`https://github.com/${faker.internet.userName()}`",
      },
    ],
  },
];

export function generateUserSource(fields: string[] = []): string {
  return generateOutputSource(fields, userStructure);
}

export function generateUserData(fields: string[] = []): Partial<UserData> {
  return generateOutputData(fields, userStructure);
}
