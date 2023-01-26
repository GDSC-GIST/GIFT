// import the progress bar
import StepProgressBar from 'react-step-progress';
// import the stylesheet
import 'react-step-progress/dist/index.css';
 
// setup the step content
const step1Content = <h1>Step 1 Content</h1>;
const step2Content = <h1>Step 2 Content</h1>;
const step3Content = <h1>Step 3 Content</h1>;

 
// render the progress bar
<StepProgressBar
  startingStep={0}
  onSubmit={onFormSubmit}
  steps={[
    {
      label: 'Step 1',
      subtitle: '10%',
      name: 'step 1',
      content: step1Content
    },
    {
      label: 'Step 2',
      subtitle: '50%',
      name: 'step 2',
      content: step2Content,
      validator: step2Validator
    },
    {
      label: 'Step 3',
      subtitle: '100%',
      name: 'step 3',
      content: step3Content,
      validator: step3Validator
    }
  ]}
/>;