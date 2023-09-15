import { Field, Formik } from "formik";

export const Form = () => {
  return (
    <div>
      return (
      <div>
        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={(values, { resetForm }) => {
            resetForm();
          }}
        >
          {(formik) => {
            const { handleChange, setFieldTouched } = formik;
            return (
              <Form>
                <Field
                  component="select"
                  name="name"
                  placeholder="Name"
                  onChange={(e) => {
                    setFieldTouched("name");
                    handleChange(e);
                  }}
                >
                  <option value="NY">New York</option>
                  <option value="SF">San Francisco</option>
                  <option value="CH">Chicago</option>
                  <option value="OTHER">Other</option>
                </Field>
              </Form>
            );
          }}
        </Formik>
      </div>
      );
    </div>
  );
};