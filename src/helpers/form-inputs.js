export const mainForm = {
  surname: "",
  firstName: "",
  midleName: "",
  birthday: "",
  phone: "7",
  gender: "",
  clientGroup: [],
  clientsGorup: [
    {
      label: "VIP",
      value: "VIP",
    },
    {
      label: "Проблемные",
      value: "Problematic",
    },
    {
      label: "ОМС",
      value: "OMS",
    },
  ],
  doctor: "Иванов",
  doctors: [
    {
      label: "Иванов",
      value: "Ivanov",
    },
    {
      label: "Захаров",
      value: "Zakharov",
    },
    {
      label: "Чернышева",
      value: "Chernisheva",
    },
  ],
  notSms: false,
};

export const adressForm = {
  index: "",
  country: "",
  region: "",
  city: "",
  street: "",
  house: "",
};

export const passportForm = {
  document: [],
  documents: [
    {
      label: "Паспорт",
      value: "Passport",
    },
    {
      label: "Свидетельство о рождении",
      value: "Birth certificate",
    },
    {
      label: "Вод. удостоверение",
      value: "Driver's license",
    },
  ],
  series: "",
  number: "",
  issued: "",
  dateIssue: "",
};
