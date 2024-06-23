const surveyFormValidation = (values) => {
    let errors = {};
  
    if (!values.fullName) {
      errors.fullName = 'Full Name is required';
    }
  
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
  
    if (!values.surveyTopic) {
      errors.surveyTopic = 'Survey Topic is required';
    }
  
    if (values.surveyTopic === 'Technology') {
      if (!values.technology.favoriteLanguage) {
        errors.technology = { ...errors.technology, favoriteLanguage: 'Favorite Programming Language is required' };
      }
      if (!values.technology.yearsOfExperience) {
        errors.technology = { ...errors.technology, yearsOfExperience: 'Years of Experience is required' };
      }
    }
  
    if (values.surveyTopic === 'Health') {
      if (!values.health.exerciseFrequency) {
        errors.health = { ...errors.health, exerciseFrequency: 'Exercise Frequency is required' };
      }
      if (!values.health.dietPreference) {
        errors.health = { ...errors.health, dietPreference: 'Diet Preference is required' };
      }
    }
  
    if (values.surveyTopic === 'Education') {
      if (!values.education.qualification) {
        errors.education = { ...errors.education, qualification: 'Highest Qualification is required' };
      }
      if (!values.education.fieldOfStudy) {
        errors.education = { ...errors.education, fieldOfStudy: 'Field of Study is required' };
      }
    }
  
    if (!values.feedback || values.feedback.length < 50) {
      errors.feedback = 'Feedback is required and must be at least 50 characters';
    }
  
    return errors;
  };
  
  export default surveyFormValidation;
  