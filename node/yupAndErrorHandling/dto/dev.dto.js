const yup = require('yup');

module.exports = yup.object().shape({
  email: yup.string().required().email(),
  name: yup.string().required(),
  countryCode: yup.string().min(2).max(2).default('KR'),
});
