export default function Portfolio() {
  return (
    <main className="min-h-screen bg-white text-gray-800 p-6 font-sans">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold">Manoj Kumar Vallabhaneni</h1>
        <p className="text-lg mt-2 text-gray-600">Data Analyst | Data Engineer | AI Enthusiast</p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-700 max-w-3xl mx-auto">
          I'm a data-driven professional with a Master’s in Artificial Intelligence and 2.5 years of experience transforming raw data into actionable insights. My work focuses on ETL, data pipelines, business intelligence, and cloud analytics using tools like Python, SQL, Power BI, and Snowflake.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><strong>Titanic Dataset Visualization:</strong> EDA and visual storytelling using Python and Tableau.</li>
          <li><strong>Medical Insurance Cost Prediction:</strong> Predictive modeling using regression and ML techniques.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Resume</h2>
        <p className="text-gray-700">You can <a className="text-blue-600 underline" href="#">download my resume here</a>.</p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Microsoft Certified: Azure Fundamentals (AZ-900)</li>
          <li>Google Cloud Certified: Associate Cloud Engineer</li>
          <li>Databricks Accredited Lakehouse Fundamentals</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Tools & Skills</h2>
        <p className="text-gray-700">Python, SQL, R, Power BI, Tableau, Snowflake, dbt, Git, Excel, MySQL, MongoDB, AWS, Azure, GCP</p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p className="text-gray-700">Email: manojvallabhaneni16@gmail.com</p>
        <p className="text-gray-700">Phone: +1 859-979-7576</p>
        <p className="text-gray-700">LinkedIn: <a className="text-blue-600 underline" href="#">Your LinkedIn URL</a></p>
      </section>
    </main>
  );
}