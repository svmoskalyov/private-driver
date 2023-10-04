import * as yup from 'yup'

export const registerSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Username must be at least 2 characters')
    .max(32, 'Username must be less than or equal to 32 characters')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name must contain letters and space',
    )
    .required('Username is a required field'),
  email: yup
    .string()
    .email('Email must be a valid email')
    .min(3, 'Email must be at least 3 characters')
    .max(64, 'Email must be less than or equal to 64 characters')
    .matches(
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      'Email address must be a valid address',
    )
    .required('Email is a required field'),
  password: yup
    .string()
    // .min(8, 'Password must be 8 characters long')
    // .matches(/[0-9]/, 'Password requires a number')
    // .matches(/[a-z]/, 'Password requires a lowercase letter')
    // .matches(/[A-Z]/, 'Password requires an uppercase letter')
    // .matches(/[^\w]/, 'Password requires a symbol')
    // .matches(
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    //   'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character',
    // )
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      'Password must contain at least 8 characters, one uppercase, one number and one special case character',
    )
    .required('Password is a required field'),
})

export const loginSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Username must be at least 2 characters')
    .max(32, 'Username must be less than or equal to 32 characters')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name must contain letters, numbers and space',
    )
    .required('Username is a required field'),
  email: yup
    .string()
    .email('Email must be a valid email')
    .min(3, 'Email must be at least 3 characters')
    .max(64, 'Email must be less than or equal to 64 characters')
    .matches(
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      'Email address must be a valid address',
    )
    .required('Email is a required field'),
})

export const bookSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Username must be at least 2 characters')
    .max(32, 'Username must be less than or equal to 32 characters')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name must contain letters, numbers and space',
    )
    .required('Username is a required field'),
  email: yup
    .string()
    .email('Email must be a valid email')
    .min(3, 'Email must be at least 3 characters')
    .max(64, 'Email must be less than or equal to 64 characters')
    .matches(
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      'Email address must be a valid address',
    )
    .required('Email is a required field'),
  phone: yup
    .string()
    .min(8, 'Phone must be at least 8 characters')
    .max(64, 'Phone must be less than or equal to 64 characters')
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Invalid phone number format',
    )
    .required('Phone is a required field'),
  planning: yup.string().required('Choice is a required field'),
})
