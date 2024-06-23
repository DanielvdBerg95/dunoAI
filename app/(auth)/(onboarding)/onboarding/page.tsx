'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Input } from '@/components/ui/input';

const questions = [
  { key: 'idea', label: 'Idea of your business', type: 'textarea' },
  { key: 'industry', label: 'Industry', type: 'select', options: ['Retail', 'Technology', 'Healthcare', 'Finance', 'Education', 'Other'] },
  { key: 'size', label: 'Size of your business', type: 'select', options: ['Sole proprietorship', 'Small (1-10 employees)', 'Medium (11-50 employees)', 'Large (51+ employees)'] },
  { key: 'location', label: 'Location of your business', type: 'text' },
  { key: 'age', label: 'Age of your business', type: 'text' },
  { key: 'primaryProductsOrServices', label: 'Primary products or services', type: 'text' },
  { key: 'role', label: 'Your role within the business', type: 'select', options: ['Owner', 'Manager', 'Employee', 'Freelancer', 'Other'] },
  { key: 'mainResponsibilities', label: 'Your main responsibilities', type: 'text' },
  { key: 'businessGoals', label: 'Business goals and objectives', type: 'text' },
];

const OnboardingPage = ({ }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [formData, setFormData] = useState<{ [key: string]: string }>({});

  useEffect(() => {
   
  }, []);

  const currentQuestion = questions[currentQuestionIndex];

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleNext = () => {
    const currentValue = formData[currentQuestion.key];

    // Check if the current question requires an answer
    if (currentValue || currentQuestion.type === 'select') {
      // Proceed to the next question if an answer has been provided
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        handleSubmit();
      }
    } else {
      // Show an alert indicating that an answer is required
      alert(`Please provide an answer for "${currentQuestion.label}".`);
    }
  };

  const handleSubmit = async () => {
    try {
      // Perform the update of the Organization document
      await axios.put(`/api/organizations/${""}`, formData);

      // Redirect to the dashboard route
      // Handle routing here if needed
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='fixed justify-content justify-evenly '>
      <h1 className='h1-semibold p-20'>Organization Onboarding</h1>
      <div className='flex-col p-5'>
        <form onSubmit={handleSubmit} className='flex-col pb-8'>
          <label>
            {currentQuestion.label}:
            {currentQuestion.type === 'select' && currentQuestion.options && (
              <select name={currentQuestion.key} value={formData[currentQuestion.key] || ''} onChange={handleChange}>
                {currentQuestion.options.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            )}
            {currentQuestion.type !== 'select' && (
              <Input
                type={currentQuestion.type}
                name={currentQuestion.key}
                value={formData[currentQuestion.key] || ''}
                onChange={handleChange}
              />
            )}
          </label>
        </form>
        <div className='flex flex-row-reverse right-0 justify-spacebetween'>
          <button className="right-0 inline-flex h-10 animate-shimmer items-center text-sm font-bold justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#1e3a8a,45%,#94a3b8,55%,#1e3a8a)] bg-[length:200%_100%] px-6 text-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50" type="button" onClick={handleNext} disabled={!formData[currentQuestion.key] && currentQuestion.type !== 'select'}>
            {currentQuestionIndex === questions.length - 1 ? 'Submit' : 'Next'}
          </button>
          <button
            className="inline-flex h-10 animate-shimmer items-center text-sm font-bold justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#1e3a8a,45%,#94a3b8,55%,#1e3a8a)] bg-[length:200%_100%] px-6 text-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mr-2"
            type="button"
            onClick={() => setCurrentQuestionIndex(currentQuestionIndex - 1)}
            disabled={currentQuestionIndex === 0}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingPage;
