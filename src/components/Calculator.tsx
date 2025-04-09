import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  RadioGroup,
  Radio,
  Input,
  Select,
  SelectItem,
  Button,
  Form,
} from "@heroui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Calculator = () => {
  const [action, setAction] = useState<null | string>(null);
  const navigate = useNavigate();

  const activity = [
    { key: "sedentary", label: "Sedentary (office job)" },
    { key: "light", label: "Light Exercise (1-2 days/week)" },
    { key: "moderate", label: "Moderate Exercise (3-5 days/week)" },
    { key: "heavy", label: "Heavy Exercise (6-7 days/week)" },
    { key: "athlete", label: "Athlete 2x per day" },
  ];

  return (
    <Card className="p-10">
      <CardHeader className="flex flex-col ">
        <h1 className="mb-4 text-2xl font-bold text-slate-800">
          Learn How Many Calories You Burn Every Day
        </h1>
        <p className="text-sm">
          Use the TDEE calculator to learn your Total Daily Energy Expenditure,
          a measure of how many calories you burn per day. This calorie
          calculator will also display your BMI, BMR, Macros & many other useful
          statistics!
        </p>
      </CardHeader>

      <CardBody>
        <div className="flex flex-col">
          <Form
            className="flex gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              let data = Object.fromEntries(new FormData(e.currentTarget));

              const queryParams = new URLSearchParams(
                Object.fromEntries(
                  Object.entries(data).map(([key, value]) => [
                    key,
                    String(value),
                  ])
                )
              ).toString();

              setAction(`submit ${JSON.stringify(data)}`);
              navigate(`/result?${queryParams}`);
            }}
          >
            <RadioGroup
              isRequired
              label="Select your Gender"
              name="gender"
              orientation="horizontal"
            >
              <Radio value="male">Male</Radio>
              <Radio value="female">Female</Radio>
            </RadioGroup>

            <Input isRequired label="Age" name="age" type="number" />
            <Input
              isRequired
              label="Weight"
              name="weight"
              placeholder="kg"
              type="number"
            />
            <Input
              isRequired
              label="Height"
              name="height"
              placeholder="cm"
              type="number"
            />

            <Select
              isRequired
              label="Activity"
              name="activity"
              placeholder="Select your activity level"
            >
              {activity.map((activityItem) => (
                <SelectItem key={activityItem.key}>
                  {activityItem.label}
                </SelectItem>
              ))}
            </Select>

            <Input
              label="Body Fat % (optional)"
              name="bodyFat"
              placeholder="15%"
              type="text"
            />

            <Button
              className="self-center mt-2 mb-2"
              type="submit"
              variant="bordered"
            >
              Calculate!
            </Button>
          </Form>
        </div>
      </CardBody>
      <Divider />
      <CardFooter className="flex justify-center">
        <p className="mt-8 text-xs">
          Questions? Email me at alexvdberg010109@gmail.com …and don&apos;t
          forget to check the FAQ
        </p>
      </CardFooter>
    </Card>
  );
};

export default Calculator;
