import React from 'react';

export function isEmpty(newContact) {
  switch ("") {
    case newContact.firstName:
    case newContact.lastName:
    case newContact.phone:
    case newContact.email:
    case newContact.profession:
      return false;
    default:
      return true;
  }
};

