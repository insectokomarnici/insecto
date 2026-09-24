export type ContactValues = { name: string; surname?: string; email?: string; phone: string; message: string };
export type ContactErrors = Partial<Record<keyof ContactValues, string>>;

type ContactValidationOptions = { requireSurname?: boolean; requireEmail?: boolean };

// Basic input validation only. A valid format does not establish a real phone number.
export function validateContact(values: ContactValues, options: ContactValidationOptions = {}): ContactErrors {
  const errors: ContactErrors = {};
  const name = values.name.trim();
  const surname = values.surname?.trim() ?? "";
  const email = values.email?.trim() ?? "";
  const phone = values.phone.trim();
  const message = values.message.trim();
  const digits = phone.replace(/\D/g, "");
  if (!name) errors.name = "Unesite ime.";
  if (options.requireSurname && !surname) errors.surname = "Unesite prezime.";
  else if (values.surname && values.surname.length > 80) errors.surname = "Prezime može imati najviše 80 znakova.";
  if (options.requireEmail && !email) errors.email = "Unesite e-mail adresu.";
  else if (email && (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))) errors.email = "Unesite ispravnu e-mail adresu.";
  if (!phone) errors.phone = "Unesite broj telefona na koji možemo da vas pozovemo.";
  else if (!/^\+?[\d\s().-]+$/.test(phone) || digits.length < 7 || digits.length > 15 || phone.length > 40) {
    errors.phone = "Proverite broj telefona. Unesite 7–15 cifara; razmaci i početni + su dozvoljeni.";
  }
  if (values.name.length > 80) errors.name = "Ime može imati najviše 80 znakova.";
  if (!message) errors.message = "Unesite poruku.";
  else if (values.message.length > 1000) errors.message = "Poruka može imati najviše 1000 znakova.";
  return errors;
}
