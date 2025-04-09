import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import {
  Divider,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/react";
import { useLocation } from "react-router-dom";

const Result = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const gender = queryParams.get("gender");
  const age = queryParams.get("age");
  const weight = queryParams.get("weight");
  const height = queryParams.get("height");
  const activity = queryParams.get("activity");

  //   const bodyFat = queryParams.get("bodyFat");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8">
      {/* {!bodyFat && (
        <Card className="min-w-[52rem] border border-yellow-600 p-2 bg-yellow-200 text-sm">
          <CardBody>
            <h1 className="font-bold text-yellow-700 text-medium ">Note:</h1>
            <p className="text-yellow-700">
              You left the body fat percentage field blank. A more accurate
              formula is used to estimate your TDEE when you know it.
            </p>
          </CardBody>
        </Card>
      )} */}

      <Card className="w-full max-w-[52rem] mx-auto p-10">
        <CardHeader className="flex flex-col mb-8">
          <h1 className="text-4xl font-bold">Your Results</h1>
          <p className="mt-4 text-sm">
            You&apos;re a {age} y/o {gender} who is {height} cm tall & weighs{" "}
            {weight} kg being {activity}.
          </p>
        </CardHeader>
        <CardBody>
          <div className="flex flex-row">
            <div>
              <h2 className="mb-4 text-sm font-bold text-center">
                Your Maintenance Calories
              </h2>
              <Card className="p-4">
                <CardBody className="p-8 w-[12rem] text-center">
                  <p className="text-xs">
                    <span className="text-4xl font-bold">2,436 </span>calories
                    per day
                  </p>
                  <Divider className="my-8" />
                  <p className="text-xs">
                    <span className="text-4xl font-bold">17,052</span> calories
                    per week
                  </p>
                </CardBody>
              </Card>
            </div>
            <div className="ml-8">
              <p className="text-sm">
                Based on the given information, the best estimate for your
                maintenance calories is <strong>2,436</strong> calories per day
                based on the Mifflin-St Jeor Formula, which is widely known to
                be the most accurate. The table below shows the difference if
                you were to have selected a different activity level.
              </p>
              <Table
                aria-label="Example static collection table"
                className="mt-4"
              >
                <TableHeader>
                  <TableColumn>Metabolic Rate</TableColumn>
                  <TableColumn>Calories per day</TableColumn>
                </TableHeader>
                <TableBody>
                  <TableRow key="1">
                    <TableCell>Base</TableCell>
                    <TableCell>2,030</TableCell>
                  </TableRow>
                  <TableRow key="2">
                    <TableCell>Sedentary</TableCell>
                    <TableCell>2,436</TableCell>
                  </TableRow>
                  <TableRow key="3">
                    <TableCell>Light Exercise</TableCell>
                    <TableCell>2,791</TableCell>
                  </TableRow>
                  <TableRow key="4">
                    <TableCell>Moderate Exercise</TableCell>
                    <TableCell>3,147</TableCell>
                  </TableRow>
                  <TableRow key="5">
                    <TableCell>heavy Exercise</TableCell>
                    <TableCell>3,502</TableCell>
                  </TableRow>
                  <TableRow key="6">
                    <TableCell>Athlete</TableCell>
                    <TableCell>3,857</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold">Macronutrients</h2>
          </div>
        </CardBody>
        <CardFooter className="flex justify-center">
          <p className="mt-8 text-xs">
            Questions? Email me at alexvdberg010109@gmail.com …and don&apos;t
            forget to check the FAQ
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Result;
