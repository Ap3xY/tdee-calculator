import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { useLocation } from "react-router-dom";

const Result = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const gender = queryParams.get("gender");
  const age = queryParams.get("age");
  const weight = queryParams.get("weight");
  const height = queryParams.get("height");
  const activity = queryParams.get("activity");
  const bodyFat = queryParams.get("bodyFat");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8">
      {!bodyFat && (
        <Card className="max-w-[52rem] border border-yellow-600 p-2 bg-yellow-200">
          <CardBody>
            <h1 className="text-lg font-bold text-yellow-700">Note:</h1>
            <p className="text-yellow-700">
              You left the body fat percentage field blank. A more accurate
              formula is used to estimate your TDEE when you know it.
            </p>
          </CardBody>
        </Card>
      )}

      <Card className="w-full max-w-[52rem] mx-auto p-10">
        <CardHeader className="flex flex-col">
          <h1 className="text-2xl font-bold">Your Results</h1>
          <p className="mt-4 text-sm">
            You&apos;re a {age} y/o {gender} who is {height} cm tall & weighs{" "}
            {weight} kg being {activity} {bodyFat} %
          </p>
        </CardHeader>
        <CardBody>Body</CardBody>
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
