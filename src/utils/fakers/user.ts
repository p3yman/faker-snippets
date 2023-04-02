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
  interests: string[];
}

const structure: Structure[] = [
  {
    name: "firstName",
    label: "First name",
    generator: {
      fn: faker.name.firstName,
      source: "faker.name.firstName",
    },
  },
  {
    name: "lastName",
    label: "Last name",
    generator: {
      fn: faker.name.lastName,
      source: "faker.name.lastName",
    },
  },
  {
    name: "email",
    label: "Email",
    generator: {
      fn: faker.internet.email,
      source: "faker.internet.email",
    },
  },
  {
    name: "username",
    label: "Username",
    generator: {
      fn: faker.internet.userName,
      source: "faker.internet.userName",
    },
  },
  {
    name: "password",
    label: "Password",
    generator: {
      fn: faker.internet.password,
      source: "faker.internet.password",
    },
  },
  {
    name: "phone",
    label: "Phone",
    generator: {
      fn: faker.phone.number,
      source: "faker.phone.number",
    },
  },
  {
    name: "address",
    label: "Address",
    generator: {
      nested: true,
      fn: () => ({
        streetAddress: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.stateAbbr(),
        zipCode: faker.address.zipCode(),
        country: faker.address.country(),
      }),
      source: `{
    street: faker.address.streetAddress(),
    city: faker.address.city(),
    state: faker.address.stateAbbr(),
    zipCode: faker.address.zipCode(),
    country: faker.address.country(),
  }`,
    },
  },
  {
    name: "avatar",
    label: "Avatar",
    generator: {
      fn: faker.image.avatar,
      source: "faker.image.avatar",
    },
  },
  {
    name: "job",
    label: "Job",
    generator: {
      nested: true,
      fn: () => ({
        title: faker.name.jobTitle(),
        company: faker.company.name(),
        website: faker.internet.url(),
      }),
      source: `{
    title: faker.name.jobTitle(),
    company: faker.company.name(),
    website: faker.internet.url(),
  }`,
    },
  },
  {
    name: "social",
    label: "Socials",
    generator: {
      nested: true,
      fn: () => {
        const username = faker.internet.userName();
        return {
          twitter: `@${username}`,
          linkedin: `https://linkedin.com/in/${username}`,
          github: `https://github.com/${username}`,
        };
      },
      source: `{
    const username = faker.internet.userName();
    return {
      twitter: \`@\${username}\`,
      linkedin: \`https://linkedin.com/in/\${username}\`,
      github: \`https://github.com/\${username}\`,
    }
  }`,
    },
  },
  {
    name: "interersts",
    label: "Interests",
    generator: {
      nested: true,
      fn: () => [
        faker.hacker.adjective(),
        faker.hacker.noun(),
        faker.hacker.ingverb(),
      ],
      source: `[
    faker.hacker.adjective(),
    faker.hacker.noun(),
    faker.hacker.ingverb(),
  ]`,
    },
  },
];

export function generateUserSource(fields: string[] = []): string {
  return generateOutputSource(fields, structure);
}

export function generateUserData(fields: string[] = []): Partial<UserData> {
  return generateOutputData(fields, structure);
}
