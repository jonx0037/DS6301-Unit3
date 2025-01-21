export const About = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">About</h2>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div>
              <h3 className="text-xl font-semibold">Jonathan A. Rocha</h3>
              <p className="text-gray-600">Data Science Student</p>
            </div>
          </div>

          <div className="border-t pt-4">
            <h4 className="font-semibold mb-2">Academic Information</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>Course: DS 6306 - Doing Data Science</li>
              <li>Institution: Southern Methodist University</li>
              <li>Project: FIFA Player Analysis - Unit 3</li>
            </ul>
          </div>

          <div className="border-t pt-4">
            <h4 className="font-semibold mb-2">Project Overview</h4>
            <p className="text-gray-700">
              This analysis explores FIFA player data, focusing on position comparisons,
              player development trajectories, and statistical analysis using R programming.
              The project demonstrates proficiency in data manipulation, visualization,
              and statistical testing techniques.
            </p>
          </div>

          <div className="border-t pt-4">
            <h4 className="font-semibold mb-2">Technical Skills Demonstrated</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h5 className="font-medium mb-1">Programming</h5>
                <ul className="list-disc pl-5 text-sm">
                  <li>R Programming</li>
                  <li>TypeScript/React</li>
                  <li>Data Visualization</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium mb-1">Analysis</h5>
                <ul className="list-disc pl-5 text-sm">
                  <li>Statistical Testing</li>
                  <li>Data Preprocessing</li>
                  <li>Exploratory Analysis</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t pt-4">
            <h4 className="font-semibold mb-2">Contact Information</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Email: jarocha@smu.edu</li>
              <li>GitHub: <a href="https://github.com/jonx0037/DS6306-Unit3" className="text-blue-600 hover:text-blue-800">https://github.com/jonx0037/DS6306-Unit3</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg">
        <h4 className="font-semibold mb-2">Acknowledgments</h4>
        <ul className="list-disc pl-5 space-y-2">
          <li>FIFA dataset from Kaggle</li>
          <li>R programming community</li>
          <li>Course instructors and peers</li>
        </ul>
      </div>
    </div>
  );
};