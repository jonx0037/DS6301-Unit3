import { useState } from 'react';

type CodeBlock = {
  title: string;
  code: string;
  explanation: string;
};

type CodeBlocks = {
  'data-prep': CodeBlock;
  'development': CodeBlock;
  'correlation': CodeBlock;
  'hypothesis': CodeBlock;
};

type TabKey = keyof CodeBlocks;

export const RCodeAnalysis = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('data-prep');

  const codeBlocks: CodeBlocks = {
    'data-prep': {
      title: 'Data Preparation',
      code: `# Create age groups and skill tiers using cut()
fifa_processed <- fifa %>%
  mutate(
    # Create age groups
    AgeGroup = cut(
      Age, 
      breaks = c(0, 20, 25, 30, Inf),
      labels = c("Youth (≤20)", "Rising (21-25)", "Peak (26-30)", "Veteran (>30)"),
      right = TRUE
    ),
    # Create skill tiers
    SkillTier = cut(
      Overall,
      breaks = c(0, 74, 79, 84, Inf),
      labels = c("Developing", "Professional", "Elite", "World Class"),
      right = TRUE
    )
  )`,
      explanation: 'This code segment preprocesses the FIFA dataset by creating categorical variables for age groups and skill tiers using the cut() function. This helps in organizing players into meaningful groups for analysis.'
    },
    'development': {
      title: 'Player Development Analysis',
      code: `# Analysis: Player Development Trajectory
age_group_stats <- fifa_processed %>%
  group_by(AgeGroup) %>%
  summarize(
    AvgOverall = mean(Overall, na.rm = TRUE),
    AvgPotential = mean(Potential, na.rm = TRUE),
    Count = n()
  ) %>%
  arrange(match(AgeGroup, c("Youth (≤20)", "Rising (21-25)", "Peak (26-30)", "Veteran (>30)")))`,
      explanation: 'This analysis calculates average overall and potential ratings across different age groups, helping us understand how player abilities develop over time.'
    },
    'correlation': {
      title: 'Correlation Analysis',
      code: `# Correlation Analysis
fifa_stats <- fifa_processed %>%
  select(Overall, Potential, Age)

# Create correlation plot using GGally
corr_plot <- ggpairs(fifa_stats,
                     title = "Correlation Analysis of Key Metrics")`,
      explanation: 'The correlation analysis examines relationships between key metrics like Overall rating, Potential, and Age, revealing important patterns in player development.'
    },
    'hypothesis': {
      title: 'Statistical Tests',
      code: `# Pooled T-Test for Elite vs World Class
elite_ratings <- fifa_processed %>%
  filter(SkillTier == "Elite") %>%
  pull(Overall)

world_class_ratings <- fifa_processed %>%
  filter(SkillTier == "World Class") %>%
  pull(Overall)

t_test <- t.test(elite_ratings, world_class_ratings, var.equal = TRUE)`,
      explanation: 'Statistical tests were performed to compare ratings between different skill tiers, providing evidence for significant differences in player abilities.'
    }
  };

  const tabs: TabKey[] = ['data-prep', 'development', 'correlation', 'hypothesis'];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">R Code Analysis</h2>
      
      <div className="flex space-x-4 border-b">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`py-2 px-4 ${
              activeTab === tab
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-500 hover:text-blue-500'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {codeBlocks[tab].title}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">{codeBlocks[activeTab].title}</h3>
          <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto">
            <code>{codeBlocks[activeTab].code}</code>
          </pre>
          <p className="mt-4 text-gray-700">{codeBlocks[activeTab].explanation}</p>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Key Insights</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Data preprocessing creates meaningful player categories</li>
            <li>Age groups reveal development patterns</li>
            <li>Correlation analysis shows relationships between metrics</li>
            <li>Statistical tests confirm significant differences between skill tiers</li>
          </ul>
        </div>
      </div>
    </div>
  );
};