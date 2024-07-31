import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useId } from 'react';
import { addContact } from '../../redux/contactsOps';
import css from './ContactForm.module.css';

const initialValues = {
  name: '',
  number: '',
};

const contacFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'too short')
    .max(100, 'too Long')
    .required('Required'),
  number: Yup.string().length(9, 'should be 9 ').required('Required'),
});

export default function ContactForm() {
  const nameId = useId();
  const phoneId = useId();
  const dispatch = useDispatch();

  function handleSubmit(values, actions) {
    dispatch(addContact(values));
    actions.resetForm();
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={contacFormSchema}
    >
      <Form className={css.contactFormWraper}>
        <label className={css.contactFormLabel} htmlFor={nameId}>
          Name
        </label>
        <Field
          className={css.contactFormInput}
          type="text"
          name="name"
          id={nameId}
        />
        <ErrorMessage name="name" component="span" />
        <label className={css.contactFormLabel} htmlFor={phoneId}>
          Number
        </label>
        <Field
          className={css.contactFormInput}
          type="text"
          name="number"
          id={phoneId}
          placeholder="xxx-xx-xx"
        />
        <ErrorMessage name="number" component="span" />
        <button className={css.userFormButton} type="submit">
          Submit
        </button>
      </Form>
    </Formik>
  );
}
