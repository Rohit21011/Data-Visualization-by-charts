const jobApplicationValidation = (values) => {
  let errors = {};
  const { fullName, email, phoneNumber, applyingForPosition, relevantExperience, portfolioURL, managementExperience, additionalSkills, preferredInterviewTime } = values;

  switch (applyingForPosition) {
    case 'Developer':
    case 'Designer':
      if (!relevantExperience) {
        errors.relevantExperience = 'Relevant Experience is required';
      } else if (relevantExperience <= 0) {
        errors.relevantExperience = 'Relevant Experience must be greater than 0';
      }
      if (applyingForPosition === 'Designer' && !portfolioURL) {
        errors.portfolioURL = 'Portfolio URL is required';
      } else if (portfolioURL && !/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i.test(portfolioURL)) {
        errors.portfolioURL = 'Portfolio URL is invalid';
      }
      break;

    case 'Manager':
      if (!managementExperience) {
        errors.managementExperience = 'Management Experience is required';
      }
      break;

    default:
      break;
  }

  if (!fullName) {
    errors.fullName = 'Full Name is required';
  }

  if (!email) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = 'Email address is invalid';
  }

  if (!phoneNumber) {
    errors.phoneNumber = 'Phone Number is required';
  } else if (!/^\d+$/.test(phoneNumber)) {
    errors.phoneNumber = 'Phone Number must be a valid number';
  }

  // Validate additionalSkills
  const selectedSkills = Object.values(additionalSkills);
  if (!selectedSkills.some(skill => skill)) {
    errors.additionalSkills = 'At least one skill must be selected';
  }

  if (!preferredInterviewTime) {
    errors.preferredInterviewTime = 'Preferred Interview Time is required';
  }

  return errors;
};

export default jobApplicationValidation;
