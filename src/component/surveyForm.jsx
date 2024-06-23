import { useState, useEffect } from 'react';
import useForm from '../hooks/useForm'; // Custom hook for form management
import { fetchAdditionalQuestions } from '../api/api'; // API function for fetching questions
import surveyFormValidation from '../utils/surveyFoemValidation';

const SurveyForm = () => {
  const [surveyTopic, setSurveyTopic] = useState('');
  const [additionalQuestions, setAdditionalQuestions] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitForm = async () => {
    setIsSubmitting(true);
    // Simulate API call for fetching additional questions based on survey topic
    const questions = await fetchAdditionalQuestions(values.surveyTopic);
    setAdditionalQuestions(questions);
    // Proceed with form submission logic
    console.log('Form submitted successfully:', values);
  };
  // Form fields
  const { handleChange, handleSubmit, values, errors } = useForm(
    {
      fullName: '',
      email: '',
      surveyTopic: '',
      technology: {
        favoriteLanguage: '',
        yearsOfExperience: '',
      },
      health: {
        exerciseFrequency: '',
        dietPreference: '',
      },
      education: {
        qualification: '',
        fieldOfStudy: '',
      },
      feedback: '',
    },
    surveyFormValidation,
    submitForm
  );

  // Handle form submission
 

  // Effect to fetch additional questions when survey topic changes
  useEffect(() => {
    const fetchQuestions = async () => {
      if (surveyTopic) {
        const questions = await fetchAdditionalQuestions(surveyTopic);
        setAdditionalQuestions(questions);
      }
    };

    fetchQuestions();
  }, [surveyTopic]);

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={values.fullName}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
          />
          {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        {/* Survey Topic */}
        <div>
          <label htmlFor="surveyTopic" className="block text-sm font-medium text-gray-700">Survey Topic</label>
          <select
            id="surveyTopic"
            name="surveyTopic"
            value={values.surveyTopic}
            onChange={(e) => {
              handleChange(e);
              setSurveyTopic(e.target.value);
            }}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
          >
            <option value="">Select Survey Topic</option>
            <option value="Technology">Technology</option>
            <option value="Health">Health</option>
            <option value="Education">Education</option>
          </select>
          {errors.surveyTopic && <p className="text-red-500 text-sm">{errors.surveyTopic}</p>}
        </div>

        {/* Conditional Sections */}
        {surveyTopic === 'Technology' && (
          <div>
            <label className="block text-sm font-medium text-gray-700">Technology Section</label>
            <div className="mt-1">
              <label htmlFor="favoriteLanguage" className="block text-sm font-medium text-gray-700">Favorite Programming Language</label>
              <select
                id="favoriteLanguage"
                name="technology.favoriteLanguage"
                value={values.technology.favoriteLanguage}
                onChange={(e)=>handleChange(e)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              >
                <option value="">Select Language</option>
                <option value="JavaScript">JavaScript</option>
                <option value="Python">Python</option>
                <option value="Java">Java</option>
                <option value="C#">C#</option>
              </select>
              {errors.technology && errors.technology.favoriteLanguage && <p className="text-red-500 text-sm">{errors.technology.favoriteLanguage}</p>}

              <label htmlFor="yearsOfExperience" className="block text-sm font-medium text-gray-700">Years of Experience</label>
              <input
                type="number"
                id="yearsOfExperience"
                name="technology.yearsOfExperience"
                value={values.technology.yearsOfExperience}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              />
              {errors.technology && errors.technology.yearsOfExperience && <p className="text-red-500 text-sm">{errors.technology.yearsOfExperience}</p>}
            </div>
          </div>
        )}

        {surveyTopic === 'Health' && (
          <div>
            <label className="block text-sm font-medium text-gray-700">Health Section</label>
            <div className="mt-1">
              <label htmlFor="exerciseFrequency" className="block text-sm font-medium text-gray-700">Exercise Frequency</label>
              <select
                id="exerciseFrequency"
                name="health.exerciseFrequency"
                value={values.health.exerciseFrequency}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              >
                <option value="">Select Frequency</option>
                <option value="Daily">Daily</option>
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
                <option value="Rarely">Rarely</option>
              </select>
              {errors.health && errors.health.exerciseFrequency && <p className="text-red-500 text-sm">{errors.health.exerciseFrequency}</p>}

              <label htmlFor="dietPreference" className="block text-sm font-medium text-gray-700">Diet Preference</label>
              <select
                id="dietPreference"
                name="health.dietPreference"
                value={values.health.dietPreference}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              >
                <option value="">Select Diet</option>
                <option value="Vegetarian">Vegetarian</option>
                <option value="Vegan">Vegan</option>
                <option value="Non-Vegetarian">Non-Vegetarian</option>
              </select>
              {errors.health && errors.health.dietPreference && <p className="text-red-500 text-sm">{errors.health.dietPreference}</p>}
            </div>
          </div>
        )}

        {surveyTopic === 'Education' && (
          <div>
            <label className="block text-sm font-medium text-gray-700">Education Section</label>
            <div className="mt-1">
              <label htmlFor="qualification" className="block text-sm font-medium text-gray-700">Highest Qualification</label>
              <select
                id="qualification"
                name="education.qualification"
                value={values.education.qualification}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              >
                <option value="">Select Qualification</option>
                <option value="High School">High School</option>
                <option value="Bachelor's">Bachelor`s</option>
                <option value="Master's">Master`s</option>
                <option value="PhD">PhD</option>
              </select>
              {errors.education && errors.education.qualification && <p className="text-red-500 text-sm">{errors.education.qualification}</p>}

              <label htmlFor="fieldOfStudy" className="block text-sm font-medium text-gray-700">Field of Study</label>
              <input
                type="text"
                id="fieldOfStudy"
                name="education.fieldOfStudy"
                value={values.education.fieldOfStudy}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              />
              {errors.education && errors.education.fieldOfStudy && <p className="text-red-500 text-sm">{errors.education.fieldOfStudy}</p>}
            </div>
          </div>
        )}

        {/* Feedback */}
        <div>
          <label htmlFor="feedback" className="block text-sm font-medium text-gray-700">Feedback</label>
          <textarea
            id="feedback"
            name="feedback"
            value={values.feedback || ''}
            onChange={handleChange}
            rows={4}
            className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${errors.feedback ? 'border-red-500' : ''}`}
          ></textarea>
          {errors.feedback && <p className="mt-1 text-sm text-red-500">{errors.feedback}</p>}
        </div>

        {/* Submit Button */}
        <div className="mt-6">
          <button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Submit
          </button>
        </div>
      </form>
      {
        isSubmitting && (
            <div className="mt-6 p-4 bg-gray-100 rounded-md">
        <h2 className="text-lg font-medium mb-2">Summary of Entered Data:</h2>
        <p><strong>Full Name:</strong> {values.fullName}</p>
        <p><strong>Email:</strong> {values.email}</p>
        <p><strong>Survey Topic:</strong> {values.surveyTopic}</p>

        {/* Conditional sections based on survey topic */}
        {values.surveyTopic === 'Technology' && (
          <div>
            <p><strong>Favorite Programming Language:</strong> {values.technology.favoriteLanguage}</p>
            <p><strong>Years of Experience:</strong> {values.technology.yearsOfExperience}</p>
          </div>
        )}

        {values.surveyTopic === 'Health' && (
          <div>
            <p><strong>Exercise Frequency:</strong> {values.health.exerciseFrequency}</p>
            <p><strong>Diet Preference:</strong> {values.health.dietPreference}</p>
          </div>
        )}

        {values.surveyTopic === 'Education' && (
          <div>
            <p><strong>Highest Qualification:</strong> {values.education.qualification}</p>
            <p><strong>Field of Study:</strong> {values.education.fieldOfStudy}</p>
          </div>
        )}

        {/* Additional questions */}
        {additionalQuestions.length > 0 && (
          <div className="mt-4">
            <h3 className="text-md font-medium mb-2">Additional Questions:</h3>
            <ul className="list-disc list-inside">
              {additionalQuestions.map((question, index) => (
                <li key={index}>{question}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
        )
      }
      
    </div>
  );
};

export default SurveyForm;
