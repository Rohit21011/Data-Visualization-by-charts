// src/components/EventRegistrationForm.js
import { useState } from 'react';
import useForm from '../hooks/useForm';
import registrationValidation from '../utils/registration';

const EventRegistrationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitForm = () => {
    setIsSubmitting(true);
    alert('Form submitted successfully');
  };

  const { handleChange, handleSubmit, values, errors } = useForm(
    {
      name: '',
      email: '',
      age: '',
      isAttendingWithGuest: 'No',
      guestName: '',
    },
    registrationValidation,
    submitForm
  );

  return (
    <div className="max-w-xl mx-auto mt-10 p-md-6 bg-white rounded-lg ">
      <form
        onSubmit={handleSubmit}
        noValidate
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <h2 className="text-2xl font-bold mb-4">Event Registration</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.name && (
            <p className="text-red-500 text-xs italic">{errors.name}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.email && (
            <p className="text-red-500 text-xs italic">{errors.email}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Age
          </label>
          <input
            type="number"
            name="age"
            value={values.age}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.age && (
            <p className="text-red-500 text-xs italic">{errors.age}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Are you attending with a guest?
          </label>
          <select
            name="isAttendingWithGuest"
            value={values.isAttendingWithGuest}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="No">No</option>
            <option value="Yes">Yes</option>
          </select>
        </div>
        {values.isAttendingWithGuest === 'Yes' && (
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Guest Name
            </label>
            <input
              type="text"
              name="guestName"
              value={values.guestName}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.guestName && (
              <p className="text-red-500 text-xs italic">{errors.guestName}</p>
            )}
          </div>
        )}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
      {isSubmitting && (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mt-4">
          <h2 className="text-2xl font-bold mb-4">Summary</h2>
          <p className="mb-2">
            <strong>Name:</strong> {values.name}
          </p>
          <p className="mb-2">
            <strong>Email:</strong> {values.email}
          </p>
          <p className="mb-2">
            <strong>Age:</strong> {values.age}
          </p>
          <p className="mb-2">
            <strong>Attending with Guest:</strong> {values.isAttendingWithGuest}
          </p>
          {values.isAttendingWithGuest === 'Yes' && (
            <p className="mb-2">
              <strong>Guest Name:</strong> {values.guestName}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default EventRegistrationForm;
