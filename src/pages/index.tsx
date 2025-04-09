import Calculator from "@/components/Calculator";

export default function IndexPage() {
  return (
    <main className="flex flex-col justify-center h-screen max-w-[52rem] mx-auto">
      <Calculator />

      <div className="flex flex-row mt-8">
        <div className="flex-1">
          <h1 className="text-xl font-bold text-slate-800">
            How TDEE Is Calculated
          </h1>
          <div className="flex flex-col gap-2 mt-2 text-sm">
            <p>
              Your Total Daily Energy Expenditure (TDEE) is an estimation of how
              many calories you burn per day when exercise is taken into
              account. It is calculated by first figuring out your Basal
              Metabolic Rate, then multiplying that value by an activity
              multiplier.
            </p>
            <p>
              Since your BMR represents how many calories your body burns when
              at rest, it is necessary to adjust the numbers upwards to account
              for the calories you burn during the day. This is true even for
              those with a sedentary lifestyle. Our TDEE calculator uses the
              best formulas and displays your score in a way that&apos;s easy to
              read and meaningful.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center ml-8">
          <img alt="tdee pie chart" src="tdee-pie-chart.png" />
        </div>
      </div>
    </main>
  );
}
