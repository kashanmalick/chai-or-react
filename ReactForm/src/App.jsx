import "./App.css";
import { useForm } from "react-hook-form";
import { useState } from "react";
//Import Sweet Alert
import Swal from "sweetalert2";

function App() {
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm({
    defaultValues: {
      entryDate: new Date().toISOString().split("T")[0],
    },
  });
  //console.log(errors);

  const [selectedOption, setSelectedOption] = useState("Full Day");

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };
  const handleFormSubmit = (data) => {
    if(data.radioOption == "Full Day"){
      data.radioOption = false
    }else{
      data.radioOption = true
    }
    console.log(data);
    Swal.fire({
      position: "centre",
      icon: "success",
      title: "Saved Successfully",
      showConfirmButton: false,
      timer: 1500,
    });
    resetField("dateFrom")
    resetField("dateTo")
    resetField("noDays")
    resetField("leaveType")
    resetField("reason")
  };

  return (
    <>
      <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
      <h1 className="text-4xl font-bold bg-yellow-300 p-4">
        This is React Form
      </h1>
      <div className="flex justify-center">
        <form
          className="flex flex-col p-4 w-[50%] mt-2 gap-2"
          onSubmit={handleSubmit(handleFormSubmit)}
        >
          <div className="flex justify-end">
            <div className="w-[30%] text-left pt-2">
              <label className="font-bold text-sm">Entry Date :</label>
            </div>
            <div className="w-[70%]">
              <input
                type="date"
                {...register("entryDate", { required: "This is Required" })}
                className="border p-2 w-full"
              />
            </div>
          </div>
          <p className="text-centre">{errors.entryDate?.message}</p>

          <div className="flex justify-end">
            <div className="w-[30%] text-left pt-2">
              <label className="p-2 font-bold text-sm">Date From :</label>
            </div>
            <div className="w-[70%]">
              <input
                type="date"
                {...register("dateFrom", {
                  required: "This is Required",
                })}
                placeholder="mm/dd/yyyy"
                className="border p-2 w-full"
              />
            </div>
          </div>
          <p className="text-centre">{errors.dateFrom?.message}</p>
          <div className="flex justify-end">
            <div className="w-[30%] text-left pt-2">
              <label className="p-2 font-bold text-sm">Date To :</label>
            </div>
            <div className="w-[70%]">
              <input
                type="date"
                {...register("dateTo", {
                  required: "This is Required",
                })}
                placeholder="mm/dd/yyyy"
                className="border p-2 w-full"
              />
            </div>
          </div>
          <p className="text-centre">{errors.dateTo?.message}</p>
          <div className="flex justify-end">
            <div className="w-[30%] text-left pt-2">
              <label className="p-2 font-bold text-sm">Number Of Days:</label>
            </div>
            <div className="w-[70%]">
              <input
                type="text"
                {...register("noDays", {
                  required: "This is Required",
                })}
                placeholder="Number Of Days"
                className="border p-2 w-full"
              />
            </div>
          </div>
          <p className="text-centre">{errors.noDays?.message}</p>
          <div className="flex justify-between">
            <label className="p-2 font-bold text-sm">Leave Type:</label>
            <select
              {...register("leaveType", {
                required: "Please Select Your Leave",
              })}
              className="border p-2 w-[70%]"
            >
              <option>**** Select Leave ****</option>
              <option>Sick Leave</option>
              <option>Casual Leave</option>
              <option>Annual Leave</option>
              <option>Event Leave</option>
              <option>Maternity Leave</option>
            </select>
          </div>
          <p className="text-centre">{errors.leaveType?.message}</p>
          <div className="flex justify-between">
            <label className="p-2 font-bold text-sm">Leave Duration:</label>
            <div className=" w-[70%] flex items-center">
              <label>
                <input
                  type="radio"
                  value="Full Day"
                  {...register("radioOption")}
                  checked={selectedOption === "Full Day"}
                  onChange={handleOptionChange}
                  className="mr-2"
                />
                Full Day
              </label>
              <label>
                <input
                  type="radio"
                  value="Half Day"
                  {...register("radioOption")}
                  checked={selectedOption === "Half Day"}
                  onChange={handleOptionChange}
                  className="ml-2 mr-2"
                />
                Half Day
              </label>
            </div>
          </div>
          <div className="flex justify-between">
            <label className="p-2 font-bold text-sm">Reason:</label>
            <textarea
              type="textarea"
              {...register("reason")}
              placeholder="Entre Your Reason"
              className="border p-2 w-[70%]"
            />
          </div>

          <div>
            <input
              type="submit"
              className="border p-2 w-[25%] rounded-lg bg-green-600 text-white font-bold tracking-wider text-center mt-2"
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
