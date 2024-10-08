import BaseInputField from "@/components/molecules/formik-fields/BaseInputField";
import SelectMonth from "@/components/molecules/selects/SelectMonth";
import SelectNationality from "@/components/molecules/selects/SelectNationality";
import { Form, Formik } from "formik";
import { Minus, Plus } from "lucide-react";
import PhoneInput from "react-phone-number-input";
import DateInputComp from "../FormikError/DateInputComp";
import Dropdown from "./Dropdown";
import { useMutate } from "@/hooks/UseMutate";

function MainDataBookingForm({ DetailTour, setIsThanksVisible }) {
  const { mutate } = useMutate({
    mutationKey: ["bookings"],
    endpoint: `bookings`,
    onSuccess: () => {
      //   notify("success");
      setIsThanksVisible(true);
    },
    onError: (err) => {
      //   notify("error", err?.response?.data?.message);
    },
    formData: true,
  });
  return (
    <div>
      <Formik
        className="space-y-6"
        initialValues={{
          name: "",
          email: "",
          nationality_id: "",
          month: "",
          phone: "",
          start_at: "",
          num_of_adults: 1,
          num_of_children: 0,
          num_of_infants: 0,
          tour_id: DetailTour?.id,
          duration: DetailTour?.duration,
          phone_code: "+20",
        }}
        onSubmit={(values) =>
          mutate({
            ...values,
            phone: values?.phone.slice(2),
          })
        }
      >
        {({ setFieldValue, values }) => (
          <Form>
            <Dropdown
              items={[]}
              selectedItem={DetailTour?.destination}
              onSelect={() => {}}
              placeholder="Where"
              isDropdownOpen={false}
              setIsDropdownOpen={() => {}}
            />
            <div className="mb-2">
              <BaseInputField name="name" placeholder="Name" type="text" />
            </div>
            <div className="mb-2">
              <BaseInputField name="email" placeholder="Email" type="email" />
            </div>
            <div className="my-2">
              <SelectNationality
                name="nationality_id"
                placeholder="Select Nationality"
              />
            </div>

            <SelectMonth name="month" placeholder="Select Month" />

            <div className="relative flex items-center mt-2">
              <PhoneInput
                placeholder="Enter Your Number"
                value={values.phone}
                onChange={(value) => setFieldValue("phone", value)}
                countries={["EG"]}
                defaultCountry="EG"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="my-2">
              <DateInputComp
                name={"start_at"}
                countDays={DetailTour?.duration}
              />
            </div>

            <div className="space-y-4">
              {[
                { label: "Adults", name: "num_of_adults" },
                { label: "Children", name: "num_of_children" },
                { label: "Infants", name: "num_of_infants" },
              ].map(({ label, name }) => (
                <div key={label} className="flex justify-between items-center">
                  <span className="text-gray-700">{`Number of ${label}`}</span>
                  <div className="flex items-center space-x-2">
                    <button
                      type="button"
                      onClick={() =>
                        setFieldValue(name, Math.max(0, values[name] - 1))
                      }
                      className="p-2 border border-gray-300 rounded-md hover:bg-gray-100 active:bg-gray-200 transition duration-150"
                    >
                      <Minus size={16} />
                    </button>
                    <span>{values[name]}</span>
                    <button
                      type="button"
                      onClick={() => setFieldValue(name, values[name] + 1)}
                      className="p-2 border border-gray-300 rounded-md hover:bg-gray-100 active:bg-gray-200 transition duration-150"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="pt-4">
              <button
                type="submit"
                className="w-full p-3 bg-[#986518] text-white rounded-md hover:bg-yellow-700 transition duration-150"
              >
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default MainDataBookingForm;
