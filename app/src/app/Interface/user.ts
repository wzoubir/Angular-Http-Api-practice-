import { Address } from '../Interface/address';
import { Company } from '../Interface/company';

export interface User {
  id?: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
  isAdmin: boolean;
  image?:string;
}
