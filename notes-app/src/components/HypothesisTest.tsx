import { useState } from 'react';

export const HypothesisTest = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      number: 1,
      title: 'State Hypotheses',
      content: (
        <div>
          <p className="mb-2">For comparing agility between Left Forwards (LF) and Left Midfielders (LM):</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>H₀:</strong> μLF - μLM = 0 (No difference in mean agility)</li>
            <li><strong>Ha:</strong> μLF - μLM ≠ 0 (There is a difference in mean agility)</li>
          </ul>
        </div>
      )
    },
    {
      number: 2,
      title: 'Check Assumptions',
      content: (
        <div>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Normality:</strong> Histograms and Q-Q plots show approximately normal distributions for both positions
            </li>
            <li>
              <strong>Independence:</strong> Players are independent observations
            </li>
            <li>
              <strong>Equal Variance:</strong> F-test confirms similar spread in both groups
            </li>
          </ul>
        </div>
      )
    },
    {
      number: 3,
      title: 'Select Test Statistic',
      content: (
        <div>
          <p className="mb-2">Two-sample t-test was selected because:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Comparing means between two independent groups</li>
            <li>Data meets normality assumptions</li>
            <li>Equal variances assumption is satisfied</li>
          </ul>
        </div>
      )
    },
    {
      number: 4,
      title: 'Calculate Test Statistic',
      content: (
        <div>
          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <pre className="text-sm">
              {`t.test(lf_agility, lm_agility,
  alternative = "two.sided",
  var.equal = TRUE)`}
            </pre>
          </div>
          <p><strong>Results:</strong></p>
          <ul className="list-disc pl-5 space-y-2">
            <li>t-statistic: 2.847</li>
            <li>degrees of freedom: 428</li>
            <li>p-value: 0.0046</li>
          </ul>
        </div>
      )
    },
    {
      number: 5,
      title: 'Make Decision',
      content: (
        <div>
          <p className="mb-2">At alpha = 0.05:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>p-value (0.0046) {'<'} alpha (0.05)</li>
            <li><strong>Decision:</strong> Reject H₀</li>
            <li>Strong evidence against the null hypothesis</li>
          </ul>
        </div>
      )
    },
    {
      number: 6,
      title: 'State Conclusion',
      content: (
        <div>
          <div className="space-y-4">
            <p>
              <strong>Statistical Conclusion:</strong> There is sufficient evidence to conclude that there is a significant 
              difference in mean agility between Left Forwards and Left Midfielders (p = 0.0046).
            </p>
            <p>
              <strong>Practical Interpretation:</strong> Left Forwards tend to have higher agility ratings than Left 
              Midfielders, which aligns with their role requirements in the game.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg mt-4">
              <p className="font-semibold">Effect Size:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Mean difference: 2.3 points</li>
                <li>Cohen's d: 0.275 (small to medium effect)</li>
                <li>95% CI: [0.71, 3.89]</li>
              </ul>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Six-Step Hypothesis Test</h2>
      
      <div className="flex space-x-2 overflow-x-auto pb-2">
        {steps.map((step) => (
          <button
            key={step.number}
            className={`px-4 py-2 rounded-lg whitespace-nowrap ${
              activeStep === step.number
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
            onClick={() => setActiveStep(step.number)}
          >
            Step {step.number}
          </button>
        ))}
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        {steps.map((step) => (
          <div
            key={step.number}
            className={`${activeStep === step.number ? 'block' : 'hidden'}`}
          >
            <h3 className="text-xl font-semibold mb-4">
              Step {step.number}: {step.title}
            </h3>
            {step.content}
          </div>
        ))}
      </div>

      <div className="flex justify-between mt-4">
        <button
          className={`px-4 py-2 rounded ${
            activeStep > 1
              ? 'bg-blue-600 text-white'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
          onClick={() => setActiveStep((prev) => Math.max(1, prev - 1))}
          disabled={activeStep === 1}
        >
          Previous Step
        </button>
        <button
          className={`px-4 py-2 rounded ${
            activeStep < 6
              ? 'bg-blue-600 text-white'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
          onClick={() => setActiveStep((prev) => Math.min(6, prev + 1))}
          disabled={activeStep === 6}
        >
          Next Step
        </button>
      </div>
    </div>
  );
};