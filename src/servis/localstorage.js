export const parsedContacts = (key, savedData) =>
  JSON.parse(localStorage.getItem(key)) || savedData;

export const contactsFromLocalStorage = setContact => {
  try {
    localStorage.setItem('contacts', JSON.stringify(setContact));
  } catch (err) {
    console.log(err);
  }
};