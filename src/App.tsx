import { createPortal } from "react-dom";

import {
  Form,
  FormSection,
  FormSubmit,
  Input,
} from "./components/ReusableForm";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Container from "./components/ui/Container";
import { string, z } from "zod";

const TestSchema = z.object({
  name: string(),
  email: string().email(),
});

type TTest = z.infer<typeof TestSchema>;

function App() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TTest>();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return createPortal(
    <Container>
      <Form onSubmit={handleSubmit(onSubmit) as SubmitHandler<FieldValues>}>
        <FormSection>
          <Input
            type={"text"}
            register={register("name")}
            errors={errors}
            label={"Name"}
          />
          <Input
            type={"email"}
            register={register("email")}
            errors={errors}
            label={"Email"}
          />
        </FormSection>
        <FormSubmit />
      </Form>
    </Container>,
    document.getElementById("portal") as Element
  );
}

export default App;
