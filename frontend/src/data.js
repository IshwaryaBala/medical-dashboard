export const statsData = [
  {
    id: 1,
    title: "Today Appointments",
    value: 250,
    comparison: 18,
    icon: "Calendar",
    color: "teal"
  },
  {
    id: 2,
    title: "Total Patients",
    value: 1842,
    comparison: 12,
    icon: "Users",
    color: "blue"
  },
  {
    id: 3,
    title: "Available Staff",
    value: 24,
    comparison: -3,
    icon: "UserCheck",
    color: "orange"
  }
];

export const sidebarData = {
  menuItems: [
    { id: 1, label: "Home", active: true, icon: "Home" },
    { id: 2, label: "Appointments", active: false, icon: "Calendar" },
    { id: 3, label: "Patients", active: false, icon: "Users" },
    { id: 4, label: "My Calendar", active: false, icon: "User" },
    { id: 5, label: "Lab Reports", active: false, icon: "FileText", hasChevron: true },
    { id: 6, label: "Settings", active: false, icon: "Settings", hasChevron: true },
    { id: 7, label: "Security and Privacy", active: false, icon: "Shield" },
    { id: 8, label: "Support and Feedback", active: false, icon: "HelpCircle" },
    { id: 9, label: "Terms of Services", active: false, icon: "FileText" }
  ],
  currentPage: "Appendectomy",
  pageDescription: "Support removal of the appendix, done due to infection. A common emergency procedure to prevent...",
  bottomActions: [
    { id: 1, label: "List", icon: "Star", color: "yellow" },
    { id: 2, label: "Task", icon: "HelpCircle", color: "default" }
  ]
};

export const chartData = [
  { month: 'Jan', Fever: 2000, Cold: 3000, Asthma: 1500 },
  { month: 'Feb', Fever: 2500, Cold: 3500, Asthma: 1800 },
  { month: 'Mar', Fever: 3000, Cold: 4000, Asthma: 2200 },
  { month: 'Apr', Fever: 3500, Cold: 4500, Asthma: 2500 },
  { month: 'May', Fever: 4000, Cold: 4800, Asthma: 3000 },
  { month: 'Jun', Fever: 3500, Cold: 4500, Asthma: 2800 },
  { month: 'Jul', Fever: 4500, Cold: 5000, Asthma: 3200 },
  { month: 'Aug', Fever: 4000, Cold: 4800, Asthma: 3500 },
  { month: 'Sep', Fever: 3500, Cold: 4500, Asthma: 3000 },
  { month: 'Oct', Fever: 3000, Cold: 4000, Asthma: 2500 },
  { month: 'Nov', Fever: 2500, Cold: 3500, Asthma: 2000 },
  { month: 'Dec', Fever: 2000, Cold: 3000, Asthma: 1800 }
];

export const calendarDays = [
  { day: 'Sun', date: 27, active: false },
  { day: 'Mon', date: 28, active: false },
  { day: 'Tue', date: 29, active: false },
  { day: 'Wed', date: 30, active: true },
  { day: 'Thu', date: 31, active: false },
  { day: 'Fri', date: 1, active: false },
  { day: 'Sat', date: 2, active: false }
];

export const appointments = [
  {
    time: '9 - 10 AM',
    title: 'General Checkup',
    doctor: 'Doctor 1',
    status: 'Finished',
    color: 'blue'
  },
  {
    time: '11 - 12 AM',
    title: 'General Checkup',
    doctor: 'Doctor 2',
    status: 'Upcoming',
    color: 'purple'
  }
];
export const colorMap = {
  blue: {
    bg: "bg-blue-50",
    border: "border-blue-500",
    dot: "bg-blue-500"
  },
  purple: {
    bg: "bg-purple-50",
    border: "border-purple-500",
    dot: "bg-purple-500"
  }
};

export const patientData = {
  lastUpdated: "30-07-2025",
  vitals: [
    { icon: "Weight", label: "Weight", value: "72 kg" },
    { icon: "Ruler", label: "Height", value: `5'7" inch` },
    { icon: "Heart", label: "Heart Rate", value: "82 bpm" },
    { icon: "Droplet", label: "Glucose", value: "99 mg/dL" },
    { icon: "Thermometer", label: "Body Temp", value: "99.5°F" },
    { icon: "Activity", label: "Oxygen", value: "95% SpO2" },
  ],
  allergies: ["Lidocaine", "Penicillin", "Peanuts"],
};

export const patientDataLab = {
  name: "Cal Patient 1",
  age: 52,
  gender: "Male",
  id: "CP_01",
  avatar: "CP",
  date: "28 Jul 25"
};

export const labReports = [
  {
    id: 1,
    title: "Checkup Report",
    icon: "FileText",
    iconBg: "bg-red-500",
    reportType: "Doctor Report"
  },
  {
    id: 2,
    title: "X-Ray Scan Report", 
    icon: "FileStack",
    iconBg: "bg-gray-500",
    reportType: "Lab Report"
  }
];

export const chatMessages = [
  {
    id: 1,
    sender: 'AI',
    message: 'Hello Dr. Doctor2, how can I help you today?',
    time: '12:45 PM',
    type: 'received'
  },
  {
    id: 2,
    sender: 'user',
    message: 'View next patient',
    type: 'sent'
  },
  {
    id: 3,
    sender: 'user',
    message: 'Manage upcoming appointments',
    type: 'sent'
  },
  {
    id: 4,
    sender: 'AI',
    message: 'View next patient',
    time: '12:47 PM',
    type: 'button'
  },
  {
    id: 5,
    sender: 'AI',
    message: `Here's a summary of Patient2344 (Male, 45 years):

• Last Visit: July 30
• Reason: Routine check-up for Type 2
• Medications:
  • Metformin 850mg, twice daily  
  • Lisinopril 10mg, once daily
• Recent Labs:
  • HbA1c: 7.2%
  • Fasting glucose: 132 mg/dL
  • Total cholesterol: 195 mg/dL (Normal)
• Vitals (Last Visit):
  • BP: 128/82 mmHg
  • HR: 74 bpm
• Patient Notes:
  • Reported mild fatigue in the mornings
  • Been ice-playing the above information in a
    different report from time to time

Is there anything else you would like to know about this patient's history or any other?`,
    time: '12:48 PM',
    type: 'received'
  },
  {
    id: 6,
    sender: 'user',
    message: "No, that's all for now. Thank you very much.",
    type: 'sent'
  },
  {
    id: 7,
    sender: 'AI',
    message: "You're welcome! Feel free to reach out if you need any further assistance. Have a great day.",
    time: '12:47 PM',
    type: 'received'
  }
];
