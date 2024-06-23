// src/components/JobApplicationForm.js
import { useState } from 'react';



import jobApplicationValidation from '../utils/jobApplicationValidation';
import useForm from '../hooks/useForm';

const JobApplicationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitForm = () => {
    setIsSubmitting(true);
    alert('Form submitted successfully');
  };

  const { handleChange, handleSubmit, values, errors} = useForm(
    {
      fullName: '',
      email: '',
      phoneNumber: '',
      applyingForPosition: '',
      relevantExperience: '',
      portfolioURL: '',
      managementExperience: '',
      additionalSkills: {
        JavaScript: false,
        CSS: false,
        Python: false,
      },      
      preferredInterviewTime: '',
    },
    jobApplicationValidation,
    submitForm
  );

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <form onSubmit={handleSubmit}  className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={values.fullName}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
          />
          {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            value={values.phoneNumber}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
          />
          {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Applying for Position</label>
          <select
            name="applyingForPosition"
            value={values.applyingForPosition}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
          >
            <option value="">Select Position</option>
            <option value="Developer">Developer</option>
            <option value="Designer">Designer</option>
            <option value="Manager">Manager</option>
          </select>
        </div>
        {(values.applyingForPosition === 'Developer' || values.applyingForPosition === 'Designer') && (
          <div>
            <label className="block text-sm font-medium text-gray-700">Relevant Experience (years)</label>
            <input
              type="number"
              name="relevantExperience"
              value={values.relevantExperience}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            />
            {errors.relevantExperience && <p className="text-red-500 text-sm">{errors.relevantExperience}</p>}
          </div>
        )}
        {values.applyingForPosition === 'Designer' && (
          <div>
            <label className="block text-sm font-medium text-gray-700">Portfolio URL</label>
            <input
              type="text"
              name="portfolioURL"
              value={values.portfolioURL}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            />
            {errors.portfolioURL && <p className="text-red-500 text-sm">{errors.portfolioURL}</p>}
          </div>
        )}
        {values.applyingForPosition === 'Manager' && (
          <div>
            <label className="block text-sm font-medium text-gray-700">Management Experience</label>
            <textarea
              name="managementExperience"
              value={values.managementExperience}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            />
            {errors.managementExperience && <p className="text-red-500 text-sm">{errors.managementExperience}</p>}
          </div>
        )}
        <div>
          <label className="block text-sm font-medium text-gray-700">Additional Skills</label>
          <div className="mt-1 space-y-2">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="additionalSkills"
                value="JavaScript"
                checked={values.additionalSkills.JavaScript}
                onChange={(e) => {
                  handleChange({
                    target: {
                      name: 'additionalSkills',
                      value: {
                        ...values.additionalSkills,
                        JavaScript: e.target.checked,
                      },
                    },
                  });
                  
                }}
                className="form-checkbox"
              />
              <span className="ml-2">JavaScript</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="additionalSkills"
                value="CSS"
                checked={values.additionalSkills.CSS}
                onChange={(e) => {
                  handleChange({
                    target: {
                      name: 'additionalSkills',
                      value: {
                        ...values.additionalSkills,
                        JavaScript: e.target.checked,
                      },
                    },
                  });
                  
                  
                }}
                className="form-checkbox"
              />
              <span className="ml-2">CSS</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="additionalSkills"
                value="Python"
                checked={values.additionalSkills.Python}
                onChange={(e) => {
                  handleChange({
                    target: {
                      name: 'additionalSkills',
                      value: {
                        ...values.additionalSkills,
                        JavaScript: e.target.checked,
                      },
                    },
                  });
                  
                }}
                className="form-checkbox"
              />
              <span className="ml-2">Python</span>
            </label>
          </div>
          {errors.additionalSkills && <p className="text-red-500 text-sm">{errors.additionalSkills}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Preferred Interview Time</label>
          <input
            type="datetime-local"
            name="preferredInterviewTime"
            value={values.preferredInterviewTime}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
          />
          {errors.preferredInterviewTime && <p className="text-red-500 text-sm">{errors.preferredInterviewTime}</p>}
        </div>
        <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700">
          Submit
        </button>
      </form>
      {isSubmitting && (
        <div className="mt-6 p-4 bg-gray-100 rounded-md shadow-md">
          <h2 className="text-xl font-semibold">Summary</h2>
          <p><strong>Full Name:</strong> {values.fullName}</p>
          <p><strong>Email:</strong> {values.email}</p>
          <p><strong>Phone Number:</strong> {values.phoneNumber}</p>
          <p><strong>Applying for Position:</strong> {values.applyingForPosition}</p>
          {(values.applyingForPosition === 'Developer' || values.applyingForPosition === 'Designer') && (
            <p><strong>Relevant Experience:</strong> {values.relevantExperience}</p>
          )}
          {values.applyingForPosition === 'Designer' && (
            <p><strong>Portfolio URL:</strong> {values.portfolioURL}</p>
          )}
          {values.applyingForPosition === 'Manager' && (
            <p><strong>Management Experience:</strong> {values.managementExperience}</p>
          )}
         <p><strong>Additional Skills:</strong> {Object.keys(values.additionalSkills).filter(skill => values.additionalSkills[skill]).join(', ')}</p>

          <p><strong>Preferred Interview Time:</strong> {values.preferredInterviewTime}</p>
        </div>
      )}
    </div>
  );
};

export default JobApplicationForm;
