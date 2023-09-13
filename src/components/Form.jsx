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
                  type="text"
                  name="name"
                  placeholder="Name"
                  onChange={(e) => {
                    setFieldTouched("name");
                    handleChange(e);
                  }}
                />
              </Form>
            );
          }}
        </Formik>
      </div>
      );
    </div>
  );
};