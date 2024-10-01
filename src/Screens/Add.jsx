import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../fb.";

const Add = () => {
  const [formData, setFormData] = useState({
    day: "",
    date: "",
    time: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Format the date to "YYYY-MM-DD" if necessary
    const formattedData = {
      ...formData,
      date: new Date(formData.date).toISOString().split("T")[0], // Ensuring the date is stored in "YYYY-MM-DD" format
    };

    try {
      const matchRef = await addDoc(collection(db, "matches"), formattedData);
      console.log("Match added:", matchRef.id);
      setFormData({
        day: "",
        date: "",
        time: "",
      });
    } catch (error) {
      console.log("Error adding match:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <form
        onSubmit={handleSubmit}
        className=" p-6 rounded-lg text-md shadow-md flex flex-col gap-4 w-full max-w-sm"
      >
        {/* Day Dropdown */}
        <h1 className="text-2xl font-bold text-center">Add new game</h1>
        <select
          name="day"
          value={formData.day}
          onChange={handleChange}
          required
          className="p-2 border border-gray-300 rounded text-black"
        >
          <option value="" disabled>
            Select a day
          </option>
          <option value="Sunday">Sunday</option>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
        </select>

        {/* Date Input */}
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded text-black"
        />

        {/* Time Input */}
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded text-black"
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="p-2 bg-white text-black border border-black rounded hover:bg-black hover:text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Add;
