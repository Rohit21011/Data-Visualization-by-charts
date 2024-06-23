export const fetchAdditionalQuestions = async (topic) => {
    // Mocking API call, replace with actual API call
    const technologyQuestions = [
      'What is your favorite IDE for coding?',
      'Which programming language are you most interested in learning next?'
    ];
    const healthQuestions = [
      'Do you participate in any specific fitness activities?',
      'What dietary changes have you made recently?'
    ];
    const educationQuestions = [
      'Why did you choose your field of study?',
      'What are your career goals after completing your education?'
    ];
  
    let additionalQuestions = [];
  
    switch (topic) {
      case 'Technology':
        additionalQuestions = technologyQuestions;
        break;
      case 'Health':
        additionalQuestions = healthQuestions;
        break;
      case 'Education':
        additionalQuestions = educationQuestions;
        break;
      default:
        break;
    }
  
    return additionalQuestions;
  };
  