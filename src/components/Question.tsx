import React, { useEffect, useState, ChangeEvent, useContext } from 'react';
import './styles/Question.css';
import axios from 'axios';
import AuthContext from '../AuthContext';

const API_URI = 'https://cocoa-expert-system.onrender.com';

interface FormData {
  soil_type: string;
  soil_moisture: string;
  temperature: string;
  seedlings_exposed_to_sunlight: string;
  growth_stage: string;
  disease: string;
}

const Question: React.FC = () => {
  const { token } = useContext(AuthContext);
  const [diseases, setDiseases] = useState<string[]>([]);
  const [formData, setFormData] = useState<FormData>({
    soil_type: '',
    soil_moisture: '',
    temperature: '',
    seedlings_exposed_to_sunlight: '',
    growth_stage: '',
    disease: '',
  });
  const [actions, setActions] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  const responseMessages = [
    'After analyzing the inputs, the following steps are recommended to address the issue.',
    'Based on the data provided, the actions to help mitigate the situation are outlined below.',
    'The conditions have been reviewed, and the following recommendations for your crops are suggested.',
    'According to the analysis, actionable steps to improve the situation are listed below.',
    'Based on the diagnosis, necessary actions to take moving forward are provided.',
    'The following helpful steps are recommended based on the provided data.',
    'A course of action to manage the condition effectively is outlined below.',
    'After considering all factors, the recommended steps for better crop care are listed.',
    'To optimize crop health, the following actions are advised.',
    'The diagnostic process has led to the following key recommendations for next steps.',
    'The following expert-recommended actions are based on the current state of the crops.',
    'Following a thorough assessment, these steps should be followed.',
    'The situation has been reviewed, and the following steps to improve crop health are suggested.',
    'The actions to address the diagnosed issue effectively are outlined below.',
    'Based on the current condition of the crops, the following steps are recommended.',
    'After analyzing the data, the most effective actions to take are presented below.',
    'The recommended steps based on the current diagnosis for your crops are outlined.',
    'Based on the analysis, the suggested next steps to ensure optimal crop growth are provided.',
    'The issue has been identified, and the following steps to resolve it are suggested.',
  ];

  const randomResponse =
    responseMessages[Math.floor(Math.random() * responseMessages.length)];

  useEffect(() => {
    const fetchDiseases = async () => {
      try {
        const response = await axios.get<{ diseases: string[] }>(
          `${API_URI}/diseases`
        );
        setDiseases(response.data.diseases);
      } catch (err) {
        console.error('Error fetching diseases:', err);
        setDiseases([]);
      }
    };

    fetchDiseases();
  }, []);

  const handleChange = (
    e: ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDiagnose = async () => {
    setError(null);
    setActions([]);

    try {
      const payload = {
        soil_type: formData.soil_type,
        soil_moisture: formData.soil_moisture
          ? Number(formData.soil_moisture)
          : 0,
        temperature: formData.temperature ? Number(formData.temperature) : 0,
        seedlings_exposed_to_sunlight: formData.seedlings_exposed_to_sunlight,
        growth_stage: formData.growth_stage,
        disease: formData.disease,
      };

      const response = await axios.post<{ actions: string[] }>(
        `${API_URI}/diagnose`,
        JSON.stringify(payload),
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: token ? `Bearer ${token}` : '',
          },
        }
      );

      setActions(response.data.actions);
    } catch (err) {
      console.error('There was an error!', err);
      setError('An error occurred while diagnosing. Please try again.');
    }
  };

  return (
    <div className='question-container'>
      <div className='form-field'>
        <label>Soil Type:</label>
        <select
          name='soil_type'
          value={formData.soil_type}
          onChange={handleChange}
          required
        >
          <option value=''>Select soil type</option>
          <option value='sterilized'>Sterilized</option>
          <option value='not sterilized'>Not Sterilized</option>
        </select>
      </div>

      <div className='form-field'>
        <label>Soil Moisture (%):</label>
        <input
          type='number'
          name='soil_moisture'
          placeholder='0 - 100'
          min={0}
          max={100}
          value={formData.soil_moisture}
          onChange={handleChange}
          required
        />
      </div>

      <div className='form-field'>
        <label>Temperature (°C):</label>
        <input
          type='number'
          name='temperature'
          placeholder='-70 - 70'
          min='-70'
          max='70'
          value={formData.temperature}
          onChange={handleChange}
          required
        />
      </div>

      <div className='form-field'>
        <label>Seedlings Exposed to Sunlight:</label>
        <select
          name='seedlings_exposed_to_sunlight'
          value={formData.seedlings_exposed_to_sunlight}
          onChange={handleChange}
          required
        >
          <option value=''>Select</option>
          <option value='true'>Yes</option>
          <option value='false'>No</option>
        </select>
      </div>

      <div className='form-field'>
        <label>Growth Stage:</label>
        <select
          name='growth_stage'
          value={formData.growth_stage}
          onChange={handleChange}
          required
        >
          <option value=''>Select growth stage</option>
          <option value='germination'>Germination</option>
          <option value='seedling'>Seedling</option>
          <option value='nursery'>Nursery</option>
        </select>
      </div>

      <div className='form-field'>
        <label>Disease:</label>
        <select
          name='disease'
          value={formData.disease}
          onChange={handleChange}
          required
        >
          <option value=''>Select disease</option>
          {diseases.length > 0 ? (
            diseases.map((disease, index) => (
              <option key={index} value={disease}>
                {disease}
              </option>
            ))
          ) : (
            <option disabled>Loading diseases...</option>
          )}
        </select>
      </div>

      <div className='form-field'>
        <button className='diagnose-btn' onClick={handleDiagnose}>
          Submit
        </button>
      </div>

      <div className='title'>Response</div>
      <div className='res-box'>
        {error ? (
          <p className='error'>{error}</p>
        ) : actions.length > 0 ? (
          <>
            <p className='response-text'>{randomResponse}</p>
            <ul>
              {actions.map((action, index) => (
                <li key={index}>{action}</li>
              ))}
            </ul>
          </>
        ) : (
          <p className='waiting-text'>Waiting for submission...</p>
        )}
      </div>
    </div>
  );
};

export default Question;
