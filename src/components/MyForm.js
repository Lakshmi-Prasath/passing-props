import Validation from "./Validation";
import './MyForm.css'
function MyForm(props) {
    const { formik } = Validation();
    return (
        <div className="form">
            <form onSubmit={formik.handleSubmit} >
                <div className="input-container ic1" >
                    <input
                        className="input"
                        id="firstName"
                        name="firstName"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.firstName}
                    />
                    <div className="cut"></div>
                    <label className="placeholder" htmlFor="firstName">First Name</label>
                </div>
                {formik.touched.firstName && formik.errors.firstName ? (
                    <div className="alert">*{formik.errors.firstName}</div>
                ) : null}
                <div className="input-container ic2">
                    <input
                        className="input"
                        id="lastName"
                        name="lastName"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.lastName}
                    />
                    <div className="cut"></div>
                    <label className="placeholder" htmlFor="lastName">Last Name</label>
                </div>
                {formik.touched.lastName && formik.errors.lastName ? (
                    <div className="alert">*{formik.errors.lastName}</div>
                ) : null}
                <div className="input-container ic2">
                    <input
                        className="input"
                        id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    <div className="cut cut-short"></div>
                    <label className="placeholder" htmlFor="email">Email Address</label>
                </div>
                {formik.touched.email && formik.errors.email ? (
                    <div className="alert">*{formik.errors.email}</div>
                ) : null}
                <div className="input-container ic2">
                    <input
                        className="input"
                        id="confirmEmail"
                        name="confirmEmail"
                        type="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.confirmEmail}
                    />
                    <div className="cut cut-ce"></div>
                    <label className="placeholder" htmlFor="email">Confirm Email Address</label>
                </div>
                {formik.touched.confirmEmail && formik.errors.confirmEmail ? (
                    <div className="alert">*{formik.errors.confirmEmail}</div>
                ) : null}
                <div className="input-container ic2">
                    <input
                        className="input"
                        id="password"
                        name="password"
                        type="password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                    />
                    <div className="cut"></div>
                    <label className="placeholder" htmlFor="email">Password</label>
                </div>
                {formik.touched.password && formik.errors.password ? (
                    <div className="alert">*{formik.errors.password}</div>
                ) : null}
                <div className="input-container ic2">
                    <input
                        className="input"
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.confirmPassword}
                    />
                    <div className="cut cut-cp"></div>
                    <label className="placeholder" htmlFor="email">Confirm Password</label>
                </div>
                {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                    <div className="alert">*{formik.errors.confirmPassword}</div>
                ) : null}

                <div className='tickboxsection'>

                    <input
                        id="mustConfirm"
                        name="mustConfirm"
                        type="checkbox"
                        className='tickbox'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.mustConfirm}
                        placeholder="e.g. • • • • • • "
                    />
                    <label htmlFor="tickboxlabel" className='tickboxlabel'>
                        I am a developer
                    </label>

                </div>
                {formik.touched.mustConfirm && formik.errors.mustConfirm ? (
                    <div className='alert'>*{formik.errors.mustConfirm}</div>
                ) : null}

                <button className="submit" type="submit">Submit</button>
            </form>
        </div>
    );
}

export default MyForm