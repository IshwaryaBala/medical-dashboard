MediCare AI Dashboard

A modern healthcare management dashboard built with React, Vite, and Tailwind CSS. Features interactive charts, patient vitals, appointment management, lab reports, and full dark mode support.

⚡ Live Demo

Check out the live dashboard here: https://medical-dashboard-9fa4e.web.app/

🚀 Features

Dashboard Analytics: Interactive Recharts for patient trends and statistics

Patient Vitals: Monitor weight, height, heart rate, glucose, temperature, and oxygen levels

Appointments: Scrollable calendar with visual time slots and status indicators

Lab Reports: View and download medical reports linked to patient profiles

Dark Mode: Smooth light/dark toggle with persistent settings

Responsive Design: Mobile-first layout optimized for all screen sizes

🛠️ Tech Stack

React 18 + Vite

Tailwind CSS for styling

Recharts for charts

Lucide React for icons

📁 Project Structure
medicare-ai-dashboard/
├── src/
│   ├── components/
│   │   ├── groupComponents/     # Sidenavbar, Topnavbar
│   │   ├── dashboardWidgets/    # StatsCard, ChatInterface, AppointmentsSection, PatientVitals, LabReports, ReasonTrendChart
│   │   └── pages/               # Dashboard page
│   ├── contexts/                # Theme context
│   ├── data.js                  # Sample data
│   ├── App.jsx                  # Root component
│   └── main.jsx                 # Entry point
├── public/                      # Static assets
├── tailwind.config.js           # Tailwind config
├── vite.config.js               # Vite config
└── package.json                 # Dependencies

⚡ Installation
git clone 
cd frontend
npm install
npm run dev


Open your browser at: http://localhost:5173

🤝 Contributing

Use functional components with hooks

Ensure dark mode compatibility

Keep code clean and readable

Built with ❤️ using React, Tailwind CSS, and Recharts
