import { useFormik } from 'formik';
import * as Yup from 'yup';
function Validation(props) {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            confirmEmail: '',
            password: '',
            confirmPassword: '',
            mustConfirm: false,
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .matches(/^[a-zA-Z]*$/, 'Must be alphabets')
                .required('Required'),

            lastName: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .matches(/^[a-zA-Z]*$/, 'Must be alphabets')
                .required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            confirmEmail: Yup.string()
                .oneOf([Yup.ref('email'), null], 'Emails must match')
                .required('Required'),
            password: Yup.string()
                .min(6, 'Must be at least 6 characters')
                .max(20, 'Must be 20 characters or less')
                .matches(/^[a-zA-Z0-9]*$/, 'Must be alphanumeric')
                .required('Required'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
                .required('Required'),
            mustConfirm: Yup.boolean().oneOf([true], 'You must confirm the terms'),
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return { formik }
}
export default Validation