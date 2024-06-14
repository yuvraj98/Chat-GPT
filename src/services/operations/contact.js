// services/operations/contact.js

import { apiConnector } from '../apiConnector';
import {  endpoints } from '../apis';
const {CONTACT_API} = endpoints;

export const postContact = async (contactData) => {
  try {
    const response = await apiConnector("POST", CONTACT_API, contactData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
